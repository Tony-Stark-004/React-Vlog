import './Home.css'
import Header from '../../Header'
import Posts from '../../Posts/Posts'
import Sidebar from '../../Sidebar/Sidebar'

const Home = () => {
  return (
    <>
      <Header />
      <div className='home'>
        <Posts />
        <Sidebar />
      </div>
    </>
  )
}

export default Home