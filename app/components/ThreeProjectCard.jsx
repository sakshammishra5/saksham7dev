import { useRef } from 'react';
import { useFrame, useLoader } from '@react-three/fiber';
import { Box, Text } from '@react-three/drei';
import { TextureLoader } from 'three';

export function ThreeProjectCard({ position, title, image, live }) {
  const meshRef = useRef();
  const texture = useLoader(TextureLoader, image);

  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.005; // Subtle rotation
    }
  });

  const handleClick = () => {
    if (live) {
      window.open(live, '_blank');
    }
  };

  return (
    <group position={position} onClick={handleClick}>
      <Box args={[2, 1.5, 0.1]} ref={meshRef}>
        <meshStandardMaterial map={texture} />
      </Box>
      <Text
        position={[0, -0.9, 0.06]}
        fontSize={0.15}
        color="white"
        anchorX="center"
        anchorY="middle"
      >
        {title}
      </Text>
    </group>
  );
}