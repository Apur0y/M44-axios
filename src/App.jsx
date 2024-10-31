
import './App.css'
import LineChart from './components/LineChart/LineChart'
import Navbar from './components/Navbar'

function App() {


  return (
    <>

<Navbar></Navbar>
    
      <h1 className='text-2xl font-black bg-green-400'>Vite + React</h1>
       {/* <DaisyUi></DaisyUi> */}
       
       <LineChart></LineChart>


    </>
  )
}

export default App
