import React from 'react'

interface Props {
  textToEncode: string
}

const ConverterOutput: React.FC<Props> = ({ textToEncode }) => {
  return (
    <>
      <textarea
        value={textToEncode}
        style={{
          resize: 'none',
          padding: '10px',
          marginBottom: '58px',
        }}
        cols={80}
        placeholder="Output Text"
        readOnly
      ></textarea>
    </>
  )
}

export default ConverterOutput