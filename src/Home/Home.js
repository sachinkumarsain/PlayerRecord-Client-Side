import React, { useState } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import "./Home.css"

function Home() {
  const nevigate = useNavigate();
  const [input, setInput] = useState("")
  const [playerData, setPlayerData] = useState([])

  function handleAadharNum(e) {
      setPlayerData("")
    e.preventDefault()
    axios.post('http://localhost:8080/home', { input })
      .then((result) => {
        if(result.status===200){
          console.log(result.data);
          setPlayerData(result.data)
        }
        else if(result.status===202){
          alert(result.data)
        }
       
      });

  }

  function handleClick(){
  nevigate("/certificate")
  }

  return (
    <>
      <div className='home'>
        <form onSubmit={handleAadharNum}>
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder='enter Aadhar number'
          />
          <button type='submit'>Search</button>
        </form>
        <div className='playerData'>
          {   
            (Object.keys(playerData).length !== 0)
              ? <ul>
                <li className='left'>serial Number</li>
                <li className='right'>{playerData.serialNum}</li>
                <li className='left'>Player Name</li>
                <li className='right'>{playerData.playerName}</li>
                <li className='left'>Aadhar Number</li>
                <li className='right'>{playerData.aadharNo}</li>
                <li className='left'>Game</li>
                <li className='right'>{playerData.game}</li>
                {/* <li className='left'>Age Group</li>
                <li className='right'>{playerData.ageGroup }</li> */}
                <li className='left'>position</li>
                <li className='right'>{playerData.position}</li>
                <li className='left'>State</li>
                <li className='right'>{playerData.state}</li>
                <li className='left'>Tournament Name</li>
                <li className='right'>{playerData.tournamentName}</li>
                <li className='left'>Organized At</li>
                <li className='right'>{playerData.organizedAt}</li>
                <li className='left'>Venue</li>
                <li className='right'>{playerData.venue}</li>
                <li className='left'>Action</li>
                <li className='right'>{playerData.action}</li>

                <button onClick={handleClick}>Download</button>
              </ul>
              : <h1>No Aadhar Match</h1>

          }

        </div>
      </div>
    </>
  )
}

export default Home