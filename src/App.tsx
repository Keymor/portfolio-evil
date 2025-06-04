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
  const [hover1, setHover1] = useState(false)
  const [hover2, setHover2] = useState(false)
  const [hoverMob1, setHoverMob1] = useState(false)
  const [hoverMob2, setHoverMob2] = useState(false)

  const sizeUpOne = () => {
    if (window.innerWidth > 650) {
      setHover1(!hover1)
    } else {
      setHover1(!hover1)
      setHoverMob1(!hoverMob1)
    }
  }

  const sizeUpTwo = () => {
    if (window.innerWidth > 650) {
      setHover2(!hover2)
    } else {
      setHover2(!hover2)
      setHoverMob2(!hoverMob2)
    }
  }

  useEffect(() => {
    setTimeout(() => {
      setTimer(true)
    }, 1500)
  }, [])

  return (
    <div className='flex flex-col w-screen h-fit overflow-clip overflow-y-hidden fontAdd'>
      <Header />
      <div className='flex flex-col w-full h-[100svh] relative bg-black'>
        <div className='flex flex-col sm:flex-row w-full sm:w-[1180px] h-3/5 mt-[35%] sm:mt-[15%] justify-center self-center gap-[10vw]'>
          <div style={{ animation: timer ? 'idle 1s ease-in-out infinite' : 'fall 1.5s ease-in-out' }} className='mx-auto sm:mx-0 rounded-2xl flex flex-col gap-1 z-1 sm:w-full p-[5vw]'>
            <h1 className='py-3 px-4 font-bold text-xl bg-[#cb3838] rounded-4xl text-center w-fit text-white'>FULL STACK WEB DEVELOPER</h1>
            <img src='/HEY.svg' className='h-fit w-4/10 my-1' />
            <h1 className='text-2xl sm:text-5xl font-bold text-white whitespace-nowrap'>I'M VLADYSLAV KUTUZOV</h1>
            <h1 className='text-2xl sm:text-5xl font-bold text-white whitespace-nowrap'>I BUILD FRIENDLY WEB EXPERIENCES</h1>
            <div className='flex flex-row gap-5 sm:gap-10 mt-2 sm:mt-6'>
              <div className='size-15 bg-[#cb3838] rounded-full' />
              <div className='size-15 bg-[#cb3838] rounded-full' />
              <div className='size-15 bg-[#cb3838] rounded-full' />
            </div>
          </div>
          <img style={{ animation: timer ? 'evil 1s ease-in-out infinite' : 'appearence 1.5s ease-in-out forwards' }} src='/demon.svg' className='z-1 size-80 mx-auto sm:mx-0 sm:size-130 translate-x-1/10' />
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
      <h1 className='w-fit text-white text-4xl font-bold mx-auto text-shadow-md z-10 mt-5'>PROJECTS</h1>
      <div className='h-[50svh] flex flex-col w-screen sm:max-w-[1080px] sm:flex-row text-red-800 items-center justify-center self-center gap-20 mt-20 sm:mt-10'>
        <div
          style={{ scale: hoverMob1 ? 2 : '', zIndex: hoverMob1 ? 11 : 10 }}
          onMouseEnter={() => sizeUpOne()}
          onMouseLeave={() => sizeUpOne()}
          className='text-center sm:w-4/10 size-fit z-10 relative hover:scale-120 duration-300 drop-shadow-[0px_10px_10px_rgba(0,0,0,0.5)]'>
          <div onClick={() => { setHoverMob1(!hoverMob1); setHover1(!hover1) }} className='sm:hidden rounded-4xl absolute inset-0 size-full z-2 sm:z-1' />
          <div
            style={{ visibility: hover1 ? 'visible' : 'hidden', opacity: hover1 ? 1 : 0 }}
            className='bg-white rounded-2xl w-9/10 h-2/3 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/3 flex duration-300 z-3' />
          <img src='/devil.svg' className=' relative mx-auto sm:mx-0 sm:size-full z-1' />
          <img style={{ visibility: hover1 ? 'visible' : 'hidden' }} src='/eyes.svg' className='w-4/10 absolute top-[15%] left-1/2 -translate-x-1/2 blink delay-300 z-2' />
          <img src='/tail.svg' className='absolute -left-1/20 top-19/20 inset-0 scale-100 sm:scale-180 z-1' />
          <h1 style={{ visibility: hover1 ? 'hidden' : 'visible' }} className='w-full absolute inset-0 left-1/2 top-1/2 -translate-x-1/2 text-5xl sm:text-7xl font-bold whitespace-nowrap z-2'>PROJECT 1</h1>
        </div>
        <div
          style={{ scale: hoverMob2 ? 2 : '', zIndex: hoverMob2 ? 11 : 10 }}
          onMouseEnter={() => sizeUpTwo()}
          onMouseLeave={() => sizeUpTwo()}
          className='text-center sm:w-4/10 size-fit z-10 relative hover:scale-120 duration-300 drop-shadow-[0px_10px_10px_rgba(0,0,0,0.5)]'>
          <div onClick={() => { setHoverMob2(!hoverMob2); setHover2(!hover2) }} className='sm:hidden rounded-4xl absolute inset-0 size-full z-2 sm:z-1' />
          <div
            style={{ visibility: hover2 ? 'visible' : 'hidden', opacity: hover2 ? 1 : 0 }}
            className='bg-white rounded-2xl w-9/10 h-2/3 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/3 flex duration-300 z-2' />
          <img src='/devil.svg' className=' relative mx-auto sm:mx-0 sm:size-full z-1' />
          <img src='/tail.svg' className='absolute left-12/20 top-19/20 inset-0 scale-100 sm:scale-180 -scale-x-100 sm:-scale-x-180 rotate-50 z-0' />
          <img style={{ visibility: hover2 ? 'visible' : 'hidden' }} src='/eyes.svg' className='w-4/10 absolute top-[15%] left-1/2 -translate-x-1/2 blink delay-300 z-2' />
          <h1 style={{ visibility: hover2 ? 'hidden' : 'visible' }} className='w-full absolute inset-0 left-1/2 top-1/2 -translate-x-1/2 text-5xl sm:text-7xl font-bold whitespace-nowrap z-2'>PROJECT 2</h1>
        </div>
      </div>
      <div className='h-[15svh]' />
      <Skills />
      <Contact />
    </div>
  )
}

export default App

//fire in 16:9