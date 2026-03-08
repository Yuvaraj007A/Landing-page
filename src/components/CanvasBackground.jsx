import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Sphere, MeshDistortMaterial, Float, Stars } from '@react-three/drei';

const AnimatedBlobs = () => {
    return (
        <>
            <ambientLight intensity={0.8} />
            <directionalLight position={[10, 10, 5]} intensity={2} color="#f97316" />
            <directionalLight position={[-10, -10, -5]} intensity={1} color="#eab308" />
            <pointLight position={[0, 5, 0]} intensity={1.5} color="#ffffff" />

            <Float speed={1.5} rotationIntensity={1} floatIntensity={2}>
                <Sphere visible args={[1, 64, 64]} scale={2} position={[-4, 2, -6]}>
                    <MeshDistortMaterial color="#fcd34d" attach="material" distort={0.5} speed={2} roughness={0.2} metalness={0.5} />
                </Sphere>
            </Float>

            <Float speed={2} rotationIntensity={2} floatIntensity={1.5}>
                <Sphere visible args={[1, 64, 64]} scale={1.5} position={[5, -1, -4]}>
                    <MeshDistortMaterial color="#fb923c" attach="material" distort={0.4} speed={1.5} roughness={0.3} metalness={0.5} />
                </Sphere>
            </Float>

            <Float speed={1.2} rotationIntensity={0.5} floatIntensity={3}>
                <Sphere visible args={[1, 64, 64]} scale={1.2} position={[2, 3, -8]}>
                    <MeshDistortMaterial color="#f87171" attach="material" distort={0.6} speed={3} roughness={0.2} metalness={0.5} />
                </Sphere>
            </Float>

            <Stars radius={50} depth={50} count={1500} factor={4} saturation={0} fade speed={1} />
        </>
    );
};

export default function CanvasBackground() {
    return (
        <div className="absolute inset-0 z-0 opacity-60 pointer-events-none">
            <Canvas camera={{ position: [0, 0, 5] }} dpr={[1, 2]}>
                <AnimatedBlobs />
            </Canvas>
        </div>
    );
}
