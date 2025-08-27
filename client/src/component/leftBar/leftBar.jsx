import './leftBar.css'
import Img from "../image/img"
const LeftBar = () =>{
    return(
    <div className='leftBar'>
        <div className="menuIcons">
            <a href='/' className='menuIcon' data-tooltip="Pinterest">
                <Img src="/general/logo.png" alt="logo" className='logo' />
            </a>
            <a href='/' className='menuIcon' data-tooltip="Home">
                <Img src="/general/home.svg" alt="home" />
            </a>
            <a href='/' className='menuIcon' data-tooltip="Create">
                <Img src="/general/create.svg" alt="create" />
            </a>
            <a href='/' className='menuIcon' data-tooltip="Updates">
                <Img src="/general/updates.svg" alt="updates" />
            </a>
            <a href='/' className='menuIcon' data-tooltip="Messages">
                <Img src="/general/messages.svg" alt="messages" />
            </a>
        </div>
        <a href='/' className='menuIcon' data-tooltip="Settings">
            <Img src="/general/settings.svg" alt="settings" />
        </a>
    </div>
    )
}
export default LeftBar
