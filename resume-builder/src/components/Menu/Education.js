import React,{useState,useEffect} from 'react'
import {useForm} from 'react-hook-form'
import {useDispatch} from 'react-redux'
import {setEducation} from '../../slices/education'
import ClearIcon from '@mui/icons-material/Clear';
import AddIcon from '@mui/icons-material/Add';
import { IconButton } from '@mui/material';
import * as Lodash from "lodash"

function Education() {
    let {register,handleSubmit,formState:{errors}}=useForm()
    let dispatch=useDispatch()

    
    const [data,setData] = useState([
      {
        program:"",
        institution:"",
        startDate:"",
        endDate:""
      }
    ])
    const [selectedProgram,setSelectedProgram] = useState({
      program:"",
      institution:"",
      startDate:"",
      endDate:""
    });
    const [selectedIndex,setSelectedIndex] = useState(0);

    const programSelected = (program) =>{
      if(program!=null){
            setSelectedProgram(program) 
            console.log("selectedProgram is : ", program)
            var index = data.findIndex(d=>d.program==program)
            console.log("index is : ", index)
            setSelectedIndex(index)
          }
    }

    
    const onFormSubmit=(educationObj)=>
     {
      // let actionObj=BasicInfo(basicObj)
      var d = Lodash.cloneDeep(data);
      dispatch(setEducation(d))
      console.log(d)
     }

    const removeElement = (education) =>{
      console.log("Data was :", data)
      var newData = data.filter(d=>d!=education);
      console.log("Data will be now :", newData)
      console.log("selectedProgram is :", selectedProgram)
      if(selectedProgram!=null){
        var index = newData.findIndex(d=>d.program==selectedProgram)
        console.log("index is : ", index)
        setSelectedIndex(index)
      }
      setData(newData)
    }
    
    const displayLabels = data.map((education,index)=>{
      return(
        <div style={{zIndex:"1", display:"flex", alignItems:"center",backgroundColor:index==selectedIndex?"blue":"grey", color:"white",borderRadius:"8px", margin:"20px",padding:"2px"}}>
          <p onClick={()=>{
          programSelected(education.program)
          }} style={{height:"8px",width:"95px",marginLeft:"5px"}}>Education {index+1}</p>
          <IconButton style={{zIndex:"2"}}>
            <ClearIcon onClick={()=>{removeElement(education)}} style={{color:'white'}} />
          </IconButton>
        </div>
      )
    })

    const addNewEducation = () =>{
      var newData = [...data,{
        program:"",
        institution:"",
        startDate:"",
        endDate:""
      }]
      console.log(newData)
      setData(newData)
      setSelectedIndex(newData.length-1)
      setSelectedProgram({
        program:"",
        institution:"",
        startDate:"2022-10-20",
        endDate:"2022-10-20"
      })

    }
    return ( 
        <div className="form1 m-auto">
          <div style={{margin:" 60px 200px"}}>
            <p className='display-5'>Education</p>
            <hr/>
            {/* {data.length>0 &&  */}
              <div style={{display:"flex"}}>
                {displayLabels}
                <div style={{zIndex:"1", display:"flex", alignItems:"center",backgroundColor:"green", color:"white",borderRadius:"8px", margin:"20px",padding:"2px"}}>
                  <p 
                  onClick={()=>{
                  addNewEducation()
                  }}
                  style={{height:"8px",width:"70px",marginLeft:"5px"}}>Add new</p>
                  <AddIcon style={{color:'white'}} />
                </div>
            </div>
            {/* } */}
            {/* { */}
              {/* selectedIndex>-1 &&  */}
              <form action="" onSubmit={handleSubmit(onFormSubmit)}>
                {
                  selectedIndex>-1 &&
                  <div>
                    <div className='mb-3'>
                      <label for="program" class="mt-2">Program/Course</label>
                      <input 
                      value={data[selectedIndex]["program"]}
                      onChange={(e)=>{
                        var d = [...data]
                        d[selectedIndex]["program"]=e.target.value
                        setData(d)
                      }}
                      type="text" id="program" className="form-control" placeholder = 'Enter name of your program/course'/>
                    </div>
                    <div className='mb-3'>
                      <label for="institution" class="mt-2">Institution Name</label>
                      <input value={data[selectedIndex]["institution"]}
                        onChange={(e)=>{
                        var d = [...data]
                        d[selectedIndex]["institution"]=e.target.value
                        setData(d)
                        }}
                        type="text" id="institution" className="form-control" placeholder = 'Enter name of your institution'/>
                    </div>
                    <div className="d-flex">
                      <div className='mb-3 me-5'style={{width:"35rem"}}>
                        <label for="startDate" class="hd mt-2">Start Date</label>
                        <input 
                        value={data[selectedIndex]["startDate"]}
                        onChange={(e)=>{
                          var d = [...data]
                          d[selectedIndex]["startDate"]=e.target.value
                          setData(d)
                        }}
                        type="date" id="startDate" className="form-control" />
                      </div>
                      <div className='mb-3' style={{width:"35rem"}}>
                        <label for="endDate" class="hd mt-2">End Date</label>
                        <input
                        value={data[selectedIndex]["endDate"]}
                        onChange={(e)=>{
                          var d = [...data]
                          d[selectedIndex]["endDate"]=e.target.value
                          setData(d)
                        }}
                        type="date" id="endDate" className="form-control" />
                      </div>
                    </div>
                  </div>
                }
                <button type="submit" style={{width:"5rem"}} className='btn btn-primary d-block mt-5'>Save</button>
              </form>
          </div>
        </div>
    )
}

export default Education