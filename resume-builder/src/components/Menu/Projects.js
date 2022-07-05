import React,{useState,useEffect} from 'react'
import {useForm} from 'react-hook-form'
import {useDispatch} from 'react-redux'
import {setProjects} from '../../slices/projects'
import ClearIcon from '@mui/icons-material/Clear';
import AddIcon from '@mui/icons-material/Add';
import { IconButton } from '@mui/material';
import * as Lodash from "lodash"

function Projects() {
    let {register,handleSubmit,formState:{errors}}=useForm()
    let dispatch=useDispatch()
    const [proData,setData] = useState([
      {
        title:"",
        overview:"",
        githubLink:"",
      }
    ])
    const [selectedProject,setSelectedProject] = useState({
      title:"",
      overview:"",
      githubLink:"",
    });
    const [selectedIndex,setSelectedIndex] = useState(0);
    const projectSelected = (projects) =>{
      if(projects!=null){
            setSelectedProject(projects) 
            console.log("selectedProgram is : ", projects)
            var index = proData.findIndex(d=>d.projects==projects)
            console.log("index is : ", index)
            setSelectedIndex(index)
          }
    }

    const onFormSubmit=(proObj)=>
     {
      // let actionObj=BasicInfo(basicObj)
      // dispatch(setProjects(proObj))
      // console.log(proObj)
      var d = Lodash.cloneDeep(proData);
      dispatch(setProjects(d))
      console.log(d)
     }

     const removeElement = (project) =>{
      console.log("Data was :", proData)
      var newData = proData.filter(d=>d!=project);
      console.log("Data will be now :", newData)
      console.log("selectedProgram is :", selectedProject)
      if(selectedProject!=null){
        var index = newData.findIndex(d=>d.project==selectedProject)
        console.log("index is : ", index)
        setSelectedIndex(index)
      }
      setData(newData)
    }

    const displayLabels = proData.map((project,index)=>{
      return(
        <div style={{zIndex:"1", display:"flex", alignItems:"center",backgroundColor:index==selectedIndex?"blue":"grey", color:"white",borderRadius:"8px", margin:"15px",padding:"2px"}}>
          <p onClick={()=>{
          projectSelected(project.program)
          }} style={{height:"11px",width:"84px",marginLeft:"5px"}}>Projects {index+1}</p>
          <IconButton style={{zIndex:"2"}}>
            <ClearIcon onClick={()=>{removeElement(project)}} style={{color:'white'}} />
          </IconButton>
        </div>
      )
    })

    const addNewProject = () =>{
      var newData = [...proData,{
        title:"",
        overview:"",
        githubLink:"",
      }]
      console.log(newData)
      setData(newData)
      setSelectedIndex(newData.length-1)
      setSelectedProject({
        title:"",
        overview:"",
        githubLink:"",
      })

    }
    return ( 
        <div className="form1 m-auto">
           <div style={{margin:" 60px 200px"}}>
            <p className='display-5'>Projects</p>
            <hr/>
            <div style={{display:"flex"}}>
                {displayLabels}
                <div style={{zIndex:"1", display:"flex", alignItems:"center",backgroundColor:"green", color:"white",borderRadius:"8px", margin:"15px",padding:"2px"}}>
                  <p 
                  onClick={()=>{
                    addNewProject()
                  }}
                  style={{height:"11px",width:"70px",marginLeft:"5px"}}>Add new</p>
                  <AddIcon style={{color:'white'}} />
                </div>
            </div>
            <form action="" onSubmit={handleSubmit(onFormSubmit)}>
            {
              selectedIndex>-1 &&
            <div>
            <div className='mb-3'>
              <label for="name" class="mt-2">Title</label>
              <input value={proData[selectedIndex]["title"]}
                      onChange={(e)=>{
                        var d = [...proData]
                        d[selectedIndex]["title"]=e.target.value
                        setData(d)
                      }}  
                      type="text" id="title" className="form-control" placeholder = 'Enter title of your project'/>
            </div>
            <div className='d-flex'>
            <div className='mb-3 me-5' style={{width:"35rem"}}>
              <label for="overview" class="hd mt-2">Overview</label>
              <input value={proData[selectedIndex]["overview"]}
                        onChange={(e)=>{
                        var d = [...proData]
                        d[selectedIndex]["overview"]=e.target.value
                        setData(d)
                        }}
              type="overview" id="overview" className="form-control" placeholder = 'Enter basic overview of project'/>
            </div>
            <div className='mb-3 ' style={{width:"35rem"}}>
              <label for="link" class="hd mt-2">Github Link</label>
              <input  value={proData[selectedIndex]["githubLink"]}
                        onChange={(e)=>{
                        var d = [...proData]
                        d[selectedIndex]["githubLink"]=e.target.value
                        setData(d)
                        }}
              type="url" id="link" className="form-control"/>
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

export default Projects