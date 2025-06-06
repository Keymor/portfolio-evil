import { useEffect, useState, type ReactElement } from "react";

interface ParticlesProp {
  amount: number,
  color: string
}

const Fire: React.FC<ParticlesProp> = ({amount, color}) => {
  const [particles, setParticles] = useState<ReactElement[]>([]);
  const xPosition = amount

  useEffect(() => {

    const newParticles = Array.from({length: xPosition}).map((_, index: number) => {
      return (
        <div key={index} style={{
          '--xposition': `${(Math.floor((Math.random() * 100)))}%`,
          '--range': `${Math.random() * (10 - -5) + -5}%`, 
          animationDelay: `${Math.random() * (3 - 1) + 1}s`, 
          animationDuration: `${Math.random() * (6 - 3) + 3}s`,
          backgroundColor: `${color}, ${Math.random() * (1 - 0.3) + 0.3})`,
          scale: Math.random() * (0.8 - 0.1) + 0.1
        } as React.CSSProperties} className='size-5 rounded-full absolute bottom-1 spankAnim'/>
      )
    })

    setParticles(newParticles)
    
  }, [])

  return (
    <>
      <div className='transform-gpu will-change-transform w-full h-[100svh] absolute'>
        {particles}
      </div>
    </>
  )
}

export default Fire