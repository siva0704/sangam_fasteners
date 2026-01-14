import { useState, useMemo, useRef } from "react";
import AnimatedSection from "./AnimatedSection";
import { RotateCcw, Play, Pause, ZoomIn, ZoomOut } from "lucide-react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Stage, useGLTF, Instance, Instances } from "@react-three/drei";
import * as THREE from "three";

// Texture/Material Options
const MATERIALS = {
    steel: { name: "Stainless Steel", color: "#e2e8f0", roughness: 0.2, metalness: 0.8 },
    black: { name: "Black Oxide", color: "#1e293b", roughness: 0.7, metalness: 0.2 },
    metal: { name: "Metal Steel", color: "#64748b", roughness: 0.5, metalness: 0.7 }
};

// View Options for the Gallery
const VIEW_OPTIONS = [
    { id: 'bolts', name: 'Industrial Bolts', image: '/sangam_fasteners/images/ui/bolt-nut.png' },
    { id: 'screws', name: 'Precision Screws', image: '/sangam_fasteners/images/ui/screws.png' },
    { id: 'spanners', name: 'Tools & Spanners', image: '/sangam_fasteners/images/ui/spanner.png' },
    { id: 'washers', name: 'Nuts & Washers', image: '/sangam_fasteners/images/ui/washers.png' }
];

// --- 3D MODELS ---

const NutsAndBoltsModel = ({ color, roughness, metalness }: { color: string, roughness: number, metalness: number }) => {
    // Load local GLB - absolute path must include base URL if defined in vite.config
    const { scene } = useGLTF('/sangam_fasteners/models/nuts_and_bolts.glb');

    // Clone scene to avoid shared state issues and apply materials
    const clonedScene = useMemo(() => {
        const clone = scene.clone();
        clone.traverse((node) => {
            if ((node as THREE.Mesh).isMesh) {
                const mesh = node as THREE.Mesh;
                // Apply the selected material to all meshes in the scene
                mesh.material = new THREE.MeshStandardMaterial({
                    color: color,
                    roughness: roughness,
                    metalness: metalness
                });
                mesh.castShadow = true;
                mesh.receiveShadow = true;
            }
        });
        return clone;
    }, [scene, color, roughness, metalness]);

    return <primitive object={clonedScene} />;
};

const ScrewsModel = ({ color, roughness, metalness }: { color: string, roughness: number, metalness: number }) => {
    // Procedural Screws: Group of Pan Head Screws
    const material = useMemo(() => new THREE.MeshStandardMaterial({ color, roughness, metalness }), [color, roughness, metalness]);

    return (
        <group>
            {/* Screw 1 - Center */}
            <group position={[0, 0, 0]} rotation={[Math.PI / 2, 0, 0]}>
                <mesh material={material} position={[0, 2, 0]} castShadow receiveShadow>
                    <cylinderGeometry args={[0.6, 0.6, 0.5, 32]} />{/* Head */}
                </mesh>
                <mesh material={material} position={[0, -1, 0]} castShadow receiveShadow>
                    <cylinderGeometry args={[0.25, 0.25, 6, 16]} />{/* Shaft */}
                </mesh>
            </group>

            {/* Screw 2 - Tilted */}
            <group position={[1.5, -0.5, 1]} rotation={[Math.PI / 2.2, 0, Math.PI / 4]}>
                <mesh material={material} position={[0, 2, 0]} castShadow receiveShadow>
                    <cylinderGeometry args={[0.5, 0.5, 0.4, 32]} />
                </mesh>
                <mesh material={material} position={[0, -1, 0]} castShadow receiveShadow>
                    <cylinderGeometry args={[0.2, 0.2, 5.5, 16]} />
                </mesh>
            </group>

            {/* Screw 3 - Flat */}
            <group position={[-1.5, -2, 0]} rotation={[0, 0, Math.PI / 1.5]}>
                <mesh material={material} position={[0, 2, 0]} castShadow receiveShadow>
                    <cylinderGeometry args={[0.55, 0.55, 0.45, 32]} />
                </mesh>
                <mesh material={material} position={[0, -1, 0]} castShadow receiveShadow>
                    <cylinderGeometry args={[0.22, 0.22, 5.8, 16]} />
                </mesh>
            </group>
        </group>
    );
};

