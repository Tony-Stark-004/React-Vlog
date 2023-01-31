import './Header.css'
import headerImage from '../Assests/Header.jpg'

const Header = () => {
  return (
    <>
      <div className='header'>
        <div className='headerTitle'>
          <span className='headerTitleReactNode'>React & Node</span>
          <span className='headerTitleBlog'>Blog</span>
        </div>
        <img className='headerImg' src={headerImage} alt="headerImage" />
      </div>
    </>
  )
}

export default Header