import React from 'react'
import './index.css'
import SidebarRow from './SidebarRow';
import LocalHospitalIcon from '@material-ui/icons/LocalHospital';
import EmojiFlagsIcon from '@material-ui/icons/EmojiFlags';
import PeopleIcon from "@material-ui/icons/People";
import StorefrontOutlinedIcon from '@material-ui/icons/StorefrontOutlined';
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary';
import ExpandMoreOutlinedIcon from '@material-ui/icons/ExpandMoreOutlined';

function Sidebar() {
    return (
        <div className="sidebar">
            <SidebarRow src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThIE_WG-ywUwymdSlOZfw4q0mgj5EjaIwBqQ&usqp=CAU" title="xxx" />
            <SidebarRow Icon={LocalHospitalIcon} title="Information Center" />
            <SidebarRow Icon={EmojiFlagsIcon} title="Pages" />
            <SidebarRow Icon={PeopleIcon} title="Friends" />
            <SidebarRow Icon={StorefrontOutlinedIcon} title="MarketPalce" />
            <SidebarRow Icon={VideoLibraryIcon} title="Videos" />
            <SidebarRow Icon={ExpandMoreOutlinedIcon} title="MarketPalce" />
        </div>
    )
}

export default Sidebar
