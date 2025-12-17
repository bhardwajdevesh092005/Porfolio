/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck
import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial, OrbitControls, Float } from '@react-three/drei';
import * as THREE from 'three';

function generateSpherePoints(count: number, radius: number, isDark: boolean = true) {
  const points = new Float32Array(count * 3);
  const colors = new Float32Array(count * 3);
  
  // Light theme: subtle blues and teals
  // Dark theme: vibrant purples and indigos
  const color1 = new THREE.Color(isDark ? '#6366f1' : '#03354f');
  const color2 = new THREE.Color(isDark ? '#a855f7' : '#060607');
  console.log(color1,color2)
  for (let i = 0; i < count; i++) {
    const theta = THREE.MathUtils.randFloatSpread(360);
    const phi = THREE.MathUtils.randFloatSpread(360);

    const x = radius * Math.sin(theta) * Math.cos(phi);
    const y = radius * Math.sin(theta) * Math.sin(phi);
    const z = radius * Math.cos(theta);

    points[i * 3] = x;
    points[i * 3 + 1] = y;
    points[i * 3 + 2] = z;

    // Mixed colors
    const mixedColor = color1.clone().lerp(color2, Math.random());
    colors[i * 3] = mixedColor.r;
    colors[i * 3 + 1] = mixedColor.g;
    colors[i * 3 + 2] = mixedColor.b;
  }
  return { points, colors };
}

const ParticleSphere = (props: any) => {
  const ref = useRef<THREE.Points>(null!);
  const [isDark, setIsDark] = React.useState(() => {
    if (typeof document !== 'undefined') {
      return document.documentElement.classList.contains('dark');
    }
    return false;
  });
  
  React.useEffect(() => {
    const checkTheme = () => {
      const darkMode = document.documentElement.classList.contains('dark');
      setIsDark(darkMode);
    };
    
    checkTheme();
    
    const observer = new MutationObserver(checkTheme);
    observer.observe(document.documentElement, { 
      attributes: true, 
      attributeFilter: ['class'] 
    });
    
    return () => observer.disconnect();
  }, []);
  
  const { points, colors } = useMemo(() => generateSpherePoints(3000, 1.5, isDark), [isDark]);

  useFrame((state, delta) => {
    if (ref.current) {
      ref.current.rotation.y += delta / 10;
      ref.current.rotation.z += delta / 15;
    }
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={points} colors={colors} stride={3} frustumCulled={false} {...props}>
        <PointMaterial
          transparent
          vertexColors
          size={0.012}
          sizeAttenuation={true}
          depthWrite={false}
          blending={THREE.AdditiveBlending}
        />
      </Points>
    </group>
  );
};

const HeroScene: React.FC = () => {
  return (
    <div className="canvas-wrapper">
      <Canvas camera={{ position: [0, 0, 4], fov: 60 }} dpr={[1, 2]}>
        <ambientLight intensity={0.5} />
        <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
           <ParticleSphere />
        </Float>
        <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={0.5} />
      </Canvas>
    </div>
  );
};

export default HeroScene;