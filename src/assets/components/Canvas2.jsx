import { useCallback, useEffect, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import "./Canvas.css";

const ParticleCanvas = () => {
  const [init, setInit] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 400);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });

    // Update the isMobile state on window resize
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 400);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const particlesLoaded = (container) => {};

  const desktopOptions = {
    // Desktop options
    particles: {
      links: {
        enable: false,
      },
    },
  };

  const mobileOptions = {
    // Mobile options
    particles: {
      number: {
        value: 70,
      },
    },
  };

  return (
    init && (
      <Particles
        id="tsparticles"
        particlesLoaded={particlesLoaded}
        options={{
          background: {
            color: {
              value: "transparent",
            },
          },
          fullScreen: { enable: false },
          fpsLimit: 120,
          interactivity: {
            events: {
              onClick: {
                enable: true,
                mode: "push",
              },
              onHover: {
                enable: true,
                mode: "repulse",
              },
              resize: true,
            },
            modes: {
              push: {
                quantity: 4,
              },
              repulse: {
                distance: 100,
                duration: 0.4,
              },
            },
          },
          particles: {
            color: {
              value: ["#03dac6", "#ff0266", "#000000"],
            },
            move: {
              direction: "none",
              enable: true,
              outModes: {
                default: "bounce",
              },
              random: false,
              speed: 5,
              straight: false,
            },
            number: {
              density: {
                enable: true,
                area: 800,
              },
              value: 210,
            },
            opacity: {
              value: 0.5,
            },
            shape: {
              type: "circle",
            },
            size: {
              value: 3,
            },
            ...(!isMobile ? desktopOptions.particles : mobileOptions.particles),
          },
          detectRetina: true,
        }}
      />
    )
  );
};

export default ParticleCanvas;