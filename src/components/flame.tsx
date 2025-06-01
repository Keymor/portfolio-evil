import { useEffect, useState } from 'react'
import FlameSvg from './flameSvg';


export default function Flame() {
    const [scroll, setScroll] = useState(0)

    useEffect(() => {
        const handleScroll = () => {
            const pxH = window.scrollY
            const viewVH = window.innerHeight
            const vH = (pxH / viewVH) * 100

            setScroll(Math.floor(vH));
        };
        window.addEventListener("scroll", handleScroll);
    }, [])

    return (
        <div className="w-full flex flex-col relative">
            <div style={{transform: `translateY(-${scroll}svh)`}} className='z-3'>
                <FlameSvg svgColor="#efb010" xPos={30} yPos={0} delay={1} index={1} scale={1}/>
                <div className='bg-[#efb010] absolute inset-0 -top-70 w-full h-[100vh]'/>
            </div>
            <div style={{transform: `translateY(-${scroll * 1.5}svh)`}} className='z-2'>
                <FlameSvg svgColor="#d26200" xPos={-70} yPos={50} delay={2} index={-2} scale={-1}/>
                <div className='bg-[#d26200] absolute inset-0 -top-90 w-full h-[100vh]'/>
            </div>
        </div>
    )
}