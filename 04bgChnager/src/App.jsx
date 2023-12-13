import { useState } from "react"

function App() {
  const [color,setColor] = useState('grey')
  return (
    <div className="w-wll h-screen duration-200" style={{background:color}}>
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-4 shadow-lg bg-white p-3 rounded-md">
          <button onClick={()=>setColor('#FF474C')} className="outline-none px-4 py-1 rounded-full text-black shadow-lg bg-[#FF474C]">Red</button>
          <button onClick={()=>setColor('olive')} className="bg-[olive] outline-none px-4 py-1 rounded-full text-black shadow-lg">Olive</button>
          <button onClick={()=>setColor('	#FC46AA')} className="bg-[#FC46AA] outline-none px-4 py-1 rounded-full text-black shadow-lg">Pink</button>
          <button onClick={()=>setColor('#CF9FFF')} className="bg-[#CF9FFF] outline-none px-4 py-1 rounded-full text-black shadow-lg">Violet</button>
          <button onClick={()=>setColor('orange')} className="bg-[orange] outline-none px-4 py-1 rounded-full text-black shadow-lg">Orange</button>
        </div>
      </div>
    </div>
  )
}

export default App
