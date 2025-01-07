'use client'

import { motion } from 'framer-motion'
import { CheckCircle } from 'lucide-react'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
}

export const WhyTaskio = ({ dict }: { dict: any }) => {
  return (
    <motion.section 
      className="mt-24"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <h2 className="text-3xl font-bold text-center mb-12">{dict?.whyTaskio?.title}</h2>
      <div className="grid md:grid-cols-2 gap-8">
        {dict?.whyTaskio?.benefits?.map((benefit: any, index: number) => (
          <motion.div 
            key={index} 
            className="flex items-start space-x-4"
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <CheckCircle className="flex-shrink-0 w-6 h-6 text-blue-500" />
            <div>
              <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
              <p className="text-gray-300">{benefit.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  )
}

