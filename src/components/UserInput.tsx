import React from 'react'

interface Props {
  userInputValue: string
  setUserInputValue: (value: string) => void
}

const UserInput: React.FC<Props> = ({ userInputValue, setUserInputValue }) => {
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserInputValue(e.target.value)
  }

  return (
    <input
      type="text"
      value={userInputValue}
      onChange={handleInputChange}
    />
  )
}

export default UserInput