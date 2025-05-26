import './App.css'
import Flame from './components/flame'
import Fire from './components/particless'
import Header from './components/header'
import { useEffect, useState } from 'react'
import FlameBack from './components/flameBack'
import Skills from './components/skills'
import Contact from './components/contacts'

function App() {
  const [timer, setTimer] = useState(false)

  useEffect(() => {
    setTimeout(() => {
      setTimer(true)
    }, 1500)
  }, [])

  return (
    <div className='flex flex-col w-screen h-fit overflow-clip overflow-y-hidden'>
      <Header />
      <div className='flex flex-col w-full h-[100svh] mx-auto relative bg-black'>
        <div className='flex flex-col sm:flex-row w-full sm:w-[1180px] h-3/5 mx-auto mt-[25%] sm:mt-[10%] p-[5%]'>
          <img style={{ animation: timer ? 'idle 1s ease-in-out infinite' : 'fall 1.5s ease-in-out' }} src='mainText.png' className='mr-auto z-1 size-100'/>
          <img style={{ animation: timer ? 'evil 1s ease-in-out infinite' : 'appearence 1.5s ease-in-out forwards' }} src='/demon.svg' className='ml-auto z-1 size-100' />
        </div>
        <Fire color='rgb(150, 25, 25' amount={50}/>
        <div className='w-full -mb-140 mt-auto scale-x-110 z-0'>
          <FlameBack />
        </div>
        <div className='w-full -mb-100 mt-auto scale-x-110 z-3'>
          <Flame />
        </div>
      </div>
      <div className='h-[5vh]'/>
      <div className='w-full h-[50svh] flex flex-col sm:flex-row items-start'>
        <div className='sm:translate-0 -translate-x-1/20 sm:ml-auto sm:mr-10 mx-auto size-auto z-10 relative hover:scale-110 duration-300 cursor-pointer'>
          <img src='/devil.svg' className='size-fit sm:size-[20svw]' />
          <img src='/eyes.svg' className='size-20 sm:size-[8svw] absolute top-1/10 right-2/8 blink delay-300' />
          <h1 className=' absolute top-1/2 left-1/2 -translate-x-1/3 text-2xl font-bold whitespace-nowrap'>PROJECT 1</h1>
        </div>
        <div className='sm:ml-10 sm:mr-auto mx-auto size-fit sm:size-[20svw] z-10 relative hover:scale-110 duration-300 cursor-pointer'>
          <img src='/devil-1.svg' className='size-fit sm:size-[20svw]' />
          <img src='/eyes.svg' className='size-20 sm:size-[8svw] absolute top-1/10 right-2/7 blinkTwo delay-1000' />
          <h1 className=' absolute top-1/2 left-1/2 -translate-x-1/2 text-2xl font-bold whitespace-nowrap'>PROJECT 2</h1>
        </div>
      </div>
      <Skills />
      <Contact />
    </div>
  )
}

export default App
