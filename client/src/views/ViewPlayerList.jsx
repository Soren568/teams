import React,{useState, useEffect} from 'react'
import {Link} from '@reach/router';
import PlayerList from '../components/PlayerList';
import axios from 'axios';


const ViewPlayerList = props => {
    const [players, setPlayers] = useState([]);
    const [domChange, setDomChange] = useState(false)
    useEffect(() => {
        axios.get("http://localhost:8000/api/players")
            .then(res => {
                console.log("%c All players", "color: turquoise; font-size: 1rem")
                console.table(res.data.players)
                setPlayers(res.data.players)
            })
            .catch(err => {
                console.error(err)
            })
    }, [])

    return (
        <>
        <div className="container border-4 w-8/12 h-screen mx-auto">
            <div>
                <p className="text-left text-2xl font-medium text-blue-700"><Link to="/">Manage Players</Link> | <Link to="players/game/1"> Manage Player Status</Link></p>
            </div>
            <div className="flex ml-36">
                <Link to="/" className="px-4 py-2 bg-blue-500 text-white rounded-l hover:bg-blue-800 hover:text-blue-300 mt-3 items-end focus:ring focus:ring-blue-200">List</Link>
                <Link to="/players/new"><button className="px-4 py-2 bg-blue-500 text-white rounded-r hover:bg-blue-800 hover:text-blue-300 mt-3 items-end focus:ring focus:ring-blue-200">Add player</button></Link>
            </div>
            <PlayerList players={players} domChange={domChange} setDomChange={setDomChange}/>
        </div>
        </>
    )
}

export default ViewPlayerList
