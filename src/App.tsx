import './App.css'
import { motion } from 'framer-motion'
import Fire from './components/particless'
import { useEffect, useState } from 'react'
import Skills from './components/skills'
import Contact from './components/contacts'
import NewFlame from './components/newFlame'
import NewFlameFront from './components/newFlameFront'

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
      {/* Fires page 'EVIL' */}
      <div className='flex flex-col w-full h-[100svh] relative bg-black'>
        <div className='min-h-[675px] flex flex-col lg:flex-row w-full lg:w-[1180px] h-3/5 sm:mt-[8%] justify-center items-center self-center'>
          <div style={{ animation: timer ? 'idle 1s ease-in-out infinite' : 'fall 1.5s ease-in-out' }} className='mx-auto lg:mx-0 rounded-2xl flex flex-col gap-1 z-1'>
            <h1 className='py-3 px-4 font-bold text-xl bg-[#cb3838] rounded-4xl text-center w-fit text-white'>FULL STACK WEB DEVELOPER</h1>
            <img src='/HEY.svg' className='h-fit w-4/10 my-1' />
            <h1 className='text-2xl lg:text-5xl font-bold text-white whitespace-nowrap'>I'M VLADYSLAV KUTUZOV</h1>
            <h1 className='text-2xl lg:text-5xl font-bold text-white whitespace-nowrap'>I BUILD FRIENDLY WEB EXPERIENCES</h1>
            <div className='flex flex-row gap-5 lg:gap-10 mt-2 lg:mt-6'>
              <div className='size-15 bg-[#cb3838] rounded-full' />
              <div className='size-15 bg-[#cb3838] rounded-full' />
              <div className='size-15 bg-[#cb3838] rounded-full' />
            </div>
          </div>
          <img style={{ animation: timer ? 'evil 1s ease-in-out infinite' : 'appearence 1.5s ease-in-out forwards' }} src='/demon.svg' className='z-1 size-80 mx-auto lg:mx-0 translate-x-1/10 lg:size-100 xl:size-130' />
        </div>
        <Fire color='rgb(150, 25, 25' amount={50} />
        <div className='w-full -mb-140 mt-auto z-0'>
          <NewFlame />
        </div>
        <div className='w-full -mb-100 mt-auto z-3'>
          <NewFlameFront />
        </div>
      </div>
      {/* About section */}
      <div className='h-[5vh]' />
      <motion.div
        initial={{ opacity: 0, scale: .9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className='w-fit self-center mx-auto bg-black text-white text-2xl px-15 py-3 rounded-4xl font-bold z-10'>👋</motion.div>
      <motion.h1
        initial={{ opacity: 0, scale: .9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className='w-fit text-white text-4xl font-bold mx-auto text-shadow-md z-10 mt-5'>ABOUT ME</motion.h1>
      <motion.p
        initial={{ opacity: 0, scale: .9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className='w-fit text-white text-2xl font-bold text-shadow-md z-10 mx-auto my-40 px-3 lg:px-0'>
        Full Stack developer, ex-Snapchat, artist and project manager.<br />
        I have 7 years of experience in the biggest American company like Snapchat as a manager and an artist.<br />
        I have strong project management and team communication.<br />
        I was in charge of the most urgent task in my team.<br />
        During working in Snap I was fully involved in a working process and<br />
        was likely to do action with engen “lensStudio” with javaScript and some design parts.
      </motion.p>
      {/* Works section */}
      <motion.div
        initial={{ opacity: 0, scale: .9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className='w-fit self-center mt-[15svh] mx-auto bg-black text-white text-2xl px-15 py-3 rounded-4xl font-bold z-10'>MY WORK</motion.div>
      <motion.h1
        initial={{ opacity: 0, scale: .9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className='w-fit text-white text-4xl font-bold mx-auto text-shadow-md z-10 mt-5'>PROJECTS</motion.h1>
      <motion.div
        initial={{ opacity: 0, scale: .9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className='h-[50svh] flex flex-col w-screen sm:max-w-[920px] sm:flex-row text-red-800 items-center justify-center self-center gap-20 mt-20 sm:mt-10 z-19'>
        <div
          style={{ scale: hoverMob1 ? 1.7 : '', zIndex: hoverMob1 ? 11 : 10 }}
          onMouseEnter={() => sizeUpOne()}
          onMouseLeave={() => sizeUpOne()}
          className='text-center sm:w-4/10 size-fit z-10 relative lg:hover:scale-140 duration-300 drop-shadow-[0px_10px_10px_rgba(0,0,0,0.5)]'>
          <div
            style={{ visibility: hover1 || hoverMob1 ? 'visible' : 'hidden', opacity: hover1 ? 1 : 0 }}
            className='text-white gap-1 sm:gap-5 rounded-2xl w-9/10 h-2/3 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/3 flex flex-col duration-300 z-3'>
            <div style={{ animation: hover1 ? 'popUp 2s linear forwards' : '' }} className='size-fit rounded-2xl mx-auto opacity-0 absolute inset-0 top-1/2 -translate-y-1/2'>
              <div className='scale-100 sm:scale-150 left-1/2 top-1/2 -translate-1/2 absolute flex size-20 rounded-full font-bold bg-red-800 text-amber-100 text-center'>
                <p className='m-auto text-2xl whitespace-nowrap -translate-x-2/12'>
                  日本語学習
                </p>
              </div>
            </div>
            <p style={{ animation: hover1 || hoverMob1 ? 'upp 2.2s linear forwards' : '' }} className='text-red-800 text-xs sm:text-xl content-center text-center tracking-wide mt-auto w-[90%] mx-auto'>
              Nihon-Go is a modern Japanese learning web app for practicing Kana, Kanji, and vocabulary with progress tracking.
            </p>
            <div style={{ animation: hover1 || hoverMob1 ? 'upp 2.2s linear forwards' : '' }}
              className='flex flex-row gap-1 sm:gap-2 mx-auto text-xs sm:text-lg'>
              <p className='underline text-orange-400'>React,</p>
              <p className='underline text-orange-400'>TypeScript,</p>
              <p className='underline text-orange-400'>MongoDB,</p>
              <p className='underline text-orange-400'>Express,</p>
              <p className='underline text-orange-400'>JWT</p>
            </div>
            <div className='flex flex-row gap-5 justify-center mb-auto text-xs sm:text-xl whitespace-nowrap'>
              <div style={{ animation: hover1 || hoverMob1 ? 'upp 2.2s linear forwards' : '' }} className='py-2 pl-2 sm:pl-4 pr-2 w-fit bg-red-800 rounded-full mb-auto'>
                <a href='https://nihongo-learning.up.railway.app/' target='blank'
                  className='text-orange-300'>Nihon Go learning</a>
                <img src='/link.svg' className='size-3' />
              </div>
              <div style={{ animation: hover1 || hoverMob1 ? 'upp 2.2s linear forwards' : '' }} className='py-2 pl-2 sm:pl-4 pr-2 w-fit bg-red-800 rounded-full mb-auto'>
                <a href='https://github.com/Keymor/nihon-go-learning' target='blank'
                  className='text-orange-300'>GitHub</a>
                <img src='/link.svg' className='size-3' />
              </div>
            </div>
          </div>
          <img src='/devil.svg' className=' relative mx-auto sm:mx-0 sm:size-full z-1' />
          <img style={{ visibility: hover1 || hoverMob1 ? 'visible' : 'hidden' }} src='/eyes.svg' className='w-4/10 absolute top-[20%] left-1/2 -translate-x-1/2 blink delay-300 z-2' />
          <img src='/tail.svg' className='absolute -left-1/20 top-19/20 inset-0 scale-100 sm:scale-180 z-1' />
          <h1 style={{ visibility: hover1 || hoverMob1 ? 'hidden' : 'visible' }} className='w-full absolute inset-0 left-1/2 top-1/2 -translate-x-1/2 text-5xl sm:text-7xl font-bold whitespace-nowrap z-2'>PROJECT 1</h1>
        </div>
        <div
          style={{ scale: hoverMob2 ? 1.7 : '', zIndex: hoverMob2 ? 11 : 10 }}
          onMouseEnter={() => sizeUpTwo()}
          onMouseLeave={() => sizeUpTwo()}
          className='text-center sm:w-4/10 size-fit z-10 relative lg:hover:scale-140 duration-300 drop-shadow-[0px_10px_10px_rgba(0,0,0,0.5)]'>
          <div
            style={{ visibility: hover2 || hoverMob2 ? 'visible' : 'hidden', opacity: hover2 ? 1 : 0 }}
            className='text-white gap-1 sm:gap-5 rounded-2xl w-9/10 h-2/3 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/3 flex flex-col duration-300 z-3'>
            <div style={{ animation: hover2 ? 'popUp 2s linear forwards' : '' }} className='size-fit rounded-2xl mx-auto opacity-0 absolute inset-0 top-1/2 -translate-y-1/2'>
              <img src='/alexLogo.svg' className='size-110'/>
            </div>
            <p style={{ animation: hover2 || hoverMob2 ? 'upp 2.2s linear forwards' : '' }} className='text-red-800 text-xs sm:text-xl content-center text-center tracking-wide mt-auto w-[90%] mx-auto'>
              Alex Petrov’s portfolio is a showcase. It features a responsive landing page. Email friendly API integration.
            </p>
            <div style={{ animation: hover2 || hoverMob2 ? 'upp 2.2s linear forwards' : '' }}
              className='flex flex-row gap-1 sm:gap-2 mx-auto text-xs sm:text-lg'>
              <p className='underline text-orange-400'>React,</p>
              <p className='underline text-orange-400'>TypeScript,</p>
              <p className='underline text-orange-400'>Motion,</p>
              <p className='underline text-orange-400'>Vercel</p>
            </div>
            <div className='flex flex-row gap-5 justify-center mb-auto text-xs sm:text-xl whitespace-nowrap'>
              <div style={{ animation: hover2 || hoverMob2 ? 'upp 2.2s linear forwards' : '' }} className='py-2 pl-2 sm:pl-4 pr-2 w-fit bg-red-800 rounded-full mb-auto'>
                <a href='https://alexpetrov.vercel.app/' target='blank'
                  className='text-orange-300'>Artist Portfolio</a>
                <img src='/link.svg' className='size-3' />
              </div>
              <div style={{ animation: hover2 || hoverMob2 ? 'upp 2.2s linear forwards' : '' }} className='py-2 pl-2 sm:pl-4 pr-2 w-fit bg-red-800 rounded-full mb-auto'>
                <a href='https://github.com/Keymor/3D-portfolio' target='blank'
                  className='text-orange-300'>GitHub</a>
                <img src='/link.svg' className='size-3' />
              </div>
            </div>
          </div>
          <img src='/devil.svg' className=' relative mx-auto sm:mx-0 sm:size-full z-1' />
          <img style={{ visibility: hover2 || hoverMob2 ? 'visible' : 'hidden' }} src='/eyes.svg' className='w-4/10 absolute top-[20%] left-1/2 -translate-x-1/2 blink delay-300 z-2' />
          <img src='/tail.svg' className='absolute left-12/20 top-19/20 inset-0 scale-100 sm:scale-180 -scale-x-100 sm:-scale-x-180 rotate-50 z-0' />
          <h1 style={{ visibility: hover2 || hoverMob2 ? 'hidden' : 'visible' }} className='w-full absolute inset-0 left-1/2 top-1/2 -translate-x-1/2 text-5xl sm:text-7xl font-bold whitespace-nowrap z-2'>PROJECT 2</h1>
        </div>
      </motion.div>
      <Skills />
      <Contact />
    </div>
  )
}

export default App

//fire in 16:9