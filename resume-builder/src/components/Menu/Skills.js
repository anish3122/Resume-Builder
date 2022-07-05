import React,{useState,useEffect} from 'react'
import {useForm} from 'react-hook-form'
import {useDispatch} from 'react-redux'
import {setSkills} from '../../slices/skills'
import ClearIcon from '@mui/icons-material/Clear';
import AddIcon from '@mui/icons-material/Add';
import { IconButton } from '@mui/material';
import * as Lodash from "lodash"

function Skills() {
    let {register,handleSubmit,formState:{errors}}=useForm()
    let dispatch=useDispatch()
    const [data,setData] = useState([
      {
        skills:""
      }
    ])
    const [selectedSkill,setSelectedSkill] = useState({
      skills:""
    });
    const [selectedIndex,setSelectedIndex] = useState(0);
    const skillSelected = (skills) =>{
      if(skills!=null){
            setSelectedSkill(skills) 
            console.log("selectedSkill is : ", skills)
            var index = data.findIndex(d=>d.skills==skills)
            console.log("index is : ", index)
            setSelectedSkill(index)
          }
    }

    const onFormSubmit=(skillObj)=>
     {
      // let actionObj=BasicInfo(basicObj)
      // dispatch(setProjects(proObj))
      // console.log(proObj)
      var d = Lodash.cloneDeep(data);
      dispatch(setSkills(d))
      console.log(d)
     }

     const removeElement = (skills) =>{
      console.log("Data was :", data)
      var newData = data.filter(d=>d!=skills);
      console.log("Data will be now :", newData)
      console.log("selectedProgram is :", setSelectedSkill)
      if(selectedSkill!=null){
        var index = newData.findIndex(d=>d.project==selectedSkill)
        console.log("index is : ", index)
        setSelectedIndex(index)
      }
      setData(newData)
    }

    const displayLabels = data.map((skills,index)=>{
      return(
        <div style={{zIndex:"1", display:"flex", alignItems:"center",backgroundColor:index==selectedIndex?"blue":"grey", color:"white",borderRadius:"8px", margin:"20px",padding:"2px"}}>
          <p onClick={()=>{
          skillSelected(skills.skills)
          }} style={{height:"11px",width:"84px",marginLeft:"5px"}}>Skill {index+1}</p>
          <IconButton style={{zIndex:"2"}}>
            <ClearIcon onClick={()=>{removeElement(skills)}} style={{color:'white'}} />
          </IconButton>
        </div>
      )
    })

    const addNewSkill = () =>{
      var newData = [...data,{
      skill:""
      }]
      console.log(newData)
      setData(newData)
      setSelectedIndex(newData.length-1)
      setSelectedSkill({
        skill:""
      })

    }
    return ( 
        <div className="form1 m-auto">
           <div style={{margin:" 60px 200px"}}>
            <p className='display-5'>Skills</p>
            <hr/>
            <div style={{display:"flex"}}>
                {displayLabels}
                <div style={{zIndex:"1", display:"flex", alignItems:"center",backgroundColor:"green", color:"white",borderRadius:"8px", margin:"20px",padding:"2px"}}>
                  <p 
                  onClick={()=>{
                    addNewSkill()
                  }}
                  style={{height:"11px",width:"80px",marginLeft:"5px"}}>Add new</p>
                  <AddIcon style={{color:'white'}} />
                </div>
            </div>
            <form action="" onSubmit={handleSubmit(onFormSubmit)}>
            {
              selectedIndex>-1 &&
            <div>
            <div className='mb-3'>
              <label for="name" class="mt-2">Skills </label>
              <input value={data[selectedIndex]["skill"]}
                      onChange={(e)=>{
                        var d = [...data]
                        d[selectedIndex]["skill"]=e.target.value
                        setData(d)
                      }}  
                      type="text" id="skill" className="form-control" placeholder = 'Enter skill'/>
            </div>
            </div>
}
<button type="submit" style={{width:"5rem"}} className='btn btn-primary d-block mt-5'>Save</button>
            </form>
          </div>
        </div>
    )
}

export default Skills