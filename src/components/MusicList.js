import React from "react";
import MusicBox from "../containers/MusicBox";
import SongItem from "./SongItem";

const MusicList = (props) => {
    return(
        <div>
            <h3>Music List </h3>
            <SongItem />
        </div>
    )
}

export default MusicList;