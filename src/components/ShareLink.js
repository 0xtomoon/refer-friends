import React, { useState, useRef } from 'react';
import clipboard from '../images/clipboard.png';

function ShareLink() {
  const [tooltipText, setTooltipText] = useState('Copy share link');
  const shareLinkRef = useRef(null);
  const clipBtnRef = useRef(null);

  const handleClick = () => {
    shareLinkRef.current.select();
    document.execCommand('copy');
    clipBtnRef.current.focus();
    setTooltipText('Copied!');
    setTimeout(()=>{
      setTooltipText('Copy share link');
    }, 3000);
  };
  return (
    <div className="share-link-group">
      <input className="share-link-input" ref={shareLinkRef} value="http://the.things/abc" readOnly />
      <button className="share-link-clip" ref={clipBtnRef} onClick={handleClick}>
        <img src={clipboard} width="25" alt="1"></img>
        <span className="tooltiptext">{tooltipText}</span>
      </button>
    </div>
  );
}

export default ShareLink;
