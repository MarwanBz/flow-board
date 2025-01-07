'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { LanguageSwitcher } from './language-switcher'

const headerVariants = {
  hidden: { y: -50, opacity: 0 },
  visible: { 
    y: 0, 
    opacity: 1, 
    transition: { 
      type: 'spring', 
      stiffness: 120, 
      damping: 20 
    } 
  }
}

export const Header = ({ dict }: { dict: any }) => {
  return (
    <motion.header 
      className="fixed top-0 left-0 right-0 z-50 bg-black bg-opacity-50 backdrop-blur-md"
      initial="hidden"
      animate="visible"
      variants={headerVariants}
    >
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/">
          <Image
            src="/taskio-logo.svg"
            alt="Taskio"
            width={120}
            height={36}
            className="w-auto h-8"
          />
        </Link>
        <div className="flex items-center space-x-4">
          <Button size="sm" className="bg-blue-500 hover:bg-blue-600 text-white">
            {dict?.headerCTA}
          </Button>
          <LanguageSwitcher />
        </div>
      </div>
    </motion.header>
  )
}

