'use client'

import { usePathname } from 'next/navigation'
import Link from 'next/link'
import { i18n } from '@/lib/i18n-config'
import { Button } from '@/components/ui/button'
import { Globe } from 'lucide-react'

export function LanguageSwitcher() {
  const pathName = usePathname()
  const currentLocale = pathName.split('/')[1] || i18n.defaultLocale
  const nextLocale = currentLocale === 'en' ? 'ar' : 'en'

  // Replace the locale segment of the pathname
  const newPathname = pathName.replace(`/${currentLocale}`, `/${nextLocale}`)

  return (
    <Button
      variant="outline"
      size="icon"
      className="language-switcher bg-transparent border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white transition-colors"
      asChild
    >
      <Link href={newPathname}>
        <Globe className="h-5 w-5 group-hover:text-white transition-colors" />
        <span className="sr-only">
          Switch to {nextLocale === 'en' ? 'English' : 'العربية'}
        </span>
      </Link>
    </Button>
  )
}

