import { useState } from "react";

function App() {

let [counter, setCounter ]= useState(15)
const addValue = ()=>{
  if(counter<20){
    setCounter(counter+1)
  }
  
}
const removeValue =()=>{
  if(counter>0){
    setCounter(counter-1)
  }

}
const setZero = ()=>{
  setCounter(counter=0)
}



  return (
    <div className="h-screen w-screen flex items-center justify-center bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500  ">
    <div className=" bg-pink-300 rounded-2xl shadow-xl p-10 flex flex-col items-center gap-6">
    
    <h1 className="text-3xl font-bold text-gray-800">Chai Aur React</h1>
       <h2 className="text-xl font-semibold text-gray-600">Counter Value: {counter}</h2>

      <div className="flex gap-4">
      <button className="px-5 py-2 bg-indigo-600 text-white rounded-lg shadow-md hover:bg-indigo-900 transition" onClick={addValue}>Add Value</button>

      <button onClick={setZero} className="px-5 py-2 bg-indigo-600 text-white rounded-lg shadow-md hover:bg-indigo-900 transition">Set Zero</button>
       <button className="px-5 py-2 bg-indigo-600 text-white rounded-lg shadow-md hover:bg-indigo-900 transition" onClick={removeValue}>Remove Value</button>
      </div>
    
      
    </div>
    
       </div>
       

  )
}

export default App
