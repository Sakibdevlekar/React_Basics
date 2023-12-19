import { useState, useCallback, useEffect, useRef} from 'react'
import './App.css'

function App() {
  const [length, setLength ] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [changeText, setText] = useState('Copy');
  const [color, setColor] = useState('#187bcd');
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState('');
  const passwordRef = useRef(null)
  const generatorPassword = useCallback(() => {
    let pass = '';
    let str = 'ABCDEFGHIJKLmNOPQRSTWXYZabcdefghijklmnopqrstwxyz';

    if (numberAllowed) str += "0123456789";
    if(charAllowed) str += "!@#$%^&*()_+";
    for (let index = 1; index < length; index++) {
      const char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }
    setPassword(pass);
  }, [length, numberAllowed, charAllowed]);
  useEffect(() => {
    generatorPassword()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [length, numberAllowed, charAllowed]);

  const copyPasswordToClipboard = () =>{
    setText('Copied!');
    setColor('#00b300');
    window.navigator.clipboard.writeText(password);
    passwordRef.current?.select();
    setTimeout(()=>{
      setText('copy');
      setColor('#187bcd');
    },2000)
  }
  return (
    <>
    <div className='w-full max-w-md mx-auto rounded-lg px-4 py-3 my-8 bg-gray-800 text-orange-500'>
      <h1 className='text-white text-center my-3'>Password Generator</h1>
      <div className='flex shadow rounded-lg overflow-hidden'>
        <input type="text"
        value={password}
        className='outline-none w-full py-1 px-3'
        placeholder='Password'
        readOnly
        ref={passwordRef}
        />
        <button onClick = {copyPasswordToClipboard}
        className='outline-none  text-white px-3 py-0.5 shrink-0'style={{background:color}}>{changeText}</button>
        
      </div>
      <div className='flex items-center gap-x-2 mt-4'>
        <input type="range"
        min={8}
        max={20}
        value={length}
        onChange={(e) => setLength(e.target.value)}
        name=''
        id=''
        />
        <label htmlFor="length">Length:{length}</label>
        <div className='flex items-center gap-x-2'>
        <input type="checkbox"
        defaultChecked = {numberAllowed}
        onChange={() => setNumberAllowed((prev) => !prev)}
        name=''
        id=''
        />
        <label htmlFor="number">Numbers</label>
      </div>
      <div className='flex items-center gap-x-2'>
        <input type="checkbox"
        defaultChecked = {charAllowed}
        onChange={() => setCharAllowed((prev) => !prev)}
        name=''
        id=''
        />
        <label htmlFor="charInput">Character</label>
      </div>
      </div>
    </div>
    </>
  )
}

export default App
