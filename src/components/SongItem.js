import React from "react";

const SongItem = ({song}) => {
    return (
    <li>
    <b>{song["im:name"].label}</b> - 
    {song["im:artist"].label}
    </li>
    )
}

export default SongItem;