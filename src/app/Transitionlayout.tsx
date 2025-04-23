'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { usePathname } from 'next/navigation';
import { ReactNode, useEffect, useState } from 'react';

export default function TransitionLayout({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const [showCurtain, setShowCurtain] = useState(false);

  useEffect(() => {
    setShowCurtain(true);
    const timeout = setTimeout(() => {
      setShowCurtain(false);
    }, 1000); // adjust based on your animation duration
    return () => clearTimeout(timeout);
  }, [pathname]);

  return (
    <>
      {/* Curtain Overlay */}
      <AnimatePresence>
        {showCurtain && (
          <>
            <motion.div
              key="curtain-bottom"
              initial={{ scaleY: 0}}
              animate={{ scaleY: 1 }}
              exit={{ scaleY: 0}}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="fixed top-0 left-0 w-full h-[100vh] bg-purple-700 origin-bottom z-50"
            />
            <motion.div
              key="curtain-top"
              initial={{ scaleY: 1 }}
              animate={{ scaleY: 0 }}
              exit={{ scaleY: 0 }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="fixed top-0 left-0 w-full h-[100vh] bg-purple-600 origin-top z-50"
            />
          </>
        )}
      </AnimatePresence>

      {/* Page Content */}
      <AnimatePresence mode="wait" initial={false}>
        <motion.div
           key={pathname}
           initial={{ opacity: 0, y: 20 }}
           animate={{ opacity: 1, y: 0 }}
           exit={{ opacity: 0, y: -20 }}
           transition={{ duration: 0.4 }}
        >
          {children}
        </motion.div>
      </AnimatePresence>
    </>
  );
}
