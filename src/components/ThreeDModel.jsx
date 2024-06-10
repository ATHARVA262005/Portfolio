/* eslint-disable react/no-unknown-property */

import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';

const Model = () => {
    const { scene } = useGLTF('src/assets/models/computer/scene.gltf'); // Update the path to your 3D model

    return <primitive object={scene} scale={.3} />;
};

const ThreeDModel = () => {
    return (
        <Canvas>
            <ambientLight intensity={0.5} />
            <directionalLight position={[10, 10, 5]} intensity={1} />
            <Model />
            <OrbitControls />
        </Canvas>
    );
};

useGLTF.preload('src/assets/models/computer/scene.gltf'); // Preload the model

export default ThreeDModel;
