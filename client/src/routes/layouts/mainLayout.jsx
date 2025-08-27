import LeftBar from '../../component/leftBar/leftBar'
import TopBar from '../../component/topBar/topBar'
import './mainLayout.css'
import { Outlet } from 'react-router'

const MainLayout = () => {
  return (
    <div className='mainLayout'>
      <LeftBar/>
      <div className="content">
        <TopBar/>
        <Outlet/>
      </div>
    </div>
  )
}

export default MainLayout