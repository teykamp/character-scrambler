import { useState } from 'react'
import './App.css'
import UserInput from './components/UserInput.tsx'
import ConverterOutput from './components/ConverterOutput.tsx'


function App() {
  const [textToEncode, setTextToEncode] = useState<string>('')

  // const githubLogoLink = 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ficon-library.com%2Fimages%2Fgithub-icon-white%2Fgithub-icon-white-6.jpg&f=1&nofb=1&ipt=225ecd91ec005863286c4ac60fa6e86c5a1756df5dd36196a1760051fecc6dab&ipo=images'
  const descriptionText = `
    Use this tool to confuse chat filters on common games which might 
    censor what you want to say, even if what you want to say is completely 
    benign. Enter text into the left text box and submit it. The text will
    then be converted to a scrambled unicode version using character 
    lookalikes. Hopefully the text will be readable and uncensored when
    pasted into game chat. Enjoy!
  `

  return (
    <>
      <h2>Convert Text to Scrambled Text.</h2>
      <h5>Hopefully can bypass chat filters...</h5>
      <div style={{
        marginTop: '30px',
        display: 'flex',
        justifyContent: 'center',
        flexWrap: 'wrap',
        gap: '5rem',
      }}>
        <UserInput 
          setTextToEncode={setTextToEncode}
        />
        <ConverterOutput 
          textToEncode={textToEncode}
        />
        <div 
          style={{
            width: '100%',
            display: 'flex',
            justifyContent: 'center',
        }}>
          <div>
            <p
              style={{
                maxWidth: '60em',
                marginTop: '60px',
                textAlign: 'left',
              }}
            >{descriptionText}</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default App