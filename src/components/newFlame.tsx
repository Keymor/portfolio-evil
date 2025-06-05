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
            <motion.img
                src='/dark.svg'
                style={{ y: yDark }}
                className="w-full absolute bottom-0">
            </motion.img>
            <motion.img
                src='/red.svg'
                style={{ y: yRed }}
                className="w-full absolute bottom-0">
            </motion.img>
        </div>
    )
}