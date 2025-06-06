import { motion, useScroll, useTransform, useSpring } from 'framer-motion'
import { useRef } from 'react'

export default function NewFlameFront() {

    const ref = useRef(null)

    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ['end end', 'end start']
    })

    const yOrangeRaw = useTransform(
        scrollYProgress,
        [0, 1], [0, -2000]
    )
    const yYellowRaw = useTransform(
        scrollYProgress,
        [0, 1], [0, -1500]
    )

    const yOrange = useSpring(yOrangeRaw, {
        stiffness: 110,
        damping: 20,
    });
    const yYellow = useSpring(yYellowRaw, {
        stiffness: 110,
        damping: 20,
    });

    return (
        <div ref={ref} className='absolute w-full bottom-0'>
            <motion.div style={{ y: yOrange }} className='transform-gpu will-change-transform w-full absolute -bottom-[110svh]'>
                <motion.img
                    whileInView={
                        { y: [0, 10, 0, -10, 0], x: [0, 20, 0] }
                    }
                    viewport={{once: false}}
                    transition={{
                        duration: 4,
                        repeat: Infinity,
                        repeatType: 'loop',
                        ease: "easeInOut"
                    }}
                    src='/orange.svg'
                    className="w-full scale-105 min-w-[720px] transform-gpu will-change-transform">
                </motion.img>
                <div className='w-full h-[100svh] bg-[#c46827] -translate-y-3 sm:-translate-y-2 transform-gpu will-change-transform' />
            </motion.div>
            <motion.div style={{ y: yYellow }} className='transform-gpu will-change-transform w-full absolute -bottom-[310svh]'>
                <motion.img
                    whileInView={
                        { y: [0, 10, 0, -10, 0], x: [0, 20, 0] }
                    }
                    viewport={{once: false}}
                    transition={{
                        duration: 3,
                        repeat: Infinity,
                        repeatType: 'loop',
                        ease: "easeInOut"
                    }}
                    src='/yellow.svg'
                    className="w-full scale-105 min-w-[720px] transform-gpu will-change-transform">
                </motion.img>
                <div className='w-full h-[300svh] bg-[#efb010] -translate-y-3 sm:-translate-y-2 transform-gpu will-change-transform' />
            </motion.div>
        </div>
    )
}