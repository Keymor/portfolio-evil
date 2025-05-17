import './App.css'
import Flame from './components/flame'
import Fire from './components/particless'

function App() {



  return (
    <div className='flex w-screen h-screen'>
      <div className='flex max-w-[1580px] overflow-x-clip mb-2 mt-auto mx-auto'>
        <div className=''>
          <Flame />
        </div>
        <Fire />
      </div>
    </div>
  )
}

export default App
