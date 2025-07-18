"use client"

import * as THREE from "three"
import { Canvas } from "@react-three/fiber"
import { useGLTF, useAnimations, Sparkles, Environment } from "@react-three/drei"
import { useRef, useEffect, useMemo } from "react"
import type { JSX } from "react/jsx-runtime"

// Открытый маленький гуманоид (≈2 МБ) с базовой анимацией
const MODEL_PATH =
  "https://raw.githubusercontent.com/KhronosGroup/glTF-Sample-Models/master/2.0/CesiumMan/glTF-Binary/CesiumMan.glb"

function Model(props: JSX.IntrinsicElements["group"]) {
  const group = useRef<THREE.Group>(null)
  const { scene, animations } = useGLTF(MODEL_PATH)
  const { actions, names } = useAnimations(animations, group)

  /* --- Материал «жидкое серебро» --- */
  const liquidSilverMaterial = useMemo(
    () =>
      new THREE.MeshPhysicalMaterial({
        metalness: 1,
        roughness: 0.05,
        color: 0xc0c0c0, // Silver color
        iridescence: 1,
        iridescenceIOR: 1.6,
        iridescenceThicknessRange: [100, 800],
        sheen: 0.5,
        sheenColor: 0x66aaff, // Blue sheen
        sheenRoughness: 0.2,
      }),
    [],
  )

  /* --- Применяем материал ко всей модели --- */
  useEffect(() => {
    scene.traverse((child) => {
      if ((child as THREE.Mesh).isMesh) {
        child.material = liquidSilverMaterial
        child.castShadow = true
        child.receiveShadow = true
      }
    })
  }, [scene, liquidSilverMaterial])

  /* --- Запускаем анимацию --- */
  useEffect(() => {
    if (names.length > 0) {
      actions[names[0]]?.reset().fadeIn(0.5).play()
    }
    return () => {
      names.forEach((name) => actions[name]?.stop())
    }
  }, [actions, names])

  return (
    <group ref={group} {...props} dispose={null}>
      <primitive object={scene} scale={2.4} />
    </group>
  )
}

useGLTF.preload(MODEL_PATH)

export default function Banner3D() {
  return (
    <Canvas camera={{ position: [0, 1.5, 6], fov: 45 }} shadows gl={{ antialias: true, alpha: true }}>
      <ambientLight intensity={0.5} />
      <directionalLight
        position={[5, 10, 5]}
        intensity={1.5}
        castShadow
        shadow-mapSize-width={2048}
        shadow-mapSize-height={2048}
      />
      <pointLight position={[-5, 5, -5]} intensity={1.0} color="#88bbff" />

      <group position={[0, -1, 0]}>
        <Model />
        <Sparkles count={150} scale={7} size={6} speed={0.4} color="#88bbff" />
      </group>

      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -1.01, 0]} receiveShadow>
        <planeGeometry args={[20, 20]} />
        <shadowMaterial transparent opacity={0.2} />
      </mesh>

      <Environment preset="city" />
    </Canvas>
  )
}
