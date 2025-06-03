import { useState } from "react"

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
    const arraySmall = [
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
        <div className='flex flex-col sm:gap-5 w-full z-10'>
            <div className='w-fit self-center mx-auto bg-black text-white text-2xl px-15 py-3 rounded-4xl font-bold'>STACK</div>
            <h1 className='w-fit text-4xl font-bold mx-auto text-shadow-md text-white'>MY SKILLS</h1>
            <div className='hidden sm:flex flex-row w-full justify-center relative h-25'>
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
                                className='absolute size-8 sm:size-25 bg-white shadow-md rounded-md flex right-0 opacity-0 translate-x-[50%] hover:scale-140 duration-200'>
                                <img className="rounded-2xl" src={item.img}/> 
                            </div>
                        )
                    })}
                </div>
            </div>
            <div className='w-90 h-fit mx-auto flex flex-wrap gap-6.5 p-6.5 sm:hidden'>
                {arraySmall.map((item, index) => {
                    return (
                        <div key={index} className='size-20 bg-white rounded-lg drop-shadow-md'>
                                <img className="rounded-2xl" src={item.img}/> 
                        </div>
                    )
                })}
            </div>
        </div>
    )
}