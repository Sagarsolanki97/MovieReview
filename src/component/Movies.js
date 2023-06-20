import React from 'react'

const Movies = ({title,img,year}) => {
  return (
    <div className='movie' >
            <img src={img} alt="{title}" srcset="" />
            <p className='movieTitle'>{title}</p>
            <p className='movieYear'>year : {year}</p>
    </div>
  )
}

export default Movies