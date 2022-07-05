import React,{useState,useEffect} from 'react'
import {useForm} from 'react-hook-form'
import {useDispatch} from 'react-redux'
import {setWorkExperience} from '../../slices/workExperience'
import ClearIcon from '@mui/icons-material/Clear';
import AddIcon from '@mui/icons-material/Add';
import { IconButton } from '@mui/material';
import * as Lodash from "lodash"

function WorkExperience() {
    let {register,handleSubmit,formState:{errors}}=useForm()
    let dispatch=useDispatch()

    
    const [data,setData] = useState([
      {
        title:"",
        companyName:"",
        certificateLink:"",
        location:"",
        startDate:"",
        endDate:""
      }
    ])
    const [selectedWorkExperience,setSelectedWorkExperience] = useState({
        title:"",
        companyName:"",
        certificateLink:"",
        location:"",
        startDate:"",
        endDate:""
    });
    const [selectedIndex,setSelectedIndex] = useState(0);

    const workExperienceSelected = (workExperience) =>{
      if(workExperience!=null){
            setSelectedWorkExperience(workExperience) 
            console.log("selectedProgram is : ", workExperience)
            var index = data.findIndex(d=>d.workExperience==workExperience)
            console.log("index is : ", index)
            setSelectedIndex(index)
          }
    }

    
    const onFormSubmit=(workExpObj)=>
     {
      // let actionObj=BasicInfo(basicObj)
      var d = Lodash.cloneDeep(data);
      dispatch(setWorkExperience(d))
      console.log(d)
     }

    const removeElement = (workExperience) =>{
      console.log("Data was :", data)
      var newData = data.filter(d=>d!=workExperience);
      console.log("Data will be now :", newData)
      console.log("selectedProgram is :", selectedWorkExperience)
      if(selectedWorkExperience!=null){
        var index = newData.findIndex(d=>d.workExperience==selectedWorkExperience)
        console.log("index is : ", index)
        setSelectedIndex(index)
      }
      setData(newData)
    }
    
    const displayLabels = data.map((workExperience,index)=>{
      return(
        <div style={{zIndex:"1", display:"flex", alignItems:"center",backgroundColor:index==selectedIndex?"blue":"grey", color:"white",borderRadius:"8px", margin:"15px",padding:"2px"}}>
          <p onClick={()=>{
          workExperienceSelected(workExperience.title)
          }} style={{height:"20px",width:"175px",marginLeft:"5px",fontSize:"19px"}}>Work Experience {index+1}</p>
          <IconButton style={{zIndex:"2"}}>
            <ClearIcon onClick={()=>{removeElement(workExperience)}} style={{color:'white'}} />
          </IconButton>
        </div>
      )
    })

    const addNewWorkExperience = () =>{
      var newData = [...data,{
        title:"",
        companyName:"",
        certificateLink:"",
        location:"",
        startDate:"",
        endDate:""
      }]
      console.log(newData)
      setData(newData)
      setSelectedIndex(newData.length-1)
      setSelectedWorkExperience({
        title:"",
        companyName:"",
        certificateLink:"",
        location:"",
        startDate:"2022-10-20",
        endDate:"2022-10-20"
      })

    }
    return ( 
        <div className="form1 m-auto">
          <div style={{margin:" 60px 200px"}}>
            <p className='display-5'>Work Experience</p>
            <hr/>
            {/* {data.length>0 &&  */}
              <div style={{display:"flex"}}>
                {displayLabels}
                <div style={{zIndex:"1", display:"flex", alignItems:"center",backgroundColor:"green", color:"white",borderRadius:"8px", margin:"15px",padding:"2px"}}>
                  <p 
                  onClick={()=>{
                  addNewWorkExperience()
                  }}
                  style={{height:"11px",width:"80px",marginLeft:"5px"}}>Add new</p>
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


                  <div className="d-flex">
                      <div className='mb-3 me-5'style={{width:"35rem"}}>
                        <label for="title" class="hd mt-2">Title</label>
                        <input 
                        value={data[selectedIndex]["title"]}
                        onChange={(e)=>{
                          var d = [...data]
                          d[selectedIndex]["title"]=e.target.value
                          setData(d)
                        }}
                        type="text" id="title" className="form-control" placeholder='Enter title eg. Frontend Developer'/>
                      </div>
                      <div className='mb-3' style={{width:"35rem"}}>
                        <label for="companyName" class="hd mt-2">Company Name</label>
                        <input
                        value={data[selectedIndex]["companyName"]}
                        onChange={(e)=>{
                          var d = [...data]
                          d[selectedIndex]["companyName"]=e.target.value
                          setData(d)
                        }}
                        type="text" id="companyName" className="form-control"  placeholder='Enter company name eg.Amazon'/>
                      </div>
                    </div>

                    <div className="d-flex">
                      <div className='mb-3 me-5'style={{width:"35rem"}}>
                        <label for="certificateLink" class="hd mt-2">Certificate Link</label>
                        <input 
                        value={data[selectedIndex]["certificateLink"]}
                        onChange={(e)=>{
                          var d = [...data]
                          d[selectedIndex]["certificateLink"]=e.target.value
                          setData(d)
                        }}
                        type="text" id="certificateLink" className="form-control" placeholder='Enter certificate link'/>
                      </div>
                      <div className='mb-3' style={{width:"35rem"}}>
                        <label for="location" class="hd mt-2">Location</label>
                        <input
                        value={data[selectedIndex]["location"]}
                        onChange={(e)=>{
                          var d = [...data]
                          d[selectedIndex]["location"]=e.target.value
                          setData(d)
                        }}
                        type="text" id="location" className="form-control" placeholder='Enter location'/>
                      </div>
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

export default WorkExperience