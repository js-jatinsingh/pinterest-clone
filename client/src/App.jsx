import './app.css'
import Gallery from './component/gallery/gallery'
import LeftBar from './component/leftBar/leftBar'
import TopBar from './component/topBar/topBar'

const App = () => {
  return (
    <div className='app'>
      <LeftBar/>
      <div className="content">
        <TopBar/>
        <Gallery/>
      </div>
    </div>
  )
}

export default App