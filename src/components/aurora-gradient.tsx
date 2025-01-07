import React from 'react'

export const AuroraGradient: React.FC = () => {
  return (
    <div className="absolute inset-0 -z-20 overflow-hidden">
      <div
        className="absolute -inset-[10px] opacity-50"
        style={{
          background:
            'linear-gradient(to right, #4f46e5, #3b82f6, #06b6d4, #14b8a6)',
          filter: 'blur(100px)',
        }}
      />
    </div>
  )
}

