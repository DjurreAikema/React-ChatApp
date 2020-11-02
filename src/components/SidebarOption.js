import React from 'react';
import './SidebarOption.css';
import { useHistory } from "react-router-dom";
import db from "../firebase";

function Sidebaroption({Icon, Title, Id, addChannelOption}) {
    const history = useHistory();
    const selectChannel = () => {
        if(Id){
            history.push(`/room/${Id}`)
        } else {
            history.push(Title)
        }
    }

    const addChannel = () => {
        const channelName = prompt('Please enter the channel name')
        if (channelName) {
            db.collection('rooms').add({
                name: channelName
            })
        }
    }

    return (
        <div className="sidebarOption" onClick={addChannelOption ? addChannel : selectChannel}>
            {Icon && <Icon className="sidebarOption__icon" />}
            {Icon ? (<h3>{Title}</h3>):(<h3 className="sidebarOption__channel"><span>#</span> {Title}</h3>)}
        </div>
    )
}

export default Sidebaroption
