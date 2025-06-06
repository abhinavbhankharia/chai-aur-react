import {useState} from 'react';
import './App.css';

function App() {

  let initialvalue = 15;
  const [counter, setcounter] = useState(initialvalue);

  const addValue = () => 
  {
    if (counter < 20)
      setcounter(counter+1)
    else
     setcounter(counter) 
  }

  const removeValue = () => 
  {
    if (counter<=0)
      setcounter(counter)
    else
     setcounter(counter-1) 
  }

  return (
    <>
    <div className='App'>
      <h1>Counter Using React</h1>
      <h2>Value:</h2>
      <h2>{counter}</h2>
      <button onClick={addValue} >Add Value</button>
      <br/>
      <button onClick={removeValue}>remove Value</button>
    </div>
    </>
  );
}

export default App;
