import { useState } from 'react';
import './userButton.css';

function UserButton() {
    const currentUser = false;
    const [open, setOpen] = useState(true);
  return currentUser ?(
    <div className="userButton">
        <img src="/general/noAvatar.png" alt="Profile Image" />
        <img onClick={() => setOpen(prev=>!prev)} src="/general/arrow.svg" alt="optioin" className='arrow' />

        {open &&
        <div className="userOptions">
            <div  className= 'userOption'>Profile</div>
            <div  className= 'userOption'>Settings</div>
            <div  className= 'userOption'>Logout</div>
        </div>
        }

    </div>
  ):
  (
    <div className="loginLink">
        Login / Signup
    </div>
  );
}

export default UserButton