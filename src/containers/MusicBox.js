import React, {Component} from 'react'
import MusicList from '../components/MusicList';


class MusicBox extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <h1>Yousef and Paolo</h1>
                <MusicList />
            </div>
        )
    }

}

export default MusicBox;