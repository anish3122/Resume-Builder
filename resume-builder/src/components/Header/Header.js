import React from 'react'
import './Header.css';
function Header() {
  return (
    <div style={{textAlign:"center",padding:"2rem"}}>
      {/* <div className='d-flex'> */}
      <p className="resumeText m-auto">Create your resume which stands out!!</p>
      <img className="resumeImage" src="https://www.jobboom.com/career/wp-content/uploads/2021/04/shutterstock_1112175710-770x433.png"  />
        {/* <p className="resumeText my-5">Create your resume which stands out!!</p> */}
      {/* </div> */}
    </div>
  )
}

export default Header