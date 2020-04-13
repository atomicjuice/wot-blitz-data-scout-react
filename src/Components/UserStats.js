import React from 'react';
import '../Css/UserStatsStyle.css'


const UserStats = ({info, usernickname, addToComparison}) => {



  return (
    <div className='stats'>
      <h1>
        {usernickname}
      </h1>
    
      <h2>wins:{info.wins}</h2>
      
      <h2>accuracy: {info.accuracy} %</h2>
      
      <h2>losses:{info.losses}</h2>
      
      <h2>battles:{info.battles}</h2>
      
      <h2>destroyed:{info.destroyed}</h2>
      
      <h2>won and survived: {info.winAndSurvived}</h2>

      <button className="compare" onClick={addToComparison}>+ Compare another player</button>
      
    </div>
  );
}





export default UserStats;


