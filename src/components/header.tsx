'use client'

import { Button } from '@/components/ui/button'
import Image from 'next/image'
import { LanguageSwitcher } from './language-switcher'
import Link from 'next/link'
import { motion } from 'framer-motion'

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
      className="fixed top-0 left-0 right-0 z-50"
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
          <Link href="/sign-in" className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded">
            {dict?.headerCTA}
          </Link>
          <LanguageSwitcher />
        </div>
      </div>
    </motion.header>
  )
}

