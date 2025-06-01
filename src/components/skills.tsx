import { useState } from "react"

export default function Skills() {
    const array = [
        {
            img: '1'
        },
        {
            img: '2'
        },
        {
            img: '3'
        },
        {
            img: '4'
        },
        {
            img: '5'
        },
        {
            img: '6'
        },
        {
            img: '7'
        },
        {
            img: '8'
        },
        {
            img: '9'
        },
        {
            img: '10'
        },
    ]
    const arraySmall = [
        {
            img: '1'
        },
        {
            img: '2'
        },
        {
            img: '3'
        },
        {
            img: '4'
        },
        {
            img: '5'
        },
        {
            img: '6'
        },
        {
            img: '7'
        },
        {
            img: '8'
        },
        {
            img: '9'
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
        <div className='flex flex-col sm:gap-5 w-full z-10'>
            <div className='w-fit self-center mx-auto bg-black text-white px-15 py-3 rounded-3xl font-bold'>STACK</div>
            <h1 className='w-fit text-4xl font-bold mx-auto text-shadow-md'>MY SKILLS</h1>
            <div className='hidden sm:flex flex-row w-[90%] mx-auto'>
                <div className='w-full h-[30svh] flex items-center relative'>
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
                                        ? 1.10 : 1})`
                                }}
                                onMouseEnter={() => onMouse(index)}
                                onMouseLeave={() => onMouseLeave()}
                                className='absolute size-8 sm:size-25 bg-white shadow-md rounded-md flex right-0 opacity-0 translate-x-[50%] hover:size-35 duration-200'>
                                <div /* className='size-8 bg-amber-300 rounded-4xl m-auto' */>{item.img}</div>
                            </div>
                        )
                    })}
                </div>
            </div>
            <div className='w-90 h-fit mx-auto flex flex-wrap gap-6.5 p-6.5 sm:hidden'>
                {arraySmall.map((item, index) => {
                    return (
                        <div key={index} className='size-20 bg-white rounded-lg drop-shadow-md'>{item.img}</div>
                    )
                })}
            </div>
        </div>
    )
}