import { useState, useEffect, useRef, Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Environment, PerspectiveCamera, useTexture, Float, Stars } from "@react-three/drei";
import * as THREE from "three";

const DURATION = 2000; // ~2.0s for the full sequence

// --- 3D Bolt Component ---
const Bolt = () => {
    const groupRef = useRef<THREE.Group>(null);
    const logoTexture = useTexture("/sangam_fasteners/logo.png");

    // Animation State
    const [phase, setPhase] = useState(0); // 0: Travel, 1: Snap, 2: Flatten

    useFrame((state, delta) => {
        if (!groupRef.current) return;

        const time = state.clock.getElapsedTime();

        // PHASE 0: TRAVEL (0s - 1.2s)
        if (time < 1.2) {
            // "Micro-conveyor" movement (Accelerated)
            groupRef.current.position.z = THREE.MathUtils.lerp(groupRef.current.position.z, 0, delta * 2.5);

            // "Rolling" or "Machining" rotation
            groupRef.current.rotation.z = time * 6; // Faster spin
            groupRef.current.rotation.x = Math.sin(time * 15) * 0.15; // Higher vibration

            // Camera Parallax
            groupRef.current.position.y = Math.sin(time * 8) * 0.1;

        }
        // PHASE 1: SNAP (1.2s - 1.6s)
        else if (time < 1.6) {
            if (phase === 0) setPhase(1);

            // Snap to center and Face Camera (Snappier)
            groupRef.current.position.lerp(new THREE.Vector3(0, 0, 2), delta * 12);
            groupRef.current.rotation.x = THREE.MathUtils.lerp(groupRef.current.rotation.x, Math.PI / 2, delta * 15);
            groupRef.current.rotation.z = THREE.MathUtils.lerp(groupRef.current.rotation.z, 0, delta * 15);
            groupRef.current.rotation.y = THREE.MathUtils.lerp(groupRef.current.rotation.y, 0, delta * 15);
        }
        // PHASE 2: FLATTEN / REVEAL (1.6s+)
        else {
            if (phase === 1) setPhase(2);
            // Expand towards camera
            groupRef.current.scale.lerp(new THREE.Vector3(1.2, 1.2, 1.2), delta * 4);
        }
    });

    return (
        <group ref={groupRef} position={[0, -1, -5]}>
            {/* Hex Head */}
            <mesh rotation={[0, 0, 0]}>
                <cylinderGeometry args={[1.5, 1.5, 0.8, 6]} /> {/* Hexagon */}
                <meshStandardMaterial
                    color="#e2e8f0"
                    metalness={0.9}
                    roughness={0.2}
                    envMapIntensity={2}
                />
            </mesh>

            {/* Logo Face Plate */}
            <mesh position={[0, 0.41, 0]} rotation={[-Math.PI / 2, 0, Math.PI / 2]}>
                <planeGeometry args={[1.8, 1.8]} />
                <meshBasicMaterial map={logoTexture} transparent opacity={0.9} />
            </mesh>

            {/* Threaded Body */}
            <mesh position={[0, -2, 0]}>
                <cylinderGeometry args={[0.8, 0.8, 3.5, 32]} />
                <meshStandardMaterial
                    color="#475569"
                    metalness={0.6}
                    roughness={0.4}
                    map={logoTexture} // Subtle texture usage
                />
            </mesh>

            {/* Sparks/Energy Particles (Simple spheres) */}
            {phase === 0 && (
                <Float speed={10} rotationIntensity={2} floatIntensity={2}>
                    <mesh position={[1.5, 0, 0]}>
                        <sphereGeometry args={[0.05]} />
                        <meshBasicMaterial color="#facc15" />
                    </mesh>
                    <mesh position={[-1.5, 0.5, 0]}>
                        <sphereGeometry args={[0.05]} />
                        <meshBasicMaterial color="#3b82f6" />
                    </mesh>
                </Float>
            )}
        </group>
    );
};

// --- Main Scene ---
const Scene = () => {
    return (
        <>
            <PerspectiveCamera makeDefault position={[0, 0, 8]} fov={50} />
            <color attach="background" args={["#0f172a"]} /> {/* Industrial Graphite */}

            {/* Environment / Lighting */}
            <Environment preset="city" />
            <ambientLight intensity={0.5} />
            <pointLight position={[10, 10, 10]} intensity={1.5} color="#3b82f6" />
            <pointLight position={[-10, -10, -5]} intensity={1} color="#facc15" /> {/* Yellow Accent */}

            <Stars radius={100} depth={50} count={2000} factor={4} saturation={0} fade />

            <Bolt />
        </>
    );
};

const Preloader = ({ onComplete }: { onComplete: () => void }) => {
    const [isExiting, setIsExiting] = useState(false);

    useEffect(() => {
        // Strict timing for the sequence
        const timeout = setTimeout(() => {
            setIsExiting(true); // Fade out 3D canvas
            setTimeout(onComplete, 1000); // Allow fade out to finish
        }, DURATION);

        return () => clearTimeout(timeout);
    }, [onComplete]);

    return (
        <div className={`fixed inset-0 z-[100] bg-slate-900 transition-opacity duration-1000 ease-in-out ${isExiting ? "opacity-0 pointer-events-none" : "opacity-100"}`}>
            <Suspense fallback={null}>
                <Canvas dpr={[1, 2]} gl={{ antialias: false, toneMapping: THREE.ReinhardToneMapping, toneMappingExposure: 1.5 }}>
                    <Scene />
                </Canvas>
            </Suspense>

            {/* Overlay Text (optional to keep brand presence) */}
            <div className={`absolute bottom-10 left-1/2 -translate-x-1/2 text-center transition-opacity duration-500 ${isExiting ? "opacity-0" : "opacity-100"}`}>
                <div className="h-0.5 w-32 bg-blue-500/50 mx-auto rounded-full mb-4 animate-pulse" />
                <p className="text-[10px] text-slate-400 font-bold uppercase tracking-[0.4em]">Initializing Systems</p>
            </div>
        </div>
    );
};

export default Preloader;
