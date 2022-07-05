import React from 'react'
import {useForm} from 'react-hook-form'
import {useDispatch} from 'react-redux'
import {setBasicInfo} from '../../slices/basicInfo'

function BasicInfo() {
    let {register,handleSubmit,formState:{errors}}=useForm()
    let dispatch=useDispatch()
    const onFormSubmit=(basicObj)=>
     {
      // let actionObj=BasicInfo(basicObj)
      dispatch(setBasicInfo(basicObj))
      console.log(basicObj)
     }
    return ( 
        <div className="form1 m-auto">
            <div>
            <p style={{marginLeft:"11.8rem"}} className='display-5 mt-5'>Basic Info</p>
            <hr style={{marginLeft:"11.8rem",marginRight:"11.7rem"}}/>
            <form action="" className='w-75 mx-auto' onSubmit={handleSubmit(onFormSubmit)}>
            <div className='d-flex mt-5'>
            <div className='mb-3 me-5' style={{width:"35rem"}}>
              <label for="name" class="hd mt-2">Name</label>
              <input type="text" id="name" className="form-control" {...register('name')}/>
            </div>
            <div className='mb-3' style={{width:"35rem"}}>
              <label for="title" class="hd mt-2">Title</label>
              <input type="title" id="title" className="form-control" {...register('title')}/>
            </div>
            </div>
            <div className='d-flex'>
            <div className='mb-3 me-5' style={{width:"35rem"}}>
              <label for="email" class="hd mt-2">Email</label>
              <input type="email" id="email" className="form-control" {...register('email')}/>
            </div>
            <div className='mb-3 ' style={{width:"35rem"}}>
              <label for="phno" class="hd mt-2">Phone No</label>
              <input type="phno" id="phno" className="form-control" {...register('phno')}/>
            </div>
            </div>
            <div className="d-flex">
            <div className='mb-3 me-5'style={{width:"35rem"}}>
              <label for="githubLink" class="hd mt-2">Github Link</label>
              <input type="githubLink" id="githubLink" className="form-control" {...register('githubLink')}/>
            </div>
            <div className='mb-3' style={{width:"35rem"}}>
              <label for="LinkedIn" class="hd mt-2">LinkedIn</label>
              <input type="LinkedIn" id="LinkedIn" className="form-control" {...register('LinkedIn')}/>
            </div>
            </div>
            <div style={{padding:"2rem",textAlign:"center"}}>
            <button type="submit"  className='btn-lg btn-primary mt-5'>Save</button>
            </div>
            </form>
          </div>
        </div>
    )
}

export default BasicInfo