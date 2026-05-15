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
  baseColor = [0.016, 0.141, 0.18],
  markerColor = [0.937, 0.267, 0.267],
  glowColor = [0.02, 0.38, 0.45],
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const phi = useRef(0);
  const pointerDown = useRef<number | null>(null);
  const rotation = useRef(0);
  const globeRef = useRef<ReturnType<typeof createGlobe> | null>(null);
  const rafId = useRef<number>(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    const wrapper = wrapperRef.current;
    if (!canvas || !wrapper) return;

    const dpr = Math.min(window.devicePixelRatio, 2);

    const init = (size: number) => {
      globeRef.current?.destroy();
      cancelAnimationFrame(rafId.current);

      const px = size * dpr;
      canvas.width = px;
      canvas.height = px;

      globeRef.current = createGlobe(canvas, {
        devicePixelRatio: dpr,
        width: px,
        height: px,
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

      const animate = () => {
        if (pointerDown.current === null) phi.current += 0.003;
        globeRef.current?.update({ phi: phi.current + rotation.current });
        rafId.current = requestAnimationFrame(animate);
      };
      rafId.current = requestAnimationFrame(animate);
    };

    // init with current size
    init(wrapper.offsetWidth);
    setTimeout(() => { canvas.style.opacity = '1'; }, 100);

    const ro = new ResizeObserver(entries => {
      const size = entries[0].contentRect.width;
      if (size > 0) init(size);
    });
    ro.observe(wrapper);

    return () => {
      ro.disconnect();
      cancelAnimationFrame(rafId.current);
      globeRef.current?.destroy();
    };
  }, []);

  return (
    <div ref={wrapperRef} className={`w-full aspect-square${className ? ` ${className}` : ''}`}>
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
