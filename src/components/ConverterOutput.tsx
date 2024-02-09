import React, { useState } from 'react'
import { variants } from '../data/data'
import type { Variants } from '../data/data'

interface Props {
  textToEncode: string
}

type ClipboardState = boolean | undefined

const ConverterOutput: React.FC<Props> = ({ textToEncode }) => {

  const [copyToClipboardSuccess, setCopyToClipboardSuccess] = useState<ClipboardState>(undefined)

  const handleCopyEncodedText = () => {
    if (encodedText) {
      try {
        navigator.clipboard.writeText(encodedText)
        console.log("Text copied to clipboard")
        setCopyToClipboardSuccess(true)
      } catch (error) {
        console.error("Failed to copy text to clipboard:", error)
        setCopyToClipboardSuccess(false)
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
      position: 'relative',
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
      <div style={{
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
      }}>
        {typeof(copyToClipboardSuccess) !== 'undefined' && 
        <Banner 
          copyToClipboardSuccess={copyToClipboardSuccess}
          setCopyToClipboardSuccess={setCopyToClipboardSuccess}
        />}
      </div>  
    </div>
  )
}

type BannerProps = {
  copyToClipboardSuccess: boolean
  setCopyToClipboardSuccess: (value: ClipboardState) => void
}

const Banner: React.FC<BannerProps> = ({ copyToClipboardSuccess, setCopyToClipboardSuccess }) => {

  const handleCloseClick = () => setCopyToClipboardSuccess(undefined)

  return (
    <div style={{
      marginTop: '30px',
      position: 'absolute',
    }}>
      <div
        style={{
          background: copyToClipboardSuccess ? 'RGBA(6, 236, 152, .8)' : 'RGBA(237, 7, 91, .8)',
          width: 'auto',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: '10px',
          fontWeight: '500',
        }}
      >
        <p style={{
          paddingLeft: '40px',
        }}>
          { copyToClipboardSuccess ? 'Copied to Clipboard' : 'Error Copying to Clipboard' } 
        </p>
        <p
          onClick={handleCloseClick}
          style={{
            fontWeight: '600',
            height: '1.5em',
            aspectRatio: 1,
            background: 'RGBA(256, 256, 256, 0.2)',
            position: 'relative',
            display: 'flex',
            alignContent: 'center',
            justifyContent: 'center',
            marginLeft: '30px',
            borderRadius: '50%',
            cursor: 'pointer',
            marginRight: '10px',
          }}
        >X</p>
      </div>
    </div>
  )
}

export default ConverterOutput