import { useEffect, useRef } from 'react';

const vert = `
attribute vec2 a_pos;
void main() {
  gl_Position = vec4(a_pos, 0.0, 1.0);
}
`;

const frag = `
precision mediump float;
uniform float u_time;
uniform vec2 u_res;

void main() {
  vec2 uv = gl_FragCoord.xy / u_res;

  float wave1 = sin(uv.x * 4.0 + u_time * 0.5) * 0.5 + 0.5;
  float wave2 = sin(uv.y * 3.0 - u_time * 0.4) * 0.5 + 0.5;
  float wave3 = sin((uv.x + uv.y) * 2.5 + u_time * 0.3) * 0.5 + 0.5;

  vec3 accent = vec3(0.937, 0.267, 0.267);
  vec3 teal   = vec3(0.133, 0.533, 0.533);
  vec3 dark   = vec3(0.004, 0.086, 0.118);

  vec3 col = dark;
  col = mix(col, teal,   wave1 * wave2 * 0.25);
  col = mix(col, accent, wave3 * wave1 * 0.15);

  gl_FragColor = vec4(col, 1.0);
}
`;

function compile(gl: WebGLRenderingContext, type: number, src: string) {
  const s = gl.createShader(type)!;
  gl.shaderSource(s, src);
  gl.compileShader(s);
  return s;
}

export default function OGLBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current!;
    const gl = canvas.getContext('webgl')!;
    if (!gl) return;

    const prog = gl.createProgram()!;
    gl.attachShader(prog, compile(gl, gl.VERTEX_SHADER, vert));
    gl.attachShader(prog, compile(gl, gl.FRAGMENT_SHADER, frag));
    gl.linkProgram(prog);
    gl.useProgram(prog);

    const buf = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, buf);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1,-1, 1,-1, -1,1, 1,1]), gl.STATIC_DRAW);

    const loc = gl.getAttribLocation(prog, 'a_pos');
    gl.enableVertexAttribArray(loc);
    gl.vertexAttribPointer(loc, 2, gl.FLOAT, false, 0, 0);

    const uTime = gl.getUniformLocation(prog, 'u_time');
    const uRes  = gl.getUniformLocation(prog, 'u_res');

    const resize = () => {
      canvas.width  = window.innerWidth;
      canvas.height = window.innerHeight;
      gl.viewport(0, 0, canvas.width, canvas.height);
      gl.uniform2f(uRes, canvas.width, canvas.height);
    };
    window.addEventListener('resize', resize);
    resize();

    let raf = 0;
    let destroyed = false;

    const loop = (t: number) => {
      if (destroyed) return;
      raf = requestAnimationFrame(loop);
      gl.uniform1f(uTime, t * 0.001);
      gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
    };
    raf = requestAnimationFrame(loop);

    return () => {
      destroyed = true;
      cancelAnimationFrame(raf);
      window.removeEventListener('resize', resize);
      // Do NOT call loseContext() — it permanently destroys the context
      // and breaks React strict mode's second mount
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{ position: 'fixed', top: 0, left: 0, zIndex: 0, pointerEvents: 'none', display: 'block' }}
    />
  );
}
