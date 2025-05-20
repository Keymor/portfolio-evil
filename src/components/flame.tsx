// import { useEffect, useState } from 'react'
import FlameSvg from './flameSvg';


export default function Flame() {
    // const [scroll, setScroll] = useState(0)

    // useEffect(() => {
    //     const handleScroll = () => {
    //         const pxH = window.scrollY
    //         const viewVH = window.innerHeight
    //         const vH = (pxH / viewVH) * 100

    //         setScroll(Math.floor(vH * 2));
    //         console.log(vH)
    //     };
    //     window.addEventListener("scroll", handleScroll);
    // }, [])

    return (
        <div className="w-full relative">
            <div>
                <FlameSvg svgColor="#efc210" xPos={60} yPos={0} delay={1} index={1} scale={1}/>
            </div>
            <div >
                <FlameSvg svgColor="#d26200" xPos={-70} yPos={50} delay={2} index={-2} scale={-1}/>
            </div>
            <div >
                <FlameSvg svgColor="#9a0c0c" xPos={60} yPos={100} delay={3} index={-3} scale={1}/>
            </div>
            <div >
                <FlameSvg svgColor="#4a0000" xPos={-70} yPos={150} delay={4} index={-4} scale={-1}/>
            </div>
        </div>
    )
}