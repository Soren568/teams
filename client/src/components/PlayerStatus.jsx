import React from 'react'
import axios from 'axios';

const PlayerStatus = props => {
    const players = [{name: "John"}]

    const setPlaying = e => {
        e.preventDefault();
        axios.put("http://localhost:8000/players/" + id )
    }
    const setNotPlaying = e => {

    }
    const setUndecided = e => {

    }
    return (
        <div>
            <div className="flex flex-col w-2/3 mx-auto">
            <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                    <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                        <table className="min-w-full divide-y divide-gray-200">
                            <thead className="bg-gray-50">
                                <tr>
                                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                        Name
                                    </th>
                                    <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                                        Actions
                                    </th>
                                </tr>
                            </thead>
                            <tbody className="bg-white divide-y divide-gray-200">
                                {players.map((player, i) => (
                                    <tr key={i}>
                                        <td className="px-6 whitespace-nowrap">
                                            <div className="text-sm text-gray-900 text-left">{player.name}</div>
                                        </td>
                                        <td className="py-5 whitespace-nowrap text-right text-xs font-medium align-bottom pr-3">
                                                <span onClick={e=> setPlaying(e, player)} className="px-7 py-1 border ml-3 rounded">
                                                    Playing
                                                </span>
                                                <span onClick={e=> setNotPlaying(e, player)} className="px-7 py-1 border ml-3 rounded">
                                                    Not Playing
                                                </span>
                                                <span onClick={e=> setUndecided(e, player)} className="px-7 py-1 border ml-3 rounded">
                                                    Undecided
                                                </span>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
        </div>
    )
}

export default PlayerStatus
