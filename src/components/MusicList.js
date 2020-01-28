import React from "react";
import MusicBox from "../containers/MusicBox";
import SongItem from "./SongItem";

const MusicList = ({songs}) => {

    const songNodes = songs.map(song => {
        return (
            <SongItem song={song}></SongItem>
        )
    })

    return(
        <div>
           <ol> {songNodes}</ol>
        </div>
    )
}

export default MusicList;