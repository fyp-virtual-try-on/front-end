import React from 'react'
import './SecondBar.css'
import { NavLink } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import Badge from '@mui/material/Badge';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
function SecondBar() {
  const cartItem = useSelector((state) => state.cartItems);
  return (
   <div className="Secondbar-wrraper">
   <div className='secondbar'>
    <div>
    <button className="button Sb-buttons">Favorite</button>
     </div>
     <div>
    <button className="button Sb-buttons">Share</button>
     </div>
     <div>
    <button className="button Sb-buttons">Download</button>
     </div>
     
     </div>
     <NavLink to="/Cart">
     <Badge badgeContent={cartItem.length} color="primary">
    < ShoppingCartOutlinedIcon  style={{ color: 'white' }}/>
</Badge>
            </NavLink>
</div> 
   
  )
}

export default SecondBar