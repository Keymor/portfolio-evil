import { motion, useScroll, useTransform, useSpring } from 'framer-motion'
import { useRef } from 'react'

export default function NewFlame() {

    const ref = useRef(null)

    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ['end end', 'end start']
    })

    const yDarkRaw = useTransform(
        scrollYProgress,
        [0, 1], [0, -4000]
    )
    const yRedRaw = useTransform(
        scrollYProgress,
        [0, 1], [0, -3000]
    )

    const yDark = useSpring(yDarkRaw, {
        stiffness: 100,
        damping: 20,
    });
    const yRed = useSpring(yRedRaw, {
        stiffness: 100,
        damping: 20,
    });

    return (
        <div ref={ref} className='absolute w-full bottom-0'>
            <motion.div style={{ y: yDark }} className='transform-gpu will-change-transform w-full absolute -bottom-[105svh]'>
                <motion.img
                    whileInView={
                        { y: [0, 10, 0, -10, 0], x: [0, 20, 0] }
                    }
                    viewport={{ once: false }}
                    transition={{
                        duration: 6,
                        repeat: Infinity,
                        repeatType: 'loop',
                        ease: "easeInOut"
                    }}
                    src='/dark.svg'
                    className="w-full scale-105 min-w-[720px] transform-gpu will-change-transform">
                </motion.img>
                <div className='w-full h-[100svh] bg-[#42120E] -translate-y-3 sm:-translate-y-2 transform-gpu will-change-transform' />
            </motion.div>
            <motion.div style={{ y: yRed }} className='transform-gpu will-change-transform w-full absolute -bottom-[105svh]'>
                <motion.img
                    whileInView={
                        { y: [0, 10, 0, -10, 0], x: [0, 20, 0] }
                    }
                    viewport={{ once: false }}
                    transition={{
                        duration: 5,
                        repeat: Infinity,
                        repeatType: 'loop',
                        ease: "easeInOut"
                    }}
                    src='/red.svg'
                    className="w-full scale-105 min-w-[720px] transform-gpu will-change-transform">
                </motion.img>
                <div className='w-full h-[100svh] bg-[#8D2018] -translate-y-3 sm:-translate-y-2 transform-gpu will-change-transform' />
            </motion.div>
        </div>
    )
}