import MainBanner1 from "../../Assets/images/MainBanner1.png"
import MainBanner2 from "../../Assets/images/MainBanner2.jpeg"
import MainBanner3 from "../../Assets/images/MainBanner3.jpeg"
import React, { useEffect, useState } from 'react'
import "./Slider.css"

const Slider = () => {

  const [ banner , setBanner] = useState([MainBanner1, MainBanner2, MainBanner3]);

  const [ Slider , setSlider] = useState(0);


  useEffect(() => {

    setInterval(() => {
      setSlider((Slider=>Slider>1?0:Slider+1))

    }, 2000);
  },[])

  return (

    <div>
        <img className="Website-Banner" src={banner[Slider]}  alt="/"/>
    </div>
  )
}

export default Slider