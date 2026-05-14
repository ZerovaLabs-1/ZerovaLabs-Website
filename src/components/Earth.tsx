import { useEffect, useRef, FC } from 'react';
import createGlobe from 'cobe';

interface EarthProps {
  className?: string;
  theta?: number;
  dark?: number;
  scale?: number;
  diffuse?: number;
  mapSamples?: number;
  mapBrightness?: number;
  baseColor?: [number, number, number];
  markerColor?: [number, number, number];
  glowColor?: [number, number, number];
}

const Earth: FC<EarthProps> = ({
  className,
  theta = 0.25,
  dark = 1,
  scale = 1.1,
  diffuse = 1.2,
  mapSamples = 16000,
  mapBrightness = 11,
  baseColor = [0.0, 0.0, 0.2] as [number, number, number],
  markerColor = [1, 0, 0] as [number, number, number],
  glowColor = [0.1, 0.3, 1.0] as [number, number, number],
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const phi = useRef(0);
  const pointerDown = useRef<number | null>(null);
  const rotation = useRef(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const SIZE = 600;
    canvas.width = SIZE * 2;
    canvas.height = SIZE * 2;

    const globe = createGlobe(canvas, {
      devicePixelRatio: 2,
      width: SIZE * 2,
      height: SIZE * 2,
      phi: 0,
      theta,
      dark,
      scale,
      diffuse,
      mapSamples,
      mapBrightness,
      baseColor,
      markerColor,
      glowColor,
      opacity: 1,
      offset: [0, 0],
      markers: [],
    });

    let rafId: number;
    const animate = () => {
      if (pointerDown.current === null) phi.current += 0.003;
      globe.update({ phi: phi.current + rotation.current });
      rafId = requestAnimationFrame(animate);
    };
    rafId = requestAnimationFrame(animate);

    setTimeout(() => { canvas.style.opacity = '1'; }, 100);

    return () => {
      cancelAnimationFrame(rafId);
      globe.destroy();
    };
  }, []);

  return (
    <div className={`w-full aspect-square${className ? ` ${className}` : ''}`}>
      <canvas
        ref={canvasRef}
        onPointerDown={(e) => { pointerDown.current = e.clientX - rotation.current; }}
        onPointerUp={() => { pointerDown.current = null; }}
        onPointerOut={() => { pointerDown.current = null; }}
        onMouseMove={(e) => {
          if (pointerDown.current !== null)
            rotation.current = e.clientX - pointerDown.current;
        }}
        style={{ width: '100%', height: '100%', opacity: 0, transition: 'opacity 1s ease', cursor: 'grab' }}
      />
    </div>
  );
};

export default Earth;
