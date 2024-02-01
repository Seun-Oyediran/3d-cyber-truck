"use client";
import { Canvas } from "@react-three/fiber";
import { Experience } from "./components/shared";

export default function Home() {
  return (
    <main
      onKeyDown={(e) => {
        console.log(e);
      }}
    >
      <div className="canvas__container">
        <Canvas
          shadows
          id="c"
          className="canvas"
          camera={{
            fov: 60,
            near: 0.1,
            far: 1000,
            position: [0, 1, 5],
          }}
        >
          <Experience />
        </Canvas>
      </div>
    </main>
  );
}
