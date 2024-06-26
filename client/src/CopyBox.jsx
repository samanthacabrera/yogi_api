import React, { useRef } from 'react';

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
    <div className="p-4  rounded-xl shadow-md space-y-4">
      <div className="font-medium" ref={textRef}>
        {content}
      </div>
      <button onClick={copyToClipboard} className="bg-slate-100 hover:bg-slate-200 p-2 rounded">
        Copy
      </button>
    </div>
  );
};

export default CopyBox;
