import { useState } from "react"
import { motion } from 'framer-motion'

export default function Skills() {
    const array = [
        {
            img: '/logos/ts.jpg'
        },
        {
            img: '/logos/css.jpg'
        },
        {
            img: '/logos/express.jpg'
        },
        {
            img: '/logos/html.jpg'
        },
        {
            img: '/logos/JWT.jpg'
        },
        {
            img: '/logos/mongodb.jpg'
        },
        {
            img: '/logos/nest.jpg'
        },
        {
            img: '/logos/next.jpg'
        },
        {
            img: '/logos/node.jpg'
        },
        {
            img: '/logos/react.jpg'
        }
    ]
    const [hover, setHover] = useState(-10)

    const onMouse = (index: number) => {
        setHover(index)
    }
    const onMouseLeave = () => {
        setHover(-10)
    }

    return (
        <motion.div
            initial={{ opacity: 0, scale: .9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className='flex flex-col gap-5 w-full z-10 mt-[30svh] sm:mt-[15svh]'>
            <h1 className='w-fit text-5xl lg:text-7xl sm:mb-[3svh] font-bold mx-auto text-shadow-md text-white'>STACK</h1>
            <div className='flex flex-row w-full justify-center relative h-25'>
                <div className='w-[1080px] h-25 flex absolute'>
                    {array.map((item, index) => {
                        return (
                            <div
                                key={index}
                                style={{
                                    zIndex: hover === index ? 10 : 0,
                                    animation: 'shifting 10s linear infinite',
                                    animationDelay: `${10 - index}s`,
                                    transform: `scale(${hover === index + 1 ||
                                        hover === index - 1 ||
                                        hover === 0 && index === 9 ||
                                        hover === 9 && index === 0
                                        ? 1.1 : 1})`
                                }}
                                onMouseEnter={() => onMouse(index)}
                                onMouseLeave={() => onMouseLeave()}
                                className='absolute size-25 bg-white shadow-md rounded-2xl flex right-0 opacity-0 translate-x-[50%] hover:scale-140 duration-200'>
                                <img className="rounded-2xl" src={item.img} />
                            </div>
                        )
                    })}
                </div>
            </div>
        </motion.div>
    )
}