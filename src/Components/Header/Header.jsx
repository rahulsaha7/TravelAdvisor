import React from 'react'
import { Autocomplete } from '@react-google-maps/api'
import {BsSearch} from 'react-icons/bs';


export const Header = () => {
    return (
       <>
       <div className="header" style={{backgroundColor:"blue"}}>


            <nav class="navbar navbar-expand-lg navbar-light ">
  <div class="container-fluid">
    <h5 class="navbar-brand" style={{color:"white"}} >Travel Advisor</h5>
    
    <div class="d-flex" id="">
      <h6 style={{color:"white"}}>Explore New place</h6>
     {/* <Autocomplete> */}
        
         <div class="input-group input-group-sm mb-3 position-relative">
         <span class="input-group-text" id="inputGroup-sizing-sm"><BsSearch /></span>
  <input type="text" placeholder="Search..." class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm" />
</div>
         
         
     {/* </Autocomplete> */}
    </div>
  </div>
</nav>   
       </div>
       </>
    )
}

export default Header