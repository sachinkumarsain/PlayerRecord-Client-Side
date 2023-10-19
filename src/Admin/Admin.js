import React from 'react'
import { useForm } from "react-hook-form";
import axios from "axios"

function Admin() {

  const {
    register,
    handleSubmit,
    // formState: { errors },
  } = useForm();

  function onSubmit(data) {
    console.log(data)
    axios.post("http://localhost:8080/formdata", { data })
      .then((result) => {
        console.log(result.data)
      })


  }
  return (
    <div>
      <div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <label>Serial No</label>
          <input
            type='text'
            placeholder='Enter Serial No.'
            value=""
            {...register("", { required: true })}
          ></input>

          <label>Player Name</label>
          <input
            type='text'
            placeholder='Enter Player Name'
            value=""
            {...register("", { required: true })}
          ></input>

          <label>Aadhar No</label>
          <input
            type='text'
            placeholder='Enter Aadhar No.'
            value=""
            {...register("", { required: true })}
          ></input>

          <label>Game</label>
          <input

            type='text'
            placeholder='Enter Game.'
            value=""
            {...register("", { required: true })}
          ></input>

          <label>Age Group</label>
          <input
            type='text'
            placeholder='Enter Age Group.'
            value=""
            {...register("", { required: true })}
          ></input>

          <label>Position</label>
          <input
            type='text'
            placeholder='Enter Position.'
            value=""
            {...register("", { required: true })}
          ></input>

          <label>State</label>
          <input
            type='text'
            placeholder='Enter State Name.'
            value=""
            {...register("", { required: true })}
          ></input>

          <label>Tournament Name</label>
          <input
            type='text'
            placeholder='Enter Tournament Name.'
            value=""
            {...register("", { required: true })}
          ></input>

          <label>Organized At</label>
          <input
            type='text'
            placeholder='Enter Organized At.'
            value=""
            {...register("", { required: true })}
          >


          </input>

          <label>Venue</label>
          <input
            type='text'
            placeholder='Enter Venue.'
            value=""
            {...register("", { required: true })}
          ></input>

          <label>Action</label>
          <input
            type='text'
            placeholder='Enter Action.'
            value=""
            {...register("", { required: true })}
          ></input>
          <button type='submit'>Download</button>
        </form>
      </div>
    </div>
  )
}

export default Admin