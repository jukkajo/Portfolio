import ButtonGradient from "./assets/svg/ButtonGradient";
import Info from "./components/Info";
import Stack from "./components/Stack";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Roadmap from "./components/Roadmap";
import ThreeScene from './components/ThreeScene';

import React, { useEffect } from 'react';
import { Canvas, useLoader } from '@react-three/fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { TextureLoader, MeshStandardMaterial, RepeatWrapping } from 'three';
import { Stats, OrbitControls } from '@react-three/drei';

const App = () => {
  return (
    <>
      <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
        <Header />
        <ThreeScene />
        <Info />
        <Stack />
        <Roadmap />
        <Footer />
      </div>

      <ButtonGradient />
    </>
  );
};

export default App;
