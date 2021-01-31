import emailIco from './images/email-ico.png';
import facebookIco from './images/facebook-ico.png';
import twitterIco from './images/twitter-ico.png';
import lgoIco from './images/lgo-ico.png';
import { ShareLink, ShareBox, ActivityFeed } from './components';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="App-main">
        <div className="share-container">
          <h1 className="share-title">We love our super-fans!</h1>
          <div className="share-link-text">Your unique sharing link</div>
          <div className="share-subcontainer">
            <div className="share-left-box">
              <ShareLink />
              <div className="share-welcome-text">
                Welcome back, you've referred friends!<br/>
                Keep going for more rewards.
              </div>
              <ActivityFeed />
            </div>
            <div className="share-right-box">
              <div className="share-box-group">
                <div className="share-box-tab email-tab active-tab">
                  <img src={emailIco} width="36" alt="email"></img>
                </div>
                <div className="share-box-tab facebook-tab">
                  <img src={facebookIco} width="29" alt="facebook"></img>
                </div>
                <div className="share-box-tab twitter-tab">
                  <img src={twitterIco} width="28" alt="twitter"></img>
                </div>
                <div className="share-box-tab lgo-tab">
                  <img src={lgoIco} width="36" alt="lgo"></img>
                </div>
              </div>
              <ShareBox />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
