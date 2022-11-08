import { Box, Button, forwardRef, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react'
import React, { useState } from 'react'
import {AiOutlineDown} from "react-icons/ai";
import {AiOutlineUp} from "react-icons/ai";
import { Link } from 'react-router-dom';
import "./HeaderServices.css";

export const HeaderServices = () => {
  
    // const Submenu= forwardRef((props, ref)=>(
    //     <Menu>
    //         <MenuButton isSubmenu ref={ref} {...props}>Domestic Certification </MenuButton>
    //         <MenuList>
    //             <MenuItem>BIS</MenuItem>
    //             <MenuItem>FSSAI</MenuItem>
    //         </MenuList>
    //     </Menu>))
    return (
    <Menu>
      <MenuButton as={Button} fontSize="20px" color="blue.800" variant='link' rightIcon={<AiOutlineDown />}>
        Services
      </MenuButton>
      <MenuList>
        <MenuItem className='submenu' position="relative" ><Link to='/domesticService'>Indian Certification</Link>
        <div className="sublist" ><ul className='sublistList'><li className='sublistItem'><Link to='/domesticService'> BIS Certification</Link></li><li className='sublistItem'><Link to='/domesticService'>CRS Certification</Link></li></ul></div></MenuItem>
        <MenuItem><Link to="/internationalService">International Compliance & Certification</Link></MenuItem>
        <MenuItem>Instrument Testing & Calibration</MenuItem>
        <MenuItem>Consultation</MenuItem>
      </MenuList>
    </Menu>
  )
   
}
