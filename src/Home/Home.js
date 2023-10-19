import React, { useState } from 'react'
import axios from 'axios';
import "../Admin/Admin.css"

function Home() {

const[input , setInput]= useState("")

function handleAadharNum(e){

  e.preventDefault()
  axios.post('http://localhost:8080/home', {input}) 
  .then((result) => {
    console.log(result.data);
  });

}

  return (
    <>
    <div className='home'>
      <form onSubmit={handleAadharNum}>
        <input 
        value={input} 
        onChange={(e)=>setInput(e.target.value)}
        placeholder='enter Aadhar number'
        />
        <button type='submit'>Search</button>
      </form>
      <div className='playerData'>
        
      </div>
    </div>
    </>
  )
}

export default Home