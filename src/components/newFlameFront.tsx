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
        stiffness: 100,
        damping: 20,
    });
    const yYellow = useSpring(yYellowRaw, {
        stiffness: 100,
        damping: 20,
    });

    return (
        <div ref={ref} className='absolute w-full bottom-0'>
            <motion.img
                src='/orange.svg'
                style={{ y: yOrange }}
                className="w-full absolute bottom-0">
            </motion.img>
            <motion.img
                src='/yellow.svg'
                style={{ y: yYellow }}
                className="w-full absolute bottom-0">
            </motion.img>
        </div>
    )
}