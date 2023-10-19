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
    // axios
    //   .post('http://localhost:8080/formdata', data) // Removed the unnecessary nested object
    //   .then((result) => {
    //     console.log(result.data);
    //   });
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
          <input
            type="text"
            placeholder="Enter Game."
            {...register('game', { required: true })}
          />
          {errors.game && <p role="alert">Game is required</p>}

          <label>Age Group</label>
          <input
            type="text"
            placeholder="Enter Age Group."
            {...register('ageGroup', { required: true })}
          />
          {errors.ageGroup && <p role="alert">Age Group is required</p>}

          <label>Position</label>
          <input
            type="text"
            placeholder="Enter Position."
            {...register('position', { required: true })}
          />
          {errors.position && <p role="alert">Position is required</p>}

          <label>State</label>
          <input
            type="text"
            placeholder="Enter State Name."
            {...register('state', { required: true })}
          />
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
