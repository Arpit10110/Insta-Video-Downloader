import React from 'react'
import { useState } from 'react'
import "../style/Home.css"
import VideoBox from "./VideoBox.jsx"
const Home = () => {
    const [InputUrl,SetInputUrl]=useState("");
    const [Ans,SetAns]=useState([]);
    const [Milgaya,SetMilgaya]=useState(false);
    const download= async()=>{
        const url = 'https://instagram-downloader-download-instagram-videos-stories1.p.rapidapi.com/?url='+InputUrl;
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'a9e8bc628emsh9e05d7a06490db9p14d146jsnf3a5189d0076',
            'X-RapidAPI-Host': 'instagram-downloader-download-instagram-videos-stories1.p.rapidapi.com'
        }
    };
    
    try {
        const response = await fetch(url, options);
        const result = await response.text();
        SetAns(JSON.parse(result))
        SetMilgaya(true)
        console.log(Ans);
    } catch (error) {
        console.error(error);
    }
    }
  return (
    <>
    <h3>Download Insta Video❣️</h3>
    <div className="container">
    <input type="text" placeholder=' Please Enter Your URL' onChange={(e)=>{
        SetInputUrl(e.target.value);
    }} />
    <button onClick={download}>Download</button>
    </div>
    {
         Milgaya===true ? 
    <div className="downloadItem">
    {
        Ans.map((i,index)=>{
            return(
                <VideoBox key={index} img={i.thumb} Link={i.url} />
            )
        })
    }
    </div>:<div className="downloadItem"></div>
    }
    </>
  )
}

export default Home