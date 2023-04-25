import React from 'react'

const Body = () => {
  return (
    <div className='body'>
        <div className="leftContainer">
            <div className="content">
            <h1 className='bodytitle'>Header<br/>Footer</h1>
            <p className='random'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
            </div>
        </div>
        <div className="rigthContainer">
            <img src='https://img.freepik.com/free-photo/surprised-beautiful-woman-posing-bright-yellow-lovely-brunette-girl-standing-studio-with-amazed-face-expression_197531-11104.jpg' alt='imagelogo' className='images'/>
        </div>
    </div>
  )
}

export default Body