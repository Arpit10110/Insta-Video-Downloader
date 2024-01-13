import React from 'react'
import "../style/VideoCard.css"
const VideoBox = ({img,Link,title}) => {
  return (
   <>
   <div className="box">
    <img src={img} alt="Thumbnail" />
    <a href={Link}>Download</a>
   </div>
   </>
  )
}

export default VideoBox
