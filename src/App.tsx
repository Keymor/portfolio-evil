import './App.css'
import Flame from './components/flame'
import Fire from './components/particless'
import Header from './components/header'
import { useEffect, useState } from 'react'
import FlameBack from './components/flameBack'

function App() {
  const [timer, setTimer] = useState(false)

  useEffect(() => {
    setTimeout(() => {
      setTimer(true)
    }, 1500)
  }, [])

  return (
    <div className='flex flex-col w-screen h-fit overflow-clip'>
      <Header />
      <div className='flex flex-col w-full h-[100svh] mx-auto relative'>
        <div className='flex flex-col gap-5 sm:gap-0 sm:flex-row w-full sm:w-[1180px] h-3/5 mx-auto mt-[10%] p-[5%]'>
          <img style={{ animation: timer ? 'idle 1s ease-in-out infinite' : 'fall 1.5s ease-in-out' }} src='mainText.png' className='mr-auto z-1' />
          <img style={{ animation: timer ? 'evil 1s ease-in-out infinite' : 'appearence 1.5s ease-in-out forwards' }} src='evil.png' className='ml-auto z-1' />
        </div>
        <Fire />
        <div className='w-full -mb-140 mt-auto scale-x-110 z-0'>
          <FlameBack />
        </div>
        <div className='w-full -mb-100 mt-auto scale-x-110 z-3'>
          <Flame />
        </div>
      </div>
      <div className='w-full h-[50svh] bg-[#efc210]'>
      </div>
    </div>
  )
}

export default App
