import React, { useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCopy } from '@fortawesome/free-solid-svg-icons';

const CopyBox = ({ content }) => {
  const textRef = useRef(null);

  const copyToClipboard = () => {
    if (textRef.current) {
      navigator.clipboard.writeText(textRef.current.textContent)
        .then(() => {
          alert('Text copied to clipboard');
        })
        .catch((err) => {
          console.error('Failed to copy text: ', err);
        });
    }
  };

  return (
    <div className="flex items-center p-2 border border-gray-200 rounded-md shadow-sm bg-white">
      <div className="flex-1 text-gray-700 text-sm" ref={textRef}>
        {content}
      </div>
      <button 
        onClick={copyToClipboard} 
        className="hover:scale-110 duration-300 ease-in-out"
        aria-label="Copy to clipboard"
      >
        <FontAwesomeIcon icon={faCopy} />
      </button>
    </div>
  );
};

export default CopyBox;
