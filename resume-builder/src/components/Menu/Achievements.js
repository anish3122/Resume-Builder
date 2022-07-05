import React,{useState,useEffect} from 'react'
import {useForm} from 'react-hook-form'
import {useDispatch} from 'react-redux'
import {setAchievements} from '../../slices/achievements'
import ClearIcon from '@mui/icons-material/Clear';
import AddIcon from '@mui/icons-material/Add';
import { IconButton } from '@mui/material';
import * as Lodash from "lodash"

function Achievements() {
    let {register,handleSubmit,formState:{errors}}=useForm()
    let dispatch=useDispatch()
    const [data,setData] = useState([
      {
        achievement:""
      }
    ])
    const [selectedAchievement,setSelectedAchievement] = useState({
      achievement:""
    });
    const [selectedIndex,setSelectedIndex] = useState(0);
    const achievementselected = (achievements) =>{
      if(achievements!=null){
        setSelectedAchievement(achievements) 
            console.log("selectedachievement is : ", achievements)
            var index = data.findIndex(d=>d.achievement==achievements)
            console.log("index is : ", index)
            setSelectedAchievement(index)
          }
    }

    const onFormSubmit=(achievementObj)=>
     {
      // let actionObj=BasicInfo(basicObj)
      // dispatch(setProjects(proObj))
      // console.log(proObj)
      var d = Lodash.cloneDeep(data);
      dispatch(setAchievements(d))
      console.log(d)
     }

     const removeElement = (achievements) =>{
      console.log("Data was :", data)
      var newData = data.filter(d=>d!=achievements);
      console.log("Data will be now :", newData)
      console.log(selectedAchievement)
      console.log("selectedProgram is :", setSelectedAchievement)
      if(selectedAchievement!=null){
        var index = newData.findIndex(d=>d.achievement==selectedAchievement)
        console.log("index is : ", index)
        setSelectedAchievement(index)
      }
      setData(newData)
    }

    const displayLabels = data.map((achievement,index)=>{
      return(
        <div style={{zIndex:"1", display:"flex", alignItems:"center",backgroundColor:index==selectedIndex?"blue":"grey", color:"white",borderRadius:"8px", margin:"20px",padding:"2px"}}>
          <p onClick={()=>{
          achievementselected(achievement)
          }} style={{height:"11px",width:"120px",marginLeft:"5px"}}>Achievement {index+1}</p>
          <IconButton style={{zIndex:"2"}}>
            <ClearIcon onClick={()=>{removeElement(achievement)}} style={{color:'white'}} />
          </IconButton>
        </div>
      )
    })

    const addNewAchievement = () =>{
      var newData = [...data,{
      achievement:""
      }]
      console.log(newData)
      setData(newData)
      setSelectedIndex(newData.length-1)
      setSelectedAchievement({
        achievement:""
      })

    }
    return ( 
        <div className="form1 m-auto">
           <div style={{margin:" 60px 200px"}}>
            <p className='display-5'>Achievements</p>
            <hr/>
            <div style={{display:"flex"}}>
                {displayLabels}
                <div style={{zIndex:"1", display:"flex", alignItems:"center",backgroundColor:"green", color:"white",borderRadius:"8px", margin:"20px",padding:"2px"}}>
                  <p 
                  onClick={()=>{
                    addNewAchievement()
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
              <label for="name" class="mt-2">Achievement </label>
              <input value={data[selectedIndex]["achievement"]}
                      onChange={(e)=>{
                        var d = [...data]
                        d[selectedIndex]["achievement"]=e.target.value
                        setData(d)
                      }}  
                      type="text" id="achievement" className="form-control" placeholder = 'Enter achievement'/>
            </div>
            </div>
}
<button type="submit" style={{width:"5rem"}} className='btn btn-primary d-block mt-5'>Save</button>
            </form>
          </div>
        </div>
    )
}

export default Achievements