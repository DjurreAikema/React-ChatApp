import React, {useState, useEffect} from 'react';
import './Sidebar.css';
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";
import CreateIcon from "@material-ui/icons/Create";
import InsertCommentIcon from "@material-ui/icons/InsertComment";
import Sidebaroption from './SidebarOption';
import InboxIcon from "@material-ui/icons/Inbox";
import DraftsIcon from "@material-ui/icons/Drafts";
import BookmarkBorderIcon from "@material-ui/icons/BookmarkBorder";
import FileCopyIcon from "@material-ui/icons/FileCopy";
import PeopleAltIcon from "@material-ui/icons/PeopleAlt";
import AppsIcon from "@material-ui/icons/Apps";
import ExpandLessIcon from "@material-ui/icons/ExpandLess";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import AddIcon from "@material-ui/icons/Add";
import db from "../firebase";
import {useStateValue} from "../StateProvider"

function Sidebar() {
    const [channels, setChannels] = useState([])
    const [{user}] = useStateValue();

    // Run once when component loads
    useEffect(() => {
        db.collection('rooms').onSnapshot(snapshot => (
            setChannels(snapshot.docs.map(doc => ({
                id: doc.id,
                name: doc.data().name,
            })))
        ))
    }, [])

    return (
        <div className="sidebar">
            <div className="sidebar__header">
                <div className="sidebar__info">
                    <h2>Server name</h2>
                    <h3>
                        <FiberManualRecordIcon />
                        {user?.displayName}
                    </h3>
                </div>
                <CreateIcon />
            </div>
            <Sidebaroption Icon={InsertCommentIcon} Title="Threads" />
            <Sidebaroption Icon={InboxIcon} Title="Mentions & reactions" />
            <Sidebaroption Icon={DraftsIcon} Title="Saved items" />
            <Sidebaroption Icon={BookmarkBorderIcon} Title="Channel browser" />
            <Sidebaroption Icon={PeopleAltIcon} Title="People & user groups" />
            <Sidebaroption Icon={AppsIcon} Title="Apps" />
            <Sidebaroption Icon={FileCopyIcon} Title="File browser" />
            <Sidebaroption Icon={ExpandLessIcon} Title="Show less" />
            <hr />
            <Sidebaroption Icon={ExpandMoreIcon} Title="Channels" />
            <hr />
            <Sidebaroption Icon={AddIcon} addChannelOption Title="Add channel" />

            {/* Connect to DB and list all channels */}
            {channels.map(channel => (
                <Sidebaroption Title ={channel.name} Id={channel.id}/>
            ))}
        </div>
    )
}

export default Sidebar
