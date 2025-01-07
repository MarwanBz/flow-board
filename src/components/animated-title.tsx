'use client'

import { motion } from 'framer-motion'

const titleVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 1.0,
      duration: 0.8,
      ease: 'easeOut'
    }
  })
}

interface AnimatedTitleProps {
  text: string;
}

export function AnimatedTitle({ text }: AnimatedTitleProps) {
  return (
    <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tighter text-center mb-8">
      {text.split(' ').map((word, i) => (
        <motion.span
          key={i}
          className="inline-block mr-3 gradient-text"
          custom={i}
          initial="hidden"
          animate="visible"
          variants={titleVariants}
        >
          {word}
        </motion.span>
      ))}
    </h1>
  )
}

export default AnimatedTitle;

