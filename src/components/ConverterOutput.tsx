import React, { useState } from 'react'
import { variants } from '../data/data'
import type { Variants } from '../data/data'

interface Props {
  textToEncode: string
}

const ConverterOutput: React.FC<Props> = ({ textToEncode }) => {

  const handleCopyEncodedText = () => {
    if (encodedText) {
      try {
        navigator.clipboard.writeText(encodedText)
        console.log("Text copied to clipboard")
      } catch (error) {
        console.error("Failed to copy text to clipboard:", error)
      }
    }
  }

  const encodeText = (textToEncode: string, encodingVariants: Variants) => {
    return textToEncode
      .split('')
      .map(char => {
        const charVariants = encodingVariants[char]
        if (charVariants && charVariants.length > 0) {
          const randomIndex = Math.floor(Math.random() * charVariants.length)
          return charVariants[randomIndex]
        } else {
          return char
        }
      })
      .join('')
  }

  const encodedText = encodeText(textToEncode, variants)

  return (
    <div style={{
      display: 'block',
    }}>
      <textarea
        value={encodedText}
        style={{
          resize: 'none',
          padding: '10px',
          fontSize: '20px',
        }}
        placeholder="Output Text"
        readOnly
        rows={25} 
        cols={50}
      ></textarea>
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        gap: '10px',
      }}>
        <button 
          onClick={handleCopyEncodedText}
          style={{
            marginTop: '10px',
          }}
        >Copy</button>
      </div>
    </div>
  )
}

export default ConverterOutput