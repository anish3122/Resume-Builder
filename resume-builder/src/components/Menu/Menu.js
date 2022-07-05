import React from 'react'
import BasicInfo from "./BasicInfo"
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepButton from '@mui/material/StepButton';
import WorkExperience from './WorkExperience';
import Projects from './Projects';
import Education from './Education';
import Achievements from './Achievements';
import "./Menu.css"
import Skills from './Skills';

function Menu() {
    const steps = ['Basic Information', 'Education', 'Skills','Projects','Work Experience','Achievements'];
    const [activeStep, setActiveStep] = React.useState(0);

    const handleStep = (step) => () => {
        setActiveStep(step);
      };

    const displayMenu = () =>{
        if(activeStep===0){
            return(<BasicInfo />)
        }
        else if(activeStep===1){
            return(<Education />)
        }
        else if(activeStep===2){
            return(<Skills/>)
        }
        else if(activeStep===3){
            return(<Projects />)
        }
        else if(activeStep===4){
            return(<WorkExperience />)
        }
        else if(activeStep===5){
            return(<Achievements />)
        }
    }

  return (
    <div>
        <Stepper nonLinear activeStep={activeStep}>
            {steps.map((label, index) => (
            <Step key={label} completed={false}>
                <StepButton color="inherit" onClick={handleStep(index)}>
                {label}
                </StepButton>
            </Step>
            ))}
        </Stepper>
        {displayMenu()}
        {/* <BasicInfo /> */}
    </div>
  )
}

export default Menu