// src/components/ThreeScene.jsx
import React, { useEffect } from 'react';
import { Canvas, useLoader } from '@react-three/fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { TextureLoader, MeshStandardMaterial, RepeatWrapping } from 'three';
import { Stats, OrbitControls } from '@react-three/drei';

function Model() {
  const gltf = useLoader(GLTFLoader, '/models/gaming_laptop.glb');
  const texture = useLoader(TextureLoader, '/models/image.png');
  
  useEffect(() => {
    if (gltf) {
      console.log('Model loaded successfully');
      const screenMesh = gltf.scene.getObjectByName('Object_7');
      if (screenMesh) {
        const material = new MeshStandardMaterial({ map: texture });
        material.map.wrapS = RepeatWrapping;
        material.map.wrapT = RepeatWrapping;
        material.map.repeat.set(1, 1);
        screenMesh.material = material;
      }
    }
  }, [gltf]);

  return <primitive object={gltf.scene} rotation={[0, -Math.PI / 2, 0]} scale={[1.5, 1.5, 1.5]} position={[0, -1.6, -3]} />;
}

function Model2() {
  const gltf = useLoader(GLTFLoader, '/models/mahogany_table.glb');
  return <primitive object={gltf.scene} position={[0, -8, -5]} />;
}

function Model3() {
  const gltf = useLoader(GLTFLoader, '/models/monster_zero.glb');
  return <primitive scale={[11, 11, 11]} object={gltf.scene} position={[4, -1.55, -3.5]} />;
}

function Model4() {
  const gltf = useLoader(GLTFLoader, '/models/photo_frame1.glb');
  const texture = useLoader(TextureLoader, '/models/image3.jpg');
  useEffect(() => {
    if (gltf) {
      gltf.scene.traverse((child) => {
        if (child.isMesh) {
          console.log('Mesh name:', child.name);
        }
      });
      const screenMesh = gltf.scene.getObjectByName('Object_17');
      if (screenMesh) {
        const material = new MeshStandardMaterial({ map: texture });
        material.map.wrapS = RepeatWrapping;
        material.map.wrapT = RepeatWrapping;
        material.map.repeat.set(1, 1);
        screenMesh.material = material;
      }
    }
  }, [gltf]);

  return <primitive rotation={[0, Math.PI / 5, 0]} scale={[1.6, 1.6, 1.6]} object={gltf.scene} position={[-5, 0.1, -4]} />;
}

const ThreeScene = () => {
  return (
    <div className="flex flex-col items-center justify-center w-screen h-screen">
      <h1>Welcome To My Portfolio</h1>
      <div className="w-[90vw] h-[70vh]">
        <Canvas
          camera={{ position: [-0.5, 1, 2] }}
          shadows
          gl={{ antialias: true, alpha: true }}
          style={{ background: 'transparent' }}
        >
          {/* Directional light */}
          <directionalLight position={[3.3, 1.0, 4.4]} intensity={2} castShadow />

          {/* Ambient light */}
          <ambientLight intensity={0.9} />

          {/* Models */}
          <Model />
          <Model2 />
          <Model3 />
          <Model4 />
          {/* Controls and stats */}
          <OrbitControls target={[0, 1, 0]} />
        </Canvas>
      </div>
    </div>
  );
}

export default ThreeScene;

