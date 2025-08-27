import UserButton from '../userButton/userButton'
import './topBar.css'
import Img from '../image/img'
const TopBar = () =>{
    return(
    <div className='topBar'>
        {/* Search */}
        <div className='search'>
            <img src="/general/search.svg" alt="" />
            <input type="text" placeholder='Search'/>
        </div>
        <UserButton/>
    </div>
    )
}
export default TopBar