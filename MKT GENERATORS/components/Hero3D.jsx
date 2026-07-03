'use client';
import { useEffect, useRef } from 'react';
import * as THREE from 'three';

export default function Hero3D() {
  const ref = useRef(null);
  useEffect(() => {
    if (!ref.current) return;
    const canvasWrap = ref.current;
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(42, canvasWrap.clientWidth / canvasWrap.clientHeight, 0.1, 1000);
    camera.position.set(5, 3.2, 8);
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(canvasWrap.clientWidth, canvasWrap.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    canvasWrap.appendChild(renderer.domElement);

    const group = new THREE.Group();
    const bodyMat = new THREE.MeshStandardMaterial({ color: 0x1d2730, metalness: 0.45, roughness: 0.35 });
    const tealMat = new THREE.MeshStandardMaterial({ color: 0x009ca6, metalness: 0.35, roughness: 0.30 });
    const orangeMat = new THREE.MeshStandardMaterial({ color: 0xff8a00, metalness: 0.25, roughness: 0.35 });
    const blackMat = new THREE.MeshStandardMaterial({ color: 0x070b0f, metalness: 0.6, roughness: 0.3 });
    const box = (w,h,d,mat,x,y,z) => { const m = new THREE.Mesh(new THREE.BoxGeometry(w,h,d), mat); m.position.set(x,y,z); group.add(m); return m; };
    const base = box(5.2,.35,2.2,blackMat,0,-1.05,0);
    const canopy = box(4.7,2.25,1.9,bodyMat,0,.12,0);
    const panel = box(2.4,1.45,.08,tealMat,-.35,.13,1.0);
    const grill = box(.9,1.55,.1,blackMat,1.65,.15,1.04);
    const controller = box(.75,1.15,.12,blackMat,-1.75,.18,1.07);
    const lifting1 = box(.35,.16,.35,orangeMat,-1.8,1.35,0);
    const lifting2 = box(.35,.16,.35,orangeMat,1.8,1.35,0);
    scene.add(group);
    scene.add(new THREE.AmbientLight(0xffffff, .85));
    const key = new THREE.DirectionalLight(0xffffff, 2.5); key.position.set(5,6,5); scene.add(key);
    const warm = new THREE.PointLight(0xff8a00, 2.2, 12); warm.position.set(-3,2,4); scene.add(warm);

    let raf;
    const render = () => { group.rotation.y += 0.004; renderer.render(scene, camera); raf = requestAnimationFrame(render); };
    render();
    const onScroll = () => {
      const p = Math.min(1, window.scrollY / 700);
      canopy.position.y = .12 + p * .9;
      panel.position.x = -.35 - p * .8;
      grill.position.x = 1.65 + p * .65;
      camera.position.z = 8 - p * 1.3;
    };
    const onResize = () => { renderer.setSize(canvasWrap.clientWidth, canvasWrap.clientHeight); camera.aspect = canvasWrap.clientWidth / canvasWrap.clientHeight; camera.updateProjectionMatrix(); };
    window.addEventListener('scroll', onScroll);
    window.addEventListener('resize', onResize);
    return () => { cancelAnimationFrame(raf); window.removeEventListener('scroll', onScroll); window.removeEventListener('resize', onResize); renderer.dispose(); canvasWrap.innerHTML = ''; };
  }, []);
  return <div className="hero-3d" ref={ref} />;
}
