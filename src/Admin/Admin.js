import React from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import "./Admin.css"

function Admin() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  function onSubmit(data) {
    console.log(data);
    
  // e.preventDefault()
    axios.post('http://localhost:8080/admin', {data}) 
      .then((result) => {
        console.log(result.data);
      });
  }

  return (
    <div className='wapper'>
      
        <form onSubmit={handleSubmit(onSubmit)}>

          <label>Player Name</label>
          <input
            type="text"
            placeholder="Enter Player Name"
            {...register('playerName', { required: true })}
          />
          {errors.playerName && <p role="alert">Player Name is required</p>}

          <label>Aadhar No</label>
          <input
            type="text"
            placeholder="Enter Aadhar No."
            {...register('aadharNo', { required: true })}
          />
          {errors.aadharNo && <p role="alert">Aadhar No is required</p>}

          <label>Game</label>
          <select
                    {...register('game', { required: true })}
                    >
                        <option>Select Game</option>
                        <option>Kabaddi</option>
                        <option>Hockey</option>
                        <option>Badminton</option>
                        <option>Cricket</option>
                    </select>

         
          {errors.game && <p role="alert">Game is required</p>}

          <label>Age Group</label>
          <select   placeholder="Enter Age Group."
            {...register('ageGroup', { required: true })}>
                    <option>Select Age Group</option>
                    <option>Juinor</option>
                    <option>Senior</option>
                    </select>

         
          {errors.ageGroup && <p role="alert">Age Group is required</p>}

          <label>Position</label>
          <select   placeholder="Enter Position."
            {...register('position', { required: true })}  >
                    <option>Select Position</option>
                        <option>Qualified</option>
                        <option> 1ND Sliver</option>
                        <option>2ND Sliver</option>
                        <option>3ND Sliver</option>
                    </select>

          {errors.position && <p role="alert">Position is required</p>}

          <label>State</label>
          <select placeholder="Enter State Name."
            {...register('state', { required: true })}>
                    <option>Select State</option>
                        <option>Rajasthan</option>
                        <option> Punjab</option>
                        <option>Utter pradesh</option>
                        <option>Obisha</option>
                    </select>
          
          {errors.state && <p role="alert">State is required</p>}

          <label>Tournament Name</label>
          <input
            type="text"
            placeholder="Enter Tournament Name."
            {...register('tournamentName', { required: true })}
          />
          {errors.tournamentName && <p role="alert">Tournament Name is required</p>}

          <label>Organized At</label>
          <input
            type="text"
            placeholder="Enter Organized At."
            {...register('organizedAt', { required: true })}
          />
          {errors.organizedAt && <p role="alert">Organized At is required</p>}

          <label>Venue</label>
          <input
            type="text"
            placeholder="Enter Venue."
            {...register('venue', { required: true })}
          />
          {errors.venue && <p role="alert">Venue is required</p>}

          <label>Action</label>
          <input
            type="text"
            placeholder="Enter Action."
            {...register('action', { required: true })}
          />
          {errors.action && <p role="alert">Action is required</p>}

          <button type="submit">Submit</button>
        </form>
      </div>
  );
}

export default Admin;
