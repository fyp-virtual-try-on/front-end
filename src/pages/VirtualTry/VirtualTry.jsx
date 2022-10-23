import React from 'react'
import { Routes, Route } from "react-router-dom";
import ReactDOM from "react-dom";

import { Button, Dropdown, Menu, Space } from 'antd';
import imageUpload from "./imageUpload";
import SecondBar from './SeconBar/SecondBar'
import './VirtualTry.css'

const galleryImageList = [
  "https://raw.githubusercontent.com/dxyang/StyleTransfer/master/style_imgs/mosaic.jpg",
  "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/Van_Gogh_-_Starry_Night_-_Google_Art_Project.jpg/1280px-Van_Gogh_-_Starry_Night_-_Google_Art_Project.jpg",
  "https://raw.githubusercontent.com/ShafeenTejani/fast-style-transfer/master/examples/dora-maar-picasso.jpg",
  "https://pbs.twimg.com/profile_images/925531519858257920/IyYLHp-u_400x400.jpg",
  "https://raw.githubusercontent.com/ShafeenTejani/fast-style-transfer/master/examples/dog.jpg",
  "http://r.ddmcdn.com/s_f/o_1/cx_462/cy_245/cw_1349/ch_1349/w_720/APL/uploads/2015/06/caturday-shutterstock_149320799.jpg"
];

function VirtualTry() {
  return (
    <div className="VT-wrapp">
     <div><SecondBar /></div> 
     <div className='VT-grid'>
     <div class="dropdown">
  <button class=" button dropbtn">Insert an Image</button>
  <div class="dropdown-content">
  <a href="#">Recently uploaded</a>
  <a href="#">Upload from Device</a>
  <a href="#">Upload from Drive</a>
  </div>
</div>




     <div>second</div>
     <div>
     <imageUpload cardName="Input Image" imageGallery={galleryImageList} />
     </div>
     </div>
    </div>
  )
}

export default VirtualTry