const SpannerModel = ({ color, roughness, metalness }: { color: string, roughness: number, metalness: number }) => {
    // Procedural Key/Spanner
    const material = useMemo(() => new THREE.MeshStandardMaterial({ color, roughness, metalness }), [color, roughness, metalness]);

    return (
        <group rotation={[0, Math.PI / 4, Math.PI / 6]}>
            {/* Handle */}
            <mesh material={material} position={[0, 0, 0]} castShadow receiveShadow>
                <boxGeometry args={[1, 8, 0.5]} />
            </mesh>

            {/* Top Head (Open End) */}
            <group position={[0, 4.2, 0]}>
                <mesh material={material} rotation={[Math.PI / 2, 0, 0]} castShadow receiveShadow>
                    <torusGeometry args={[1, 0.4, 16, 32, Math.PI * 1.2]} />
                </mesh>
            </group>

            {/* Bottom Head (Ring End) */}
            <group position={[0, -4.2, 0]}>
                <mesh material={material} rotation={[Math.PI / 2, 0, 0]} castShadow receiveShadow>
                    <torusGeometry args={[0.9, 0.4, 16, 32]} />
                </mesh>
            </group>
        </group>
    );
};

const WashersModel = ({ color, roughness, metalness }: { color: string, roughness: number, metalness: number }) => {
    // Stack of Washers
    const material = useMemo(() => new THREE.MeshStandardMaterial({ color, roughness, metalness }), [color, roughness, metalness]);

    return (
        <group>
            <mesh material={material} position={[0, -2, 0]} rotation={[Math.PI / 2, 0, 0]} castShadow receiveShadow>
                <torusGeometry args={[1.5, 0.5, 16, 64]} /> {/* Big Washer */}
            </mesh>
            <mesh material={material} position={[0.5, -1.9, 0.5]} rotation={[Math.PI / 2, 0, 0]} castShadow receiveShadow>
                <cylinderGeometry args={[1.5, 1.5, 0.1, 64]} /> {/* Flat Washer fill */}
            </mesh>

            <mesh material={material} position={[1, 0, 1]} rotation={[Math.PI / 2.2, Math.PI / 6, 0]} castShadow receiveShadow>
                <torusGeometry args={[0.8, 0.3, 16, 48]} />
            </mesh>

            <mesh material={material} position={[-1, 1, -0.5]} rotation={[Math.PI / 1.8, -Math.PI / 6, 0]} castShadow receiveShadow>
                <torusGeometry args={[1.0, 0.35, 16, 48]} />
            </mesh>
        </group>
    );
};


