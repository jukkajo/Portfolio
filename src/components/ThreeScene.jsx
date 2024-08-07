import React, { useEffect, useRef, useState } from 'react';
import { Canvas, useFrame, useLoader } from '@react-three/fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { OrbitControls, useAnimations } from '@react-three/drei';
import Section from "./Section";

// Utility function to convert degrees to radians
const degreesToRadians = (degrees) => degrees * (Math.PI / 180);

function Model53({ onLoad }) {
  const gltf = useLoader(GLTFLoader, '/models/capsule.glb');
  const { actions } = useAnimations(gltf.animations, gltf.scene);
  const ref = useRef();

  useEffect(() => {
    if (actions) {
      const firstActionName = Object.keys(actions)[0];
      if (firstActionName) {
        actions[firstActionName].play();
      }
    }
  }, [actions]);

  useEffect(() => {
    if (gltf.scene) {
      onLoad(); // Notify parent when model is loaded
    }
  }, [gltf.scene]);

  const rotationX = degreesToRadians(20);
  const rotationY = degreesToRadians(12);
  const rotationZ = degreesToRadians(-1);

  useFrame(() => {
    if (ref.current) {
      ref.current.rotation.y += 0.001;
    }
  });

  return (
    <primitive
      ref={ref}
      object={gltf.scene}
      scale={[1.85, 1.85, 1.85]}
      position={[-1, 1.3, -4]}
      rotation={[rotationX, rotationY, rotationZ]}
    />
  );
}

function Model35({ onLoad }) {
  const gltf = useLoader(GLTFLoader, '/models/astro.glb');
  const { actions } = useAnimations(gltf.animations, gltf.scene);

  useEffect(() => {
    if (actions) {
      const firstActionName = Object.keys(actions)[0];
      if (firstActionName) {
        actions[firstActionName].play();
      }
    }
  }, [actions]);

  useEffect(() => {
    if (gltf.scene) {
      onLoad(); // Notify parent when model is loaded
    }
  }, [gltf.scene]);

  const rotationY = degreesToRadians(-44.5);

  return (
    <primitive
      rotation={[0, rotationY, 0]}
      object={gltf.scene}
      position={[3, -1, -1.5]}
    />
  );
}

const ThreeScene = () => {
  const [isLoading, setIsLoading] = useState(true);
  const componentRef = useRef(null);
  const bubbleRef = useRef(null);

  const handleModelLoad = () => {
    setIsLoading(false); // Set loading state to false when models are loaded
  };

  useEffect(() => {
    const handleScroll = () => {
      if (bubbleRef.current) {
        const scrolled = window.scrollY;
        bubbleRef.current.style.transform = `translateY(${scrolled * 0.1}px)`;
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <Section id="features" className="flex flex-col items-center justify-center">
      <div
        ref={componentRef}
        className="relative flex flex-col items-center justify-center w-full h-screen p-4"
      >
        <div className="w-full h-full max-w-[90vw] max-h-[80vh] mx-auto relative">
          {isLoading && (
            <div 
              className="absolute inset-0 flex flex-col items-center justify-center z-10" 
              style={{ backgroundColor: '#0E0C15', opacity: 0.8 }}
            >
              <div className="w-12 h-12 border-4 border-t-4 border-gray-200 border-t-blue-500 border-solid rounded-full animate-spin mb-4"></div>
              <span className="text-white text-xl">Loading Scene...</span>
            </div>
          )}
          <Canvas
            camera={{ position: [-0.5, 1, 2] }}
            shadows
            gl={{ antialias: true, alpha: true }}
            style={{ background: 'transparent' }}
          >
            <directionalLight
              position={[5, 5, 5]}
              intensity={2.5}
              castShadow
              shadow-mapSize-width={2048}
              shadow-mapSize-height={2048}
            />
            <spotLight
              position={[2, 5, 5]}
              angle={0.3}
              penumbra={0.5}
              intensity={3}
              castShadow
              shadow-mapSize-width={2048}
              shadow-mapSize-height={2048}
            />
            <spotLight
              position={[-5, 5, 5]}
              angle={0.3}
              penumbra={0.5}
              intensity={3}
              castShadow
              shadow-mapSize-width={2048}
              shadow-mapSize-height={2048}
            />
            <ambientLight intensity={1} />
            <Model53 onLoad={handleModelLoad} />
            <Model35 onLoad={handleModelLoad} />
            <OrbitControls target={[0, 1, 0]} />
          </Canvas>
        </div>
      </div>
    </Section>
  );
};

export default ThreeScene;

