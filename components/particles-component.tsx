"use client"

import { useCallback, useEffect, useState } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import { Engine } from "tsparticles-engine";

export function ParticlesComponent() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const particlesInit = useCallback(async (engine: Engine) => {
    await loadFull(engine);
  }, []);

  if (!isClient) return null;

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      className="absolute inset-0 w-full h-full"
      options={{
        /* your particles config here */
        fullScreen: {
          enable: false, // ✅ CRITICAL LINE
        },
        particles: {
          number: {
            value: 100,
            density: {
              enable: true,
              area: 800,
            },
          },
          color: {
            value: "#ffffff",
          },
          shape: {
            type: "circle",
            stroke: {
              width: 2,
              color: "#fff",
            },
          },
          opacity: {
            value: 0.5,
          },
          size: {
            value: 3,
            random: true,
          },
          links: {
            enable: true,
            distance: 150,
            color: "#ffffff",
            opacity: 0.4,
            width: 1,
          },
          move: {
            enable: true,
            speed: 2,
            direction: "none",
            outModes: {
              default: "out",
            },
          },
        },
        interactivity: {
          events: {
            onHover: { enable: true, mode: "grab" },
            onClick: { enable: true, mode: "push" },
            resize: true,
          },
          modes: {
            grab: {
              distance: 140,
              links: { opacity: 1 },
            },
            push: { quantity: 4 },
          },
        },
        detectRetina: true,
      }}
    />
  );
}
