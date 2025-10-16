"use client";

import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

export default function ParticlesBackground() {
  // Use 'any' for engine to avoid Engine type mismatch
  const particlesInit = useCallback(async (engine: any) => {
    await loadFull(engine);
  }, []);

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        background: { color: { value: "#1a1a1a" } },
        fpsLimit: 60,
        interactivity: {
          events: { onHover: { enable: true, mode: "repulse" }, resize: true },
        },
        particles: {
          color: { value: "#00ffff" },
          links: { enable: true, color: "#00ffff", distance: 150, opacity: 0.2, width: 1 },
          move: { enable: true, speed: 1, direction: "none", random: false, outModes: "out" },
          number: { value: 50, density: { enable: true, area: 800 } },
          opacity: { value: 0.3 },
          shape: { type: "circle" },
          size: { value: { min: 1, max: 3 } },
        },
        detectRetina: true,
      }}
    />
  );
}
