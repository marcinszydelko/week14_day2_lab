import React from "react";

const SongItem = ({song}) => {
    return (
        <li>
        <b>{song["im:name"].label}</b> - 
        {song["im:artist"].label}
        <br/>
        <audio controls>
            <source src={song.link[1].attributes.href} type="audio/x-m4a"></source>
        </audio>
        </li>
    )
}

export default SongItem;