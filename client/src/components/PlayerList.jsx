import React, {useEffect} from 'react';
import axios from 'axios';
import DeleteButton from './DeleteButton';


const PlayerList = props => {
    const {players, domChange, setDomChange} = props;
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
                                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                        Preferred Position
                                    </th>
                                    <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                                        Actions
                                    </th>
                                </tr>
                            </thead>
                            <tbody className="bg-white divide-y divide-gray-200">
                                {props.players.map((player, i) => (
                                    <tr key={i}>
                                        <td className="px-6 whitespace-nowrap">
                                            <div className="text-sm text-gray-900 text-left">{player.name}</div>
                                        </td>
                                        <td className="px-6 whitespace-nowrap">
                                            <div className="text-sm text-gray-900 text-left">{player.position}</div>
                                        </td>
                                        <td className="py-5 whitespace-nowrap text-right text-sm font-medium align-bottom pr-3">
                                                <span className="text-blue-500 bg-transparent border border-blue-500 hover:bg-blue-500 hover:text-white active:bg-blue-600 font-bold uppercase text-xs px-4 py-2 rounded-lg outline-none focus:outline-none mb-1 ease-linear transition-all duration-150">
                                                    <DeleteButton id={player._id} successCallback={e => setDomChange(!domChange)}/>
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

export default PlayerList
