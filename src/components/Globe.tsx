import createGlobe from "cobe";
import { useEffect, useRef } from "react";

export default function Globe() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    let phi = 0;
    let globeInstance: ReturnType<typeof createGlobe> | null = null;
    
    if (!canvasRef.current) return;

    globeInstance = createGlobe(canvasRef.current, {
      devicePixelRatio: 2,
      width: 1000,
      height: 1000,
      phi: 0,
      theta: 0.3,
      dark: 1,
      diffuse: 1.2,
      mapSamples: 24000,
      mapBrightness: 6,
      baseColor: [0.016, 0.141, 0.18], 
      markerColor: [0.937, 0.267, 0.267], 
      glowColor: [0.004, 0.086, 0.118], 
      markers: [
        { location: [37.7595, -122.4367], size: 0.06 }, 
        { location: [40.7128, -74.0060], size: 0.05 }, 
        { location: [51.5074, -0.1278], size: 0.05 }, 
        { location: [35.6895, 139.6917], size: 0.07 }, 
        { location: [1.3521, 103.8198], size: 0.05 },
        { location: [48.8566, 2.3522], size: 0.05 },
        { location: [-33.8688, 151.2093], size: 0.06 }, 
      ],
      onRender: (state) => {
        state.phi = phi;
        phi += 0.005;
      },
    });

    setTimeout(() => {
        if(canvasRef.current) {
            canvasRef.current.style.opacity = '1';
        }
    }, 100);

    return () => {
      globeInstance?.destroy();
    };
  }, []);

  return (
    <div className="w-full aspect-square relative flex items-center justify-center">
      <canvas
        ref={canvasRef}
        className="w-full h-full opacity-0 transition-opacity duration-1000 ease-in-out"
        style={{
          width: '100%',
          height: '100%',
          contain: 'layout paint size',
        }}
      />
    </div>
  );
}
