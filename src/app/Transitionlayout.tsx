"use client"

import * as motion from "motion/react-client"
import { usePathname } from "next/navigation"
import { ReactNode, useEffect, useState } from "react"

export default function TransitionLayout({ children }: { children: ReactNode }) {
  const pathname = usePathname()
  const [isPresent, setIsPresent] = useState(true)
  
  // Reset presence state when route changes
  useEffect(() => {
    setIsPresent(true)
  }, [pathname])

  return (
    <motion.div
      key={pathname}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
    >
      {children}
    </motion.div>
  )
}