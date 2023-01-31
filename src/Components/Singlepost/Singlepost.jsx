import './Singlepost.css'
import singlepost from '../../Assests/SinglePost.jpg'

const Singlepost = () => {
  return (
    <>
      <div className="singlepost">
        <div className="singlepostWrapper">
          <img className='singlepostImg' src={singlepost} alt="" />
          <h1 className="singlepostTitle">Lorem ipsum dolor sit amet consectetur.
              <div className="singlepostEdit">
                  <i className="singlepostIcon fa-regular fa-pen-to-square"></i>
                  <i className="singlepostIcon fa-regular fa-trash-can"></i>
              </div>
          </h1>
          <div className="singlepostInfo">
            <span className="singlepostAuthor">Author: <b>Aditya</b></span>
            <span className="singlepostDate">1 hour ago</span>
          </div>
          <p className="singlepostDescription">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam, rem cumque facere debitis ratione esse laborum accusamus excepturi quod nam. Facere iure perspiciatis, quasi in consequatur accusantium odio ipsa ut laborum labore dicta, accusamus, doloremque fuga officiis sint rerum excepturi id perferendis iste temporibus molestias quos voluptatum voluptates nesciunt? Earum!</p>
        </div>
      </div>
    </>
  )
}

export default Singlepost