const SectionProduct3DExplorer = () => {
    const [autoRotate, setAutoRotate] = useState(true);
    const [selectedTexture, setSelectedTexture] = useState<keyof typeof MATERIALS>('steel');
    const [selectedView, setSelectedView] = useState(VIEW_OPTIONS[0].id);

    // Zoom state for orbit controls
    const [zoom, setZoom] = useState(0.35);

    // Used to force re-center on home
    const [resetKey, setResetKey] = useState(0);

    const handleHome = () => {
        setResetKey(prev => prev + 1);
        setZoom(0.35);
    };

    const handleZoom = (direction: 'in' | 'out') => {
        setZoom(prev => direction === 'in' ? Math.min(prev + 0.2, 2) : Math.max(prev - 0.2, 0.2));
    };

    const renderModel = () => {
        const props = {
            color: MATERIALS[selectedTexture].color,
            roughness: MATERIALS[selectedTexture].roughness,
            metalness: MATERIALS[selectedTexture].metalness
        };

        switch (selectedView) {
            case 'bolts': return <NutsAndBoltsModel {...props} />;
            case 'screws': return <ScrewsModel {...props} />;
            case 'spanners': return <SpannerModel {...props} />;
            case 'washers': return <WashersModel {...props} />;
            default: return <NutsAndBoltsModel {...props} />;
        }
    };

    return (
        <section className="py-20 bg-slate-50 relative overflow-hidden">
            <div className="container px-4 mx-auto">
                <AnimatedSection>
                    <div className="text-center max-w-2xl mx-auto mb-12">
                        <span className="text-blue-600 font-bold tracking-wider uppercase text-sm">Interactive Product Showcase</span>
                        <h2 className="text-3xl md:text-4xl font-bold mt-2 text-slate-900">Precision Engineered Fasteners</h2>
                        <p className="text-slate-600 mt-4">Select a category to explore our premium components in 3D.</p>
                    </div>
                </AnimatedSection>
            </div>

            <div className="container px-4 mx-auto">
                <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-16">

                    {/* LEFT: 3D Viewport (Square Box) */}
                    <div className="w-full max-w-[500px] aspect-square bg-white rounded-2xl shadow-2xl border border-slate-100 overflow-hidden relative flex-shrink-0">
                        {/* Viewport Container */}
                        <div className="w-full h-full relative bg-gradient-to-br from-gray-50 to-gray-200">

                            {/* Controls Toolbar (Bottom Center) */}
                            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex gap-4 bg-white/90 backdrop-blur-md p-3 rounded-2xl border border-white/50 shadow-xl">
                                <button onClick={() => setAutoRotate(!autoRotate)} title={autoRotate ? "Pause Rotation" : "Auto Rotate"} className={`p-2 rounded-xl transition-colors ${autoRotate ? "text-blue-600 bg-blue-50" : "text-slate-500 hover:text-blue-600 hover:bg-blue-50"}`}>
                                    {autoRotate ? <Pause size={24} /> : <Play size={24} />}
                                </button>
                                <div className="w-px bg-slate-200" />
                                <button onClick={handleHome} title="Reset View" className="p-2 hover:bg-blue-50 rounded-xl text-slate-500 hover:text-blue-600 transition-colors">
                                    <RotateCcw size={24} />
                                </button>
                                <div className="w-px bg-slate-200" />
                                <button onClick={() => handleZoom('in')} title="Zoom In" className="p-2 hover:bg-blue-50 rounded-xl text-slate-500 hover:text-blue-600 transition-colors">
                                    <ZoomIn size={24} />
                                </button>
                                <button onClick={() => handleZoom('out')} title="Zoom Out" className="p-2 hover:bg-blue-50 rounded-xl text-slate-500 hover:text-blue-600 transition-colors">
                                    <ZoomOut size={24} />
                                </button>
                            </div>

                            {/* Material Selector (Top Right) */}
                            <div className="absolute top-6 right-6 z-20 flex flex-col items-end gap-3 pointer-events-auto">
                                <div className="bg-white/80 backdrop-blur-md p-4 rounded-xl border border-white/50 shadow-lg">
                                    <h4 className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-3 text-right">Material Finish</h4>
                                    <div className="flex gap-2">
                                        {(Object.keys(MATERIALS) as Array<keyof typeof MATERIALS>).map((key) => (
                                            <button
                                                key={key}
                                                onClick={() => setSelectedTexture(key)}
                                                title={MATERIALS[key].name}
                                                className={`w-8 h-8 rounded-full border-2 transition-transform hover:scale-110 shadow-sm ${selectedTexture === key ? 'border-blue-500 ring-2 ring-blue-200' : 'border-white'}`}
                                                style={{ backgroundColor: MATERIALS[key].color }}
                                            />
                                        ))}
                                    </div>
                                    <p className="text-xs text-slate-600 font-bold text-right mt-2">{MATERIALS[selectedTexture].name}</p>
                                </div>
                            </div>

                            {/* R3F Canvas */}
                            <div className="w-full h-full cursor-move" style={{ touchAction: 'pan-y' }}>
                                <Canvas shadows camera={{ position: [12, 12, 18], fov: 50 }}>
                                    <Stage environment="city" intensity={0.5} shadows="contact">
                                        <mesh scale={[zoom, zoom, zoom]}>
                                            {renderModel()}
                                        </mesh>
                                    </Stage>
                                    <OrbitControls
                                        key={resetKey}
                                        autoRotate={autoRotate}
                                        autoRotateSpeed={1}
                                        enableZoom={true}
                                        maxDistance={20}
                                        minDistance={2}
                                    />
                                </Canvas>
                            </div>

                            <div className="absolute top-6 left-6 z-10 pointer-events-none">
                                <h3 className="text-xl font-bold text-slate-900 mb-1">
                                    {VIEW_OPTIONS.find(v => v.id === selectedView)?.name || "Fastener Collection"}
                                </h3>
                                <p className="text-slate-500 text-xs">Interactive 3D View</p>
                            </div>

                        </div>
                    </div>

                    {/* RIGHT: Selection Container */}
                    <div className="flex-1 w-full max-w-[600px] bg-white rounded-2xl shadow-2xl border border-slate-100 p-6 md:p-8 relative overflow-hidden flex flex-col justify-center">
                        {/* Top Decoration */}
                        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-slate-900 to-blue-600" />

                        <div className="mb-8 text-left">
                            <h3 className="text-3xl font-bold font-heading mb-2 text-transparent bg-clip-text bg-gradient-to-r from-slate-900 to-blue-600">
                                Model Selection
                            </h3>
                            <p className="text-slate-500 font-medium">
                                Choose a component to inspect in high-fidelity 3D.
                            </p>
                        </div>

                        <div className="w-full grid grid-cols-2 gap-4">
                            {VIEW_OPTIONS.map((item) => (
                                <button
                                    key={item.id}
                                    onClick={() => setSelectedView(item.id)}
                                    className={`group relative flex flex-col items-start text-left bg-slate-50/50 rounded-xl overflow-hidden border transition-all duration-300 ${selectedView === item.id
                                        ? 'border-blue-500 shadow-md ring-2 ring-blue-50 scale-[1.02] bg-white'
                                        : 'border-slate-200 hover:border-blue-300 hover:bg-white hover:shadow-md'
                                        }`}
                                >
                                    {/* card image container */}
                                    <div className="w-full h-24 sm:h-28 bg-white relative overflow-hidden border-b border-slate-100">
                                        <div className="absolute inset-0 bg-slate-100/50" />
                                        <img
                                            src={item.image}
                                            alt={item.name}
                                            className="w-full h-full object-cover mix-blend-multiply opacity-90 group-hover:scale-110 transition-transform duration-500 relative z-10"
                                        />
                                        {/* Active Indicator Dot */}
                                        {selectedView === item.id && (
                                            <div className="absolute top-2 right-2 w-2 h-2 bg-blue-600 rounded-full shadow-sm ring-2 ring-white z-20" />
                                        )}
                                    </div>

                                    {/* card content container */}
                                    <div className="p-3 w-full relative">
                                        <h3 className={`font-bold text-sm sm:text-base leading-tight mb-1 transition-colors ${selectedView === item.id ? 'text-blue-600' : 'text-slate-700 group-hover:text-blue-600'}`}>
                                            {item.name}
                                        </h3>
                                        <p className="text-[10px] sm:text-xs font-medium text-slate-400 group-hover:text-blue-400 transition-colors line-clamp-1">
                                            {item.description}
                                        </p>
                                    </div>
                                </button>
                            ))}
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default SectionProduct3DExplorer;

useGLTF.preload('/sangam_fasteners/models/nuts_and_bolts.glb');
