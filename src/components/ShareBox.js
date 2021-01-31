import React, { useState } from 'react';

function ShareBox() {
  const [state , setState] = useState({
    email: "",
    message: ""
  });
  const handleChange = (e) => {
    const {id , value} = e.target
    setState(prevState => ({
      ...prevState,
      [id] : value
    }))
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    if(state.email === 'james@buyapowa.com') {
      // refer yourself
    }
  };
  return (
    <div className="share-box-container">
      <div className="share-box-inner">
        <form onSubmit={handleSubmit}>
          <div>From <b>james@buyapowa.com</b></div>
          <div className="share-box-email">
            <input id="email" type="email" placeholder="Email address" value={state.email} onChange={handleChange} required/>
          </div>
          <div className="share-box-message">
            <textarea id="message" type="text" rows="3" value={state.message} onChange={handleChange} required>
            </textarea>
          </div>
          <button type="submit" className="send-btn">Send email</button>
        </form>
      </div>
    </div>
  );
}

export default ShareBox;
