'use client';

import { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Text } from '@react-three/drei';

function SkillIcon({ text, position }) {
  const meshRef = useRef();
  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.01;
    }
  });

  return (
    <Text ref={meshRef} position={position} fontSize={0.5} color="#16f2b3">
      {text}
    </Text>
  );
}

export function HeroBackground() {
  return (
    <div className="absolute w-full h-full top-0 left-0 -z-10">
      <Canvas>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} />
        <SkillIcon text="React" position={[-2, 0, 0]} />
        <SkillIcon text="Next.js" position={[0, 0, 0]} />
        <SkillIcon text="MongoDB" position={[2, 0, 0]} />
      </Canvas>
    </div>
  );
}