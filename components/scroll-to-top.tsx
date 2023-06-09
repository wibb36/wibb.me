'use client'

import { useState, useEffect } from 'react'
// import { motion, useAnimation, useScroll } from 'framer-motion';

import { cn } from '@/lib/utils'
import { Icon } from './icon';

// TODO: Add animation with CSS or Framer Motion
export function ScrollToTop({ className, threshold = 500 }: { className?: string; threshold?: number }) {
    const [isVisible, setIsVisible] = useState(false)

    // const toggleVisibility = () => {
    //     if (window.pageYOffset > 300) {
    //         setIsVisible(true)
    //     } else {
    //         setIsVisible(false)
    //     }
    // }

    const toggleVisibility = () => {
        if (window.scrollY > threshold) {
            setIsVisible(true)
        } else {
            setIsVisible(false)
        }
    }

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        })
    }

    useEffect(() => {
        window.addEventListener('scroll', toggleVisibility)

        return () => {
            window.removeEventListener('scroll', toggleVisibility)
        }
    }, [toggleVisibility])

    return isVisible ? (

        <button
            type="button"
            onClick={scrollToTop}
            className={cn(
                "p-2 bg-neutral-200 dark:bg-neutral-800 rounded-full",
                isVisible ? 'opacity-100' : 'opacity-0',
                className
            )}
        >
            <Icon name="arrowTop" width={24} height={24} />
            <span className="sr-only">Go to top</span>
        </button>
    ) : null
}