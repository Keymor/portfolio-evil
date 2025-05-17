export default function Flame() {
    return (
        <div>
            <img style={{'--positionFlame': '60px', animationDuration: '1s'} as React.CSSProperties} src='/fire.png' className='w-full h-160 fixed inset-0 top-auto -bottom-100 saturate-200 hue-rotate-55 brightness-200 -z-1 flame' />
            <img style={{'--positionFlame': '-70px', animationDuration: '2s'} as React.CSSProperties} src='/fire.png' className='w-full h-160 fixed inset-0 top-auto -bottom-60 saturate-80 hue-rotate-20 -z-2 flame' />
            <img style={{'--positionFlame': '60px', animationDuration: '3s'} as React.CSSProperties} src='/fire.png' className='w-full h-160 fixed inset-0 top-auto -bottom-40 saturate-90 hue-rotate-10 -z-3 brightness-70 -scale-x-100 flame' />
            <img style={{'--positionFlame': '-70px', animationDuration: '4s'} as React.CSSProperties} src='/fire.png' className='w-full h-160 fixed inset-0 top-auto -bottom-20 saturate-110 hue-rotate-0 -z-4 brightness-40 scale-x-100 flame' />
        </div>
    )
}