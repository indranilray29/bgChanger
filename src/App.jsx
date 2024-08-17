import { useState } from 'react'


function App() {
  const [color, setColor] = useState("lightblue")

  return (
    <div className='w-full h-screen duration-200' style={{backgroundColor: color}}>
      <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'>
        <div className="flex flex-wrap justify-center gap-3 shadow-lg px-3 py-2 bg-white rounded-2xl">
          <button onClick={() => setColor("red")} className='outline-none px-4 py-1 rounded-full text-white shadow-lg border border-black border-solid' style={{backgroundColor: "red"}}>
            Red
          </button>
          <button onClick={() => setColor("green")} className='outline-none px-4 py-1 rounded-full text-white shadow-lg border border-black border-solid' style={{backgroundColor: "green"}}>
            Green
          </button>
          <button onClick={() => setColor("white")} className='outline-none px-4 py-1 rounded-full text-black shadow-lg border border-black border-solid' style={{backgroundColor: "white"}}>
            White
          </button>
          <button onClick={() => setColor("yellow")} className='outline-none px-4 py-1 rounded-full text-black shadow-lg border border-black border-solid' style={{backgroundColor: "yellow"}}>
            Yellow
          </button>
          <button onClick={() => setColor("pink")} className='outline-none px-4 py-1 rounded-full text-black shadow-lg border border-black border-solid' style={{backgroundColor: "pink"}}>
            Pink
          </button>
          <button onClick={() => setColor("purple")} className='outline-none px-4 py-1 rounded-full text-white shadow-lg border border-black border-solid' style={{backgroundColor: "purple"}}>
            Purple
          </button>
          <button onClick={() => setColor("orange")} className='outline-none px-4 py-1 rounded-full text-white shadow-lg border border-black border-solid' style={{backgroundColor: "orange"}}>
            Orange
          </button>
          <button onClick={() => setColor("blue")} className='outline-none px-4 py-1 rounded-full text-white shadow-lg border border-black border-solid' style={{backgroundColor: "blue"}}>
            Blue
          </button>
          <button onClick={() => setColor("skyblue")} className='outline-none px-4 py-1 rounded-full text-black shadow-lg border border-black border-solid' style={{backgroundColor: "skyblue"}}>
            Sky
          </button>
          <button onClick={() => setColor("lightgreen")} className='outline-none px-4 py-1 rounded-full text-black shadow-lg border border-black border-solid' style={{backgroundColor: "lightgreen"}}>
            Light Green
          </button>
          <button onClick={() => setColor("black")} className='outline-none px-4 py-1 rounded-full text-white shadow-lg border border-white border-solid' style={{backgroundColor: "black"}}>
            Black
          </button>
        </div>
      </div>
    </div>
  )
}

export default App
