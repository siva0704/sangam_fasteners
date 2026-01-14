import { useState, useRef, useEffect } from "react";
import { products } from "@/constants/data";
import AnimatedSection from "./AnimatedSection";
import * as THREE from "three";
// @ts-ignore
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { RotateCcw, Home, Eye, EyeOff, Layers, Play, Pause, ZoomIn, ZoomOut } from "lucide-react";

// Texture/Material Options
const MATERIALS = {
    steel: { name: "Stainless Steel", color: 0xe2e8f0, roughness: 0.2, metalness: 0.8 },
    black: { name: "Black Oxide", color: 0x1e293b, roughness: 0.5, metalness: 0.5 },
    brass: { name: "Brass / Gold", color: 0xfacc15, roughness: 0.3, metalness: 0.9 },
    zinc: { name: "Zinc Plated", color: 0x94a3b8, roughness: 0.4, metalness: 0.6 }
};

const SectionProduct3DExplorer = () => {
    const [selectedProductId, setSelectedProductId] = useState(products[0]?.id || "");
    const [isWireframe, setIsWireframe] = useState(false);
    const [autoRotate, setAutoRotate] = useState(true);
    const [selectedTexture, setSelectedTexture] = useState<keyof typeof MATERIALS>('steel');

    const mountRef = useRef<HTMLDivElement>(null);
    const sceneRef = useRef<THREE.Scene | null>(null);
    const cameraRef = useRef<THREE.PerspectiveCamera | null>(null);
    const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
    const controlsRef = useRef<any>(null);
    const modelRef = useRef<THREE.Group | null>(null);
    const animationFrameRef = useRef<number | null>(null);

    const selectedProduct = products.find(p => p.id === selectedProductId) || products[0];

    // Initialize Three.js Scene
    useEffect(() => {
        if (!mountRef.current) return;

        // Cleanup previous scene if exists
        if (rendererRef.current) {
            mountRef.current.innerHTML = "";
        }

        // Scene
        const scene = new THREE.Scene();
        sceneRef.current = scene;
        scene.background = new THREE.Color(0xf8fafc); // Slate-50

        // Camera
        const width = mountRef.current.clientWidth;
        const height = mountRef.current.clientHeight;
        const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 100);
        camera.position.set(4, 3, 5);
        cameraRef.current = camera;

        // Renderer
        const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
        renderer.setSize(width, height);
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
        renderer.shadowMap.enabled = true;
        mountRef.current.appendChild(renderer.domElement);
        rendererRef.current = renderer;

        // Controls
        const controls = new OrbitControls(camera, renderer.domElement);
        controls.enableDamping = true;
        controls.dampingFactor = 0.05;
        controls.enablePan = false;
        controls.minDistance = 2;
        controls.maxDistance = 10;
        controlsRef.current = controls;

        // Lights
        const ambientLight = new THREE.AmbientLight(0xffffff, 0.6);
        scene.add(ambientLight);

        const dirLight = new THREE.DirectionalLight(0xffffff, 1.2);
        dirLight.position.set(5, 5, 5);
        dirLight.castShadow = true;
        scene.add(dirLight);

        const backLight = new THREE.DirectionalLight(0xffffff, 0.5);
        backLight.position.set(-5, 0, -5);
        scene.add(backLight);

        // Create 3D Object based on product type
        const createProductMesh = () => {
            const group = new THREE.Group();

            const matProps = MATERIALS[selectedTexture];
            const material = new THREE.MeshStandardMaterial({
                color: matProps.color,
                roughness: matProps.roughness,
                metalness: matProps.metalness,
                wireframe: isWireframe
            });

            const categoryName = selectedProduct.category.toLowerCase();
            const productName = selectedProduct.name.toLowerCase();

            if (categoryName.includes('bolt') || productName.includes('bolt') || productName.includes('screw')) {
                // --- BOLT GEOMETRY ---
                // Hex Head
                const headGeo = new THREE.CylinderGeometry(0.8, 0.8, 0.6, 6);
                const head = new THREE.Mesh(headGeo, material);
                head.position.y = 1.0;
                head.castShadow = true;
                group.add(head);

                // Threaded Shaft (Approximated with segments)
                const shaftGeo = new THREE.CylinderGeometry(0.4, 0.4, 2.0, 32, 10);
                const shaft = new THREE.Mesh(shaftGeo, material);
                shaft.castShadow = true;
                group.add(shaft);

                // Thread Detail (bump map simulation or just wireframe helps)
            }
            else if (categoryName.includes('nut') || productName.includes('nut')) {
                // --- NUT GEOMETRY ---
                // Hexagon with hole
                const shape = new THREE.Shape();
                const radius = 0.8;
                for (let i = 0; i < 6; i++) {
                    const angle = (i * Math.PI) / 3;
                    const x = Math.cos(angle) * radius;
                    const y = Math.sin(angle) * radius;
                    if (i === 0) shape.moveTo(x, y);
                    else shape.lineTo(x, y);
                }
                shape.closePath();

                const hole = new THREE.Path();
                hole.absarc(0, 0, 0.4, 0, Math.PI * 2, false);
                shape.holes.push(hole);

                const extrudeSettings = { depth: 0.6, bevelEnabled: true, bevelSegments: 2, steps: 2, bevelSize: 0.05, bevelThickness: 0.05 };
                const geometry = new THREE.ExtrudeGeometry(shape, extrudeSettings);
                // Center geometry
                geometry.center();

                const mesh = new THREE.Mesh(geometry, material);
                mesh.castShadow = true;
                group.add(mesh);

                // Rotate to sit flat
                group.rotation.x = Math.PI / 2;
            }
            else if (categoryName.includes('stud') || categoryName.includes('rod')) {
                // --- STUD GEOMETRY ---
                const geo = new THREE.CylinderGeometry(0.4, 0.4, 3.0, 32, 20);
                const mesh = new THREE.Mesh(geo, material);
                mesh.castShadow = true;
                group.add(mesh);
            }
            else {
                // --- DEFAULT GENERIC ---
                const geometry = new THREE.CylinderGeometry(0.5, 0.5, 1.5, 32);
                const mesh = new THREE.Mesh(geometry, material);
                mesh.castShadow = true;
                group.add(mesh);
            }

            return group;
        };

        const newModel = createProductMesh();
        scene.add(newModel);
        modelRef.current = newModel;

        // Animation Loop
        const animate = () => {
            animationFrameRef.current = requestAnimationFrame(animate);
            if (controlsRef.current) {
                controlsRef.current.update();
                // Auto Rotate Logic
                if (autoRotate) {
                    controlsRef.current.autoRotate = true;
                    controlsRef.current.autoRotateSpeed = 2.0;
                } else {
                    controlsRef.current.autoRotate = false;
                }
            }

            if (rendererRef.current && cameraRef.current && sceneRef.current) {
                rendererRef.current.render(sceneRef.current, cameraRef.current);
            }
        };
        animate();

        // Resize Handler
        const handleResize = () => {
            if (!mountRef.current || !cameraRef.current || !rendererRef.current) return;
            const w = mountRef.current.clientWidth;
            const h = mountRef.current.clientHeight;
            cameraRef.current.aspect = w / h;
            cameraRef.current.updateProjectionMatrix();
            rendererRef.current.setSize(w, h);
        };
        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
            if (animationFrameRef.current) cancelAnimationFrame(animationFrameRef.current);
            if (mountRef.current && rendererRef.current) {
                mountRef.current.removeChild(rendererRef.current.domElement);
            }
            rendererRef.current?.dispose();
        };
    }, [selectedProduct, isWireframe, selectedTexture]); // Re-render on these changes

    // Update Auto Rotate without full re-render logic if possible, but here inside effect is fine or ref
    useEffect(() => {
        if (controlsRef.current) {
            controlsRef.current.autoRotate = autoRotate;
        }
    }, [autoRotate]);

    // Control Handlers
    const handleHome = () => {
        if (cameraRef.current && controlsRef.current) {
            cameraRef.current.position.set(4, 3, 5);
            cameraRef.current.lookAt(0, 0, 0);
            controlsRef.current.target.set(0, 0, 0);
            controlsRef.current.update();
        }
    };

    const handleReset = () => {
        if (controlsRef.current) {
            controlsRef.current.reset();
        }
    };

    const handleView = (axis: 'front' | 'side' | 'top') => {
        if (!cameraRef.current || !controlsRef.current) return;
        const dist = 6;
        if (axis === 'front') cameraRef.current.position.set(0, 0, dist);
        if (axis === 'side') cameraRef.current.position.set(dist, 0, 0);
        if (axis === 'top') cameraRef.current.position.set(0, dist, 0);
        cameraRef.current.lookAt(0, 0, 0);
        controlsRef.current.update();
    };

    const handleZoom = (direction: 'in' | 'out') => {
        if (!cameraRef.current) return;
        const zoomFactor = direction === 'in' ? 0.9 : 1.1;
        cameraRef.current.position.multiplyScalar(zoomFactor);
        controlsRef.current.update(); // Update controls after manual camera position change
    };


    return (
        <section className="py-20 bg-slate-50 relative overflow-hidden">
            <div className="container px-4 mx-auto">
                <AnimatedSection>
                    <div className="text-center max-w-2xl mx-auto mb-16">
                        <span className="text-blue-600 font-bold tracking-wider uppercase text-sm">Interactive Tech</span>
                        <h2 className="text-3xl md:text-4xl font-bold mt-2 text-slate-900">Explore Our Craftsmanship</h2>
                    </div>
                </AnimatedSection>
            </div>

            <div className="container px-4 mx-auto">
                <div className="flex flex-col lg:flex-row gap-8 h-[500px] lg:h-[650px] bg-white rounded-2xl shadow-2xl border border-slate-100 overflow-hidden">

                    {/* Left Panel: Product List - Pushed Down */}
                    <div className="w-full lg:w-1/3 bg-slate-50 border-r border-slate-100 flex flex-col p-6 overflow-y-auto mt-12 lg:mt-24">
                        <h3 className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-6 px-2">Select Model</h3>
                        <div className="space-y-3 pr-2 pb-6">
                            {products.map((product) => (
                                <button
                                    key={product.id}
                                    onClick={() => setSelectedProductId(product.id)}
                                    className={`w-full group flex items-center gap-4 p-3 rounded-xl transition-all duration-300 border text-left ${selectedProductId === product.id
                                        ? "bg-white border-blue-500 shadow-md transform scale-[1.02]"
                                        : "bg-white/50 border-transparent hover:bg-white hover:border-slate-200"
                                        }`}
                                >
                                    <div className={`w-10 h-10 rounded-lg bg-slate-100 flex items-center justify-center shrink-0 transition-colors ${selectedProductId === product.id ? "bg-blue-50 text-blue-600" : "text-slate-400 group-hover:text-slate-600"
                                        }`}>
                                        <Layers size={20} />
                                    </div>
                                    <div className="flex-1">
                                        <h4 className={`font-bold text-sm ${selectedProductId === product.id ? "text-slate-900" : "text-slate-600 group-hover:text-slate-900"}`}>
                                            {product.name}
                                        </h4>
                                        <p className="text-[10px] text-slate-400 line-clamp-1 uppercase">{product.category}</p>
                                    </div>
                                    {selectedProductId === product.id && (
                                        <div className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
                                    )}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Right Panel: 3D Canvas */}
                    <div className="flex-1 relative bg-gradient-to-br from-gray-50 to-gray-200">
                        {/* Material Selector - Floating Top Right */}
                        <div className="absolute top-6 right-6 z-20 flex flex-col items-end gap-3 pointer-events-auto">
                            <div className="bg-white/80 backdrop-blur-md p-3 rounded-xl border border-white/50 shadow-lg">
                                <h4 className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-2 text-right">Material Finish</h4>
                                <div className="flex gap-2">
                                    {(Object.keys(MATERIALS) as Array<keyof typeof MATERIALS>).map((key) => (
                                        <button
                                            key={key}
                                            onClick={() => setSelectedTexture(key)}
                                            title={MATERIALS[key].name}
                                            className={`w-8 h-8 rounded-full border-2 transition-transform hover:scale-110 shadow-sm ${selectedTexture === key ? 'border-blue-500 ring-2 ring-blue-200' : 'border-white'}`}
                                            style={{ backgroundColor: '#' + MATERIALS[key].color.toString(16) }}
                                        />
                                    ))}
                                </div>
                                <p className="text-xs text-slate-600 font-bold text-right mt-1">{MATERIALS[selectedTexture].name}</p>
                            </div>
                        </div>

                        {/* Product Title Overlay */}
                        <div className="absolute top-6 left-6 z-10 pointer-events-none max-w-md">
                            <span className="inline-block px-2 py-1 rounded bg-blue-100 text-blue-700 text-[10px] font-bold uppercase tracking-wider mb-2 border border-blue-200">
                                {selectedProduct.category}
                            </span>
                            <h3 className="text-3xl font-bold text-slate-900 mb-2">{selectedProduct.name}</h3>
                            <p className="text-slate-600 text-xs leading-relaxed bg-white/60 backdrop-blur-sm p-3 rounded-lg border border-white/40 shadow-sm">
                                {selectedProduct.longDescription || selectedProduct.description}
                            </p>
                        </div>

                        {/* Expanded Sidebar Controls */}
                        <div className="absolute top-1/2 -translate-y-1/2 left-6 z-20 flex flex-col gap-2 bg-white/90 backdrop-blur-md p-2 rounded-2xl border border-white/50 shadow-xl">
                            {/* Rotation Control */}
                            <button onClick={() => setAutoRotate(!autoRotate)} title={autoRotate ? "Pause Rotation" : "Auto Rotate"} className={`p-2 rounded-xl transition-colors ${autoRotate ? "text-blue-600 bg-blue-50" : "text-slate-500 hover:text-blue-600 hover:bg-blue-50"}`}>
                                {autoRotate ? <Pause size={20} /> : <Play size={20} />}
                            </button>

                            <div className="h-px bg-slate-200 mx-2" />

                            <button onClick={handleReset} title="Reset View" className="p-2 hover:bg-blue-50 rounded-xl text-slate-500 hover:text-blue-600 transition-colors">
                                <RotateCcw size={20} />
                            </button>
                            <button onClick={handleHome} title="Home View" className="p-2 hover:bg-blue-50 rounded-xl text-slate-500 hover:text-blue-600 transition-colors">
                                <Home size={20} />
                            </button>

                            <div className="h-px bg-slate-200 mx-2" />

                            <button onClick={() => handleZoom('in')} title="Zoom In" className="p-2 hover:bg-blue-50 rounded-xl text-slate-500 hover:text-blue-600 transition-colors">
                                <ZoomIn size={20} />
                            </button>
                            <button onClick={() => handleZoom('out')} title="Zoom Out" className="p-2 hover:bg-blue-50 rounded-xl text-slate-500 hover:text-blue-600 transition-colors">
                                <ZoomOut size={20} />
                            </button>

                            <div className="h-px bg-slate-200 mx-2" />

                            <button onClick={() => setIsWireframe(!isWireframe)} title="Toggle Wireframe" className={`p-2 hover:bg-blue-50 rounded-xl transition-colors ${isWireframe ? "text-blue-600 bg-blue-50" : "text-slate-500"}`}>
                                {isWireframe ? <EyeOff size={20} /> : <Eye size={20} />}
                            </button>
                        </div>

                        <div className="absolute bottom-6 right-6 z-10 flex flex-col items-end gap-2 pointer-events-none">
                            {/* Branding Logo */}
                            {/* <img
                                src="/sangam_fasteners/logo.png"
                                alt="SFL Logo"
                                className="h-12 w-auto object-contain opacity-80 mix-blend-multiply mb-2"
                                onError={(e) => {
                                    const target = e.target as HTMLImageElement;
                                    target.style.display = 'none';
                                }}
                            /> */}

                            <span className="bg-slate-900 text-white px-3 py-1.5 rounded-lg text-[10px] font-bold border border-slate-700 shadow-xl tracking-widest flex items-center gap-2">
                                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" /> LIVE PREVIEW
                            </span>
                        </div>

                        {/* Three.js Container */}
                        <div ref={mountRef} className="w-full h-full cursor-move active:cursor-grabbing" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SectionProduct3DExplorer;
