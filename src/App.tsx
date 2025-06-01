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
    <div className='flex flex-col w-screen h-fit overflow-clip overflow-y-hidden fontAdd'>
      <Header />
      <div className='flex flex-col w-full h-[100svh] relative bg-black'>
        <div className='flex flex-col sm:flex-row w-screen sm:w-[1180px] h-3/5 mt-[25%] sm:mt-[15%] justify-center self-center gap-[10vw]'>
          <div style={{ animation: timer ? 'idle 1s ease-in-out infinite' : 'fall 1.5s ease-in-out' }} className='rounded-2xl flex flex-col gap-1 z-1'>
            <h1 className='py-3 px-4 font-bold text-xl bg-[#cb3838] rounded-4xl text-center w-fit text-white'>FULL STACK WEB DEVELOPER</h1>
            <img src='/HEY.svg' className='h-fit w-4/10 my-1' />
            <h1 className='text-5xl font-bold text-white whitespace-nowrap'>I'M VLADYSLAV KUTUZOV</h1>
            <h1 className='text-5xl font-bold text-white whitespace-nowrap'>I BUILD FRIENDLY WEB EXPERIENCES</h1>
            <div className='flex flex-row gap-10 mt-6'>
              <div className='size-15 bg-[#cb3838] rounded-full' />
              <div className='size-15 bg-[#cb3838] rounded-full' />
              <div className='size-15 bg-[#cb3838] rounded-full' />
            </div>
          </div>
          <img style={{ animation: timer ? 'evil 1s ease-in-out infinite' : 'appearence 1.5s ease-in-out forwards' }} src='/demon.svg' className='z-1 size-100 sm:size-130 translate-x-1/10' />
        </div>
        <Fire color='rgb(150, 25, 25' amount={50} />
        <div className='w-full -mb-140 mt-auto scale-x-110 z-0'>
          <FlameBack />
        </div>
        <div className='w-full -mb-100 mt-auto scale-x-110 z-3'>
          <Flame />
        </div>
      </div>
      <div className='h-[5vh]' />
      <div className='w-fit self-center mx-auto bg-black text-white text-2xl px-15 py-3 rounded-4xl font-bold z-10'>MY WORK</div>
      <h1 className='w-fit text-4xl font-bold mx-auto text-shadow-md z-10 mt-5'>PROJECTS</h1>
      <div className='h-[50svh] flex flex-col w-screen sm:w-[1180px] sm:flex-row text-red-800 justify-center self-center gap-10 mt-10'>
        <div className='sm:translate-0 -translate-x-1/20 z-10 relative hover:scale-110 duration-300 cursor-pointer drop-shadow-[0px_10px_10px_rgba(0,0,0,0.5)]'>
          <img src='/devil.svg' className='size-fit sm:size-[30svw]' />
          <img src='/eyes.svg' className='size-20 sm:size-[8svw] absolute top-1/7 right-[31%] blink delay-300' />
          <h1 className=' absolute top-3/10 right-4/9 translate-1/2 text-7xl font-bold whitespace-nowrap'>PROJECT 1</h1>
        </div>
        <div className='z-10 relative hover:scale-110 duration-300 cursor-pointer drop-shadow-[0px_10px_10px_rgba(0,0,0,0.5)]'>
          <img src='/devil-1.svg' className='size-fit sm:size-[31.5svw]' />
          <img src='/eyes.svg' className='size-20 sm:size-[8svw] absolute top-1/7 right-3/8 blinkTwo delay-1000' />
          <h1 className=' absolute top-7/20 left-1/2 -translate-x-1/2 text-7xl font-bold whitespace-nowrap'>PROJECT 2</h1>
        </div>
      </div>
      <div className='h-[15svh]' />
      <Skills />
      <Contact />
    </div>
  )
}

export default App
