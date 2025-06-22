'use client';

import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { ThreeProjectCard } from './ThreeProjectCard';

export function ThreeProjectScene({ projects }) {
  return (
    <div className="w-full h-[80vh]">
      <Canvas camera={{ position: [0, 0, 8], fov: 60 }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1} />
        {projects.map((project, index) => (
          <ThreeProjectCard
            key={project.id}
            position={[(index - (projects.length - 1) / 2) * 3, 0, 0]} // Space cards horizontally
            title={project.title}
            image={project.image}
            live={project.live}
          />
        ))}
        <OrbitControls enablePan={false} enableZoom={true} />
      </Canvas>
    </div>
  );
}