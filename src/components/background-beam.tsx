'use client'

import React, { useEffect, useRef } from 'react'

export const BackgroundBeam = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let animationFrameId: number

    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    const createBeam = () => {
      return {
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * 2 + 1,
        speedX: Math.random() * 3 - 1.5,
        speedY: Math.random() * 3 - 1.5,
      }
    }

    const beams = Array.from({ length: 100 }, createBeam)

    const drawBeam = (beam: typeof beams[0]) => {
      ctx.beginPath()
      ctx.arc(beam.x, beam.y, beam.radius, 0, Math.PI * 2)
      ctx.fillStyle = '#FFF' // Blue color matching Taskio logo
      ctx.fill()
    }

    const updateBeam = (beam: typeof beams[0]) => {
      beam.x += beam.speedX
      beam.y += beam.speedY

      if (beam.x < 0 || beam.x > canvas.width) beam.speedX *= -1
      if (beam.y < 0 || beam.y > canvas.height) beam.speedY *= -1
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      beams.forEach((beam) => {
        drawBeam(beam)
        updateBeam(beam)
      })
      animationFrameId = requestAnimationFrame(animate)
    }

    resizeCanvas()
    animate()

    window.addEventListener('resize', resizeCanvas)

    return () => {
      window.removeEventListener('resize', resizeCanvas)
      cancelAnimationFrame(animationFrameId)
    }
  }, [])

  return <canvas ref={canvasRef} className="fixed inset-0 -z-50" />
}

