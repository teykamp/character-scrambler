import { useState } from 'react'
import './App.css'
import UserInput from './components/UserInput.tsx'
import ConverterOutput from './components/ConverterOutput.tsx'


function App() {
  const [textToEncode, setTextToEncode] = useState<string>('')
  
  return (
    <div style={{
      display: 'flex',
      gap: '5rem',
    }}>
      <UserInput 
        setTextToEncode={setTextToEncode}
      />
      <ConverterOutput 
        textToEncode={textToEncode}
      />
    </div>
  )
}

export default App