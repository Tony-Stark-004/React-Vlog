import './Write.css'
import writeImage from '../../../Assests/write-img.jpg'

const Write = () => {
  return (
    <>
      <div className="write">
          <img className='writeImg' src={writeImage} alt='write- img' />
          <form className="writeForm">
            <div className="writeFormGroup">
              <label htmlFor="fileInput">
                <i className="writeIcon fa-solid fa-plus"></i>
              </label>
              <input type='file' id='fileInput' style={{display:'none'}}/>
              <input className='writeInput' type='text' placeholder='Title' autoFocus={true} />
            </div>

            <div className="writeFormGroup">
              <textarea 
                className='writeInput writeText' 
                placeholder='write your story...'
                type='text' 
                cols="25" 
                rows="3"> 
              </textarea>
            </div>

            <button className='writeSubmit'>Publish</button>
          </form>
      </div>
    </>
  )
}

export default Write