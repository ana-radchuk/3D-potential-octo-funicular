import { Canvas } from '@react-three/fiber'
import { Suspense, useState, useEffect, useRef } from 'react'
import Loader from '../components/Loader'
import Hedgehog from '../models/Hedgehog'

const Home = () => {

    const adjustHedgehogForScreenSize = () => {
        let screenScale = [0.3, 0.3, 0.3];
        let screenPosition = [1, 1, -645];
        let rotation = [0.3, 0.3, 0];
    
        return [screenScale, screenPosition, rotation];
      }
    
      const [isRotating, setIsRotating] = useState(false);
      const [currentStage, setCurrentStage] = useState(1);
      const [hedgehogScale, hedgehogPosition, hedgehogRotation] = adjustHedgehogForScreenSize();

    return (
        <section className="w-full h-screen relative">
            {/* <div className="absolute top-28 left-0 right-0 z-10 flex items-center justify-center">
                Home Page
            </div> */}

            <Canvas className={`w-full h-screen bg-transparent ${isRotating ? 'cursor-grabbing' : 'cursor-grab'}`}
                    camera={{ near: 0.1, far: 1000 }} >

                <Suspense fallback={<Loader />}>
                    <directionalLight position={[1, 1, 1]} intensity={2} />
                    <ambientLight intensity={3} />
                    <hemisphereLight intensity={1} />

                    <Hedgehog 
                        position={hedgehogPosition}
                        scale={hedgehogScale}
                        rotation={hedgehogRotation}
                        isRotating={isRotating}
                        setIsRotating={setIsRotating}
                        setCurrentStage={setCurrentStage}
                    />
                </Suspense>
            </Canvas>
        </section>
    )
  }
  
  export default Home