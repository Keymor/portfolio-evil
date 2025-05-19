import { useEffect, useState } from 'react'


export default function Flame() {
    const [scroll, setScroll] = useState(0)

    useEffect(() => {
        const handleScroll = () => {
            const pxH = window.scrollY
            const viewVH = window.innerHeight
            const vH = (pxH / viewVH) * 100

            setScroll(Math.floor(vH * 2));
            console.log(vH)
        };
        window.addEventListener("scroll", handleScroll);
    }, [])

    return (
        <div className="w-[1954px] relative">
            <div style={{ transform: `translateY(-${scroll}svh)` }}>
                <img style={{
                    '--upFlame': '0px', '--positionFlame': '0px', animationDuration: '1s'
                } as React.CSSProperties}
                    src='/fire.png'
                    className='w-[1954pxp] h-[554px] absolute inset-0 top-auto saturate-200 hue-rotate-55 brightness-200 z-2 flame' />
                <div className='w-full h-screen bg-amber-300 saturate-180 brightness-71 -translate-y-[20svh] absolute inset-0' />
            </div>
            <img style={{
                '--upFlame': '50px', '--positionFlame': '-70px', animationDuration: '2s'
            } as React.CSSProperties}
                src='/fire.png'
                className='w-[1954px] h-[554px] absolute inset-0 top-auto saturate-80 hue-rotate-20 -z-2 flame' />
            <img style={{
                '--upFlame': '100px', '--positionFlame': '60px', animationDuration: '3s'
            } as React.CSSProperties}
                src='/fire.png'
                className='w-[1954px] h-[554px] absolute inset-0 top-auto saturate-90 hue-rotate-10 -z-3 brightness-70 -scale-x-100 flame' />
            <img style={{
                '--upFlame': '150px', '--positionFlame': '-70px', animationDuration: '4s'
            } as React.CSSProperties}
                src='/fire.png'
                className='w-[1954px] h-[554px] absolute inset-0 top-auto saturate-110 hue-rotate-0 -z-4 brightness-40 scale-x-100 flame' />
        </div>
    )
}