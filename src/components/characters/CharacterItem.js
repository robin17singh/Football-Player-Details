import React from 'react'


const CharacterItem = ({ item }) => {
  return (
    <div className='card'>
      <div className='card-inner'>
        <div className='card-front'>
          <img src= {`/player-images/${item.Id}.jpg`}  alt={item.PFName} />
        </div>
        <div className='card-back'>
          <li><h1>{item.PFName}</h1></li>
          <ul>
            <li>
              <strong>Player Name:</strong> {item.PFName}
            </li>
            <li>
              <strong>Skill:</strong> {item.SkillDesc}
            </li>
            <li>
              <strong>Value:</strong> {item.Value}
            </li>
            <li>
              <strong>Up Coming Match:</strong> {item.UpComingMatchesList[0].CCode} Vs {item.UpComingMatchesList[0].VsCCode}
            </li>
            <li>
              <strong>Date:</strong> {item.UpComingMatchesList[0].MDate}
            </li>
            <li><a href={`https://en.wikipedia.org/wiki/${item.PFName}`}>More info</a></li>
          </ul>
          
        </div>
      </div>
    </div>
  )
}

export default CharacterItem
