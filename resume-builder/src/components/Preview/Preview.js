import React, {useEffect,useRef} from 'react';
import {useSelector} from 'react-redux'
// import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import FmdGoodIcon from '@mui/icons-material/FmdGood';
// import { Button } from '@mui/material';
import ReactToPrint from "react-to-print";


// export default function PDF() {
//     const pdfRef = useRef(null);

//     const handleDownload = () => {
//         const content = pdfRef.current;

//         const doc = new jsPDF();
//         doc.html(content, {
//             callback: function (doc) {
//                 doc.save('sample.pdf');
//             }
//         });
//     };
  
// function Preview() {
  
function Preview()
{
  const resumeRef = useRef();
  const {basicInfo}=useSelector(state=>state.basicInfo)
  const {education}=useSelector(state=>state.education)
  const {projects}=useSelector(state=>state.projects)
  const {skills}=useSelector(state=>state.skills)
  const {workExperience}=useSelector(state=>state.workExperience)
  const {achievements}=useSelector(state=>state.achievements)
  useEffect(()=>{
    console.log("basicInfo is :",basicInfo)
    console.log("education is :",education)
    console.log("projects is :",projects)
    if(workExperience!=null){
      console.log("username is :",workExperience.title)
    }
    // if(achievements!=null)
    console.log(achievements)
    // if(user2!=null){
    //   console.log("username is :",user2.title)
    // }
  },[basicInfo,education,projects,skills,workExperience,achievements])

  const displayEducation = education.map(e=>{
    return(
      <div>
        <h4 className='text-primary'>{e.program}</h4>
        <h6><FmdGoodIcon/> {e.institution}</h6>
        <p><CalendarTodayIcon/> {e.startDate} to {e.endDate}</p> 
      </div>
    )
  })
  const displayProject = projects.map(e=>{
    return(
      <div>
        <h4 className='text-primary' key={e}>{e.title}</h4>
        <h6 key={e}>{e.overview}</h6>
        <p key={e}>{e.githubLink}</p> 
      </div>
    )
  })
  const displaySkill = skills.map(e=>{
    return(
      <div>
        <li className='text-primary' key={e}>{e.skill}</li>
      </div>
    )
  })
  const displayAchievement = achievements.map(e=>{
    return(
      <div>
        <li className='text-primary' key={e}>{e.achievement}</li>
      </div>
    )
  })
  
  

  const displayWorkExperience = workExperience.map(e=>{
    return(
      <div>
        <h5>{e.title}</h5>
        <h5 className='text-primary'>{e.companyName}</h5>
        <h5><AttachFileIcon/> {e.certificateLink}</h5>
        <h5><FmdGoodIcon/> {e.location}</h5>
        <p><CalendarTodayIcon/> {e.startDate} to {e.endDate}</p> 
      </div>
    )
  })
  return(
    <div style={{margin:"0rem"}}>
      {/* <button>Download</button> */}
      <div ref={resumeRef} class="bg-light" style={{border:"0.05rem solid grey",width:"100%",minHeight:"70rem",margin:"0rem"}}>
          {/* <p className="display-3 mt-5">List of Users</p> */}
          {/* {user==null && <p className='display-5 text-danger'>No User Found</p>} */}
          <form action="">
            <div>
            {basicInfo!=null &&  <h1 className='heading ms-4 mt-5 display-2'>{basicInfo.name}</h1>}
              {basicInfo!=null && <h2 className='ms-4 subheading text-primary display-6'>{basicInfo.title}</h2>}
              <div
                // className='row'
                style={{display:"flex",flexDirection:"row"}}
               >
                 <div style={{display:"flex",width:"100%",flexDirection:"column"}}>
                <div className='d-flex' style={{display:"flex",flexDirection:"row"}}>
                  <div  
                    style={{display:"flex",flexDirection:"row"}}
                  className=' ms-4 me-5 align-items-center'
                  >
                  {basicInfo!=null &&  <EmailIcon className="text-primary me-2" style={{fontSize:"2rem"}}/>}
                      {basicInfo!=null &&<h5>{basicInfo.email}</h5>}
                  </div>
                  <div 
                  className='d-flex me-5 align-items-center'    
                  >
                  {basicInfo!=null && <PhoneIcon className="text-primary me-2" style={{fontSize:"2rem"}}/>}
                      {basicInfo!=null &&<h5>{basicInfo.phno}</h5>}
                  </div>
                  <div className='d-flex  align-items-center'>
                  {basicInfo!=null && <GitHubIcon className="me-2" style={{fontSize:"2rem"}}/>}
                      {basicInfo!=null && <h5>{basicInfo.githubLink}</h5>}
                  </div>
                </div>
                {/* <div style={{display:"flex",flexDirection:"row"}}> */}
                  <div
                  className='d-flex me-5 align-items-center'
                  >
                  {basicInfo!=null && <LinkedInIcon className="text-primary ms-4 align-items-center" style={{fontSize:"2rem"}}/>}
                      {basicInfo!=null && <h5 className='ms-2'>{basicInfo.LinkedIn}</h5>}
                  </div> 
                {/* </div> */}
              </div>
              </div>
              <div style={{display:"flex",flexDirection:"row"}}>
                <div style={{flex:"0.6",marginLeft:"2rem"}} className='me-5'>
                <div id="education" className='mt-5'>
                    <h3>Education</h3>
                    <hr/>
                    {displayEducation}
                  </div>
                  <div id="projects" className='mt-5'>
                    <h3>Projects</h3>
                    <hr/>
                    {displayProject}
                  </div>
                </div>
                <div style={{flex:"0.4",margin:"2rem"}} className='me-5'>
                  <div id="workExperience" className='mt-5'>
                    <h3>Work Experience</h3>
                    <hr/>
                    {displayWorkExperience}
                  </div>
                  <div id="skills" className='mt-5'>
                    <h3>Skills</h3>
                    <hr/>
                      {displaySkill}
                  </div>
                  <div id="achievement" className='mt-5'>
                    <h3>Achievements</h3>
                    <hr />
                    {displayAchievement}
                  </div>
                </div>
                </div>
              </div>
          {/* {user!=null && <p className='display-5 text-danger'>{user.name}</p>} */}
          </form>
      </div>
      {/* <div className='m-auto'>
        <Button color="primary" onClick="handleDownload">Print</Button>
      </div> */}
      <div style={{display:"flex"}}>
      <ReactToPrint
          trigger={() => {
            return (
              <button className="btn btn-primary mt-3" style={{margin:"auto", marginBottom:"32px"}}>
                Download
              </button>
            );
          }}
          content={() => resumeRef.current}
        />
      </div>
    </div>
   
   )
  }

export default Preview;
