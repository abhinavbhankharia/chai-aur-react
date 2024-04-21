
import { useCallback, useState } from 'react';

function App() {

  const [lenght, setLenght] =useState(8) //used for password length with default value 8
  const [numberAllowed, setNumberAllowed] =useState(false) //used for inlcuding number
  const [charAllowed, setcharAllowed] =useState(false) //used for inlcuding number
  const [password, setPassword] =useState("") //used for displaying password in text area

  const passwordGenerator = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if (numberAllowed) str += "0123456789"
    if (charAllowed) str += "!@#$%^&*()_+"

    for( let i=1; i<lenght; i++){
      let char = Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(char)
    
    }

    setPassword(pass)

  } , [lenght, numberAllowed, charAllowed, setPassword] )


  return (
    <>
    <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8
     bg-gray-700  text-orange-500'><h1 className='text-white text-center my-3'>Password Generator</h1>
    <div className='flex shadow rounded-lg overflow-hidden mb-4'>
      <input type="text"
             value={password} 
             className='outline-none w-full py-1 px-3' 
             placeholder='password' 
             readOnly
             ></input>
      <button
      className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'
      >Copy</button>
    </div>
    <div className='flex text-sm gap-x-2'>
      <div className='flex items-center gap-x-1'>
        <input 
        type="range"
        min={8}
        max={100}
        value={lenght}
        className='cursor-pointer'
        onChange={(e) => {setLenght(e.target.value)}}
        />
        <label>Lenght: {lenght}</label>
      </div>
    </div>
    </div>

    </>
  );
}

export default App;
