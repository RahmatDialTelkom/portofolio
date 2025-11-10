import { useEffect, useRef } from "react";

interface Particle {
  x: number;
  y: number;
  size: number;
  speedX: number;
  speedY: number;
  opacity: number;
}

export const AnimatedBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    // Create particles
    const particleCount = 65; // Increased for more dynamic animation
    const particles: Particle[] = [];

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 2 + 0.8, // Larger particles for star-like appearance
        speedX: (Math.random() - 0.5) * 0.2, // Slower movement
        speedY: (Math.random() - 0.5) * 0.2,
        opacity: Math.random() * 0.5 + 0.5, // Much brighter (0.5 to 1.0)
      });
    }

    // Animation loop
    let animationFrameId: number;

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Draw and update particles
      particles.forEach((particle) => {
        // Update position
        particle.x += particle.speedX;
        particle.y += particle.speedY;

        // Wrap around screen
        if (particle.x < 0) particle.x = canvas.width;
        if (particle.x > canvas.width) particle.x = 0;
        if (particle.y < 0) particle.y = canvas.height;
        if (particle.y > canvas.height) particle.y = 0;

        // Draw bright star-like particle core
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(102, 204, 255, ${particle.opacity})`; // Full opacity for bright core
        ctx.fill();

        // Add white center for extra brightness
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size * 0.4, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${particle.opacity * 0.8})`; // Bright white center
        ctx.fill();

        // Draw enhanced glow effect (larger and brighter)
        const gradient = ctx.createRadialGradient(
          particle.x,
          particle.y,
          0,
          particle.x,
          particle.y,
          particle.size * 6 // Larger glow radius
        );
        gradient.addColorStop(0, `rgba(102, 204, 255, ${particle.opacity * 0.6})`); // Brighter inner glow
        gradient.addColorStop(0.3, `rgba(102, 204, 255, ${particle.opacity * 0.3})`); // Mid glow
        gradient.addColorStop(1, "rgba(102, 204, 255, 0)"); // Fade to transparent
        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size * 6, 0, Math.PI * 2);
        ctx.fill();
      });

      // Draw brighter connections between nearby particles
      particles.forEach((particle, i) => {
        particles.slice(i + 1).forEach((otherParticle) => {
          const dx = particle.x - otherParticle.x;
          const dy = particle.y - otherParticle.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 150) { // Increased connection distance for more connections
            ctx.beginPath();
            ctx.strokeStyle = `rgba(102, 204, 255, ${
              (1 - distance / 150) * 0.2
            })`; // Brighter connection lines
            ctx.lineWidth = 0.5; // Slightly thicker lines
            ctx.moveTo(particle.x, particle.y);
            ctx.lineTo(otherParticle.x, otherParticle.y);
            ctx.stroke();
          }
        });
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <>
      {/* Animated Gradient Background */}
      <div
        className="fixed inset-0 -z-10"
        style={{
          background: `
            linear-gradient(
              135deg,
              #0A192F 0%,
              #0F172A 30%,
              #0d1428 50%,
              #0F172A 70%,
              #030712 100%
            )
          `,
          backgroundSize: "400% 400%",
          animation: "gradientShift 20s ease infinite",
        }}
      />

      {/* Particle Canvas */}
      <canvas
        ref={canvasRef}
        className="fixed inset-0 -z-10"
        style={{
          pointerEvents: "none",
          opacity: 0.8, // Increased for better visibility of star-like particles
        }}
      />

      {/* Subtle Overlay for depth */}
      <div
        className="fixed inset-0 -z-10"
        style={{
          background: `
            radial-gradient(
              ellipse at top,
              rgba(102, 204, 255, 0.03) 0%,
              transparent 60%
            ),
            radial-gradient(
              ellipse at bottom,
              rgba(102, 204, 255, 0.02) 0%,
              transparent 60%
            )
          `,
        }}
      />
    </>
  );
};

