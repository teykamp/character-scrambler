import React from 'react'

interface Props {
  dataToConvert: string
}

const ConverterOutput: React.FC<Props> = ({ dataToConvert }) => {
  return (
    <>
      {dataToConvert}
    </>
  )
}

export default ConverterOutput