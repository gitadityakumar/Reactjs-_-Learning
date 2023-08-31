import { useState,useCallback,useEffect,useRef } from 'react'

import './App.css'

function App() {
   const [length,setLengtth] = useState(8)
   const [numAllowed,setnumAllowed] = useState(false)
   const [charAllowed,setCharAllowed] = useState(false)
   const [passwd,setPasswd] = useState(' ')

   //useRef Hook
   const PasswordRef = useRef(null) 

   const passwdGeneraor = useCallback(()=>{
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if (numAllowed) str += "0123456789"
    if (charAllowed) str += "!@#$%^&*{}[]|/-_+=`~;:'<>?"

    for (let i=1; i<=length; i++){
      let char = Math.floor(Math.random()*str.length+1)
      pass += str.charAt(char)
    }
    setPasswd(pass)

   },[length,numAllowed,charAllowed,setPasswd])

   const cptoclip = useCallback(()=>{
    PasswordRef.current?.select();
    PasswordRef.current?.setSelectionRange(0,100);
    window.navigator.clipboard.writeText(passwd)
  },[passwd])

   useEffect(()=>{passwdGeneraor()},[length,numAllowed,charAllowed,passwdGeneraor,])
  return (
    <>
    <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-4 my-8 text-orange-500 bg-gray-700'>
      <h1 className='text-white text-2xl text-center my-2'>Password Generator</h1>
      <div className='flex shadow rounded-lg overflow-hidden mb-4'>
      <input 
      type="text"
      value={passwd}
      className='outline-none w-full py-1 px-3'
      placeholder='password'
      readOnly
      ref={PasswordRef}
      />
      <button className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'
      onClick={cptoclip}
      >copy</button>
      </div>
      <div className='flex text-sm gap-x-2'>
        <div className='flex items-center gap-x-1'>
          <input 
          type="range" 
          min={8}
          max={100}
          value={length}
          className='cursor-pointer'
          onChange={(e)=>{setLengtth(e.target.value)}}
           />
           <label >Label: {length}</label>
        </div>
        <div className='flex items-center gap-x-1'>
          <input 
          type="checkbox" 
           id="numberinput"
           defaultChecked={numAllowed}
           onChange={()=>{setnumAllowed((prev)=>!prev);
          }}
            />
            <label htmlFor="numberInput">Numbers</label>
        </div>
        <div className='flex items-center gap-x-1'>
          <input 
          type="checkbox" 
           id="numberinput"
           defaultChecked={charAllowed}
           onChange={()=>{setCharAllowed((prev)=>!prev);
          }}
            />
            <label htmlFor="numberInput">charactor</label>
        </div>
      </div>
      <div className="p-6 bg-gray-700 text-slate-400 hover:text-sky-400 rounded-lg shadow-md">
    <h2 className="text-xl font-semibold mb-4">Guidelines for Secure Password </h2>
    <ol className="list-decimal list-inside space-y-2">
        <li className="font-medium">Generate passwords of 12-16 characters for increased complexity.</li>
        <li className="font-medium">Include uppercase, lowercase, numbers, and symbols.</li>
        <li className="font-medium">Use a secure random generator for truly random passwords.</li>
        <li className="font-medium">Do not use names, birthdays, or common words.</li>
        <li className="font-medium">Avoid simple patterns like  &ldquo;123456&rdquo; or &ldquo;qwerty&rdquo;.</li>
    </ol>
</div>

    </div>
   
  
    </>
  )
}

export default App
