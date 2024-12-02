import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faCaretUp, faPlus } from '@fortawesome/free-solid-svg-icons';

function Sidebar() {
  return (
  <>
  
 

  <div className=" ms-3 mt-4 rounded-4 text-white mt-2" style={{ width: '750px', height: '3500px',backgroundColor: '#0C090A',}} >
  <div className="d-flex justify-content-between ms-3 mt-3" id="fixed">
        <h6><FontAwesomeIcon icon={faCaretUp} style={{color: "#ffffff",}} className='me-2' />Library</h6>
        <div>
        <FontAwesomeIcon icon={faPlus} style={{color: "#ffffff",}} className='me-3' />
        <FontAwesomeIcon icon={faArrowRight} style={{color: "#ffffff",}} className='me-4' />
        </div>
      </div>
      
      <div className='bg-dark ms-3 mt-3 rounded-3 p-3 text-light' style={{width:'370px', height:'150px', backgroundColor:'#0C090A'}}>
        <h4 >Create Your Playlist</h4>
        <p>it's easy we will help you</p>
        <button className='btn btn-light  md-4 rounded-4' style={{height:"35px"}}> Create Playlist</button>
      </div>
      <div className='bg-dark ms-3 mt-3 rounded-3 p-3 text-light' style={{width:'370px', height:'150px', backgroundColor:'#0C090A'}}>
        <h4 >Lets find you some pocast</h4>
        <p>We will keep you updated</p>
        <button className='btn btn-light  md-4 rounded-4' style={{height:"35px"}}> Podcasts</button>
      </div>
      
     
     
  
 </div>
  </>
    
  );
}

export default Sidebar;
