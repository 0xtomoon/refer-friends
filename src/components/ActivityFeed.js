import React from 'react';
import grinning from '../images/grinning-emoji.png';
import scream from '../images/scream-emoji.png';
import flushed from '../images/flushed-emoji.png';

function ActivityFeed() {
  return (
    <div className="activity-feed">
      <table className="activity-feed-table">
        <tbody>
          <tr>
            <th colSpan="2">Activity feed</th>
          </tr>
          <tr>
            <td><img src={grinning} width="25" alt="grinning"></img></td>
            <td>Your friend <b>Mikey</b> earned you a reward!</td>
          </tr>
          <tr>
            <td><img src={scream} width="25" alt="scream"></img></td>
            <td>A friend visited your link, but didn't earn you a reward!</td>
          </tr>
          <tr>
            <td><img src={flushed} width="25" alt="flushed"></img></td>
            <td>You tried to refer yourself!<br/>Whoops!</td>
          </tr>
          <tr className="activity-total">
            <td colSpan="2">Total rewards <b>1</b></td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default ActivityFeed;
