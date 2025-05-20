import { useEffect, useState } from 'react'
import FlameSvg from './flameSvg';


export default function FlameBack() {
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
            <div style={{transform: `translateY(-${scroll * 2}svh)`}} className='z-1'>
                <FlameSvg svgColor="#9a0c0c" xPos={60} yPos={100} delay={3} index={-3} scale={1}/>
                <div className='bg-[#9a0c0c] absolute inset-0 -top-100 w-full h-[100vh]'/>
            </div>
            <div style={{transform: `translateY(-${scroll * 3}svh)`}} className='z-0'>
                <FlameSvg svgColor="#4a0000" xPos={-70} yPos={150} delay={4} index={-4} scale={-1}/>
                <div className='bg-[#4a0000] absolute inset-0 -top-107 w-full h-[100vh]'/>
            </div>
        </div>
    )
}