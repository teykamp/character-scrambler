import React, { useState } from 'react'

interface Props {
  setTextToEncode: (value: string) => void
}

const UserInput: React.FC<Props> = ({ setTextToEncode }) => {
const [userInput, setUserInput] = useState('')

  const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setUserInput(e.target.value)
  }

  const handleEncodeClick = () => {
    setTextToEncode(userInput)
  }

  const handleClearClick = () => {
    setUserInput('')
  }

  return (
    <div>
      <div style={{
        display: 'block',
      }}>
        <textarea
          onChange={handleInputChange}
          value={userInput}
          style={{
            resize: 'none',
            padding: '10px',
          }}
          rows={45} 
          cols={80}
          placeholder="Enter Text"
        ></textarea>
      </div>
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        gap: '10px',
      }}>
        <button 
          onClick={handleClearClick}
          style={{
            marginTop: '10px',
          }}
        >Clear</button>
        <button 
          onClick={handleEncodeClick}
          style={{
            marginTop: '10px',
          }}
        >Encode</button>
      </div>
    </div>
  )
}

export default UserInput