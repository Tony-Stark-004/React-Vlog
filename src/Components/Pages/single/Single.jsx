import Post from '../../Posts/Post'
import Sidebar from '../../Sidebar/Sidebar'
import Singlepost from '../../Singlepost/Singlepost'
import './Single.css'

const Single = () => {
  return (
    <>
        <div className="single">
          {/* <Post /> */}
          <Singlepost />
          <Sidebar />
        </div>
    </>
  )
}

export default Single