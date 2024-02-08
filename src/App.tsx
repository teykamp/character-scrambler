import { useState } from 'react'
import './App.css'
import UserInput from './components/UserInput.tsx'
import ConverterOutput from './components/ConverterOutput.tsx'


function App() {
  const [userInputValue, setUserInputValue] = useState<string>('')
  
  return (
    <>
      <UserInput 
        userInputValue={userInputValue}
        setUserInputValue={setUserInputValue}
      />
      <ConverterOutput 
        dataToConvert={userInputValue}
      />
    </>
  )
}

export default App