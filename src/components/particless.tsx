export default function Fire() {

  const xPosition = 100

  const animationStart = () => {

    const newArr = Array.from({length: xPosition}).map((_, index: number) => {
      return (
        <div key={index} style={{
          '--xposition': `${(Math.floor((Math.random() * 100)))}%`,
          '--range': `${Math.random() * (10 - -5) + -5}%`, 
          animationDelay: `${Math.random() * (3 - 1) + 1}s`, 
          animationDuration: `${Math.random() * (6 - 3) + 3}s`,
          backgroundColor: `rgb(150, 25, 25, ${Math.random() * (1 - 0.3) + 0.3})`,
          scale: Math.random() * (0.8 - 0.1) + 0.1
        } as React.CSSProperties} className='size-5 rounded-full absolute bottom-1 spankAnim'/>
      )
    })
    return newArr
  }

  return (
    <>
      <div className='w-full h-full absolute inset-0 overflow-clip -z-3'>
        {animationStart()}
      </div>
    </>
  )
}