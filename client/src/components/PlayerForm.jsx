import React, { useState } from 'react'
import axios from 'axios';
import {Link, navigate} from '@reach/router';


const PlayerForm = props => {
    const [name, setName] = useState("");
    const [position, setPosition] = useState("");
    const [errors, setErrors] = useState([])
    const btnText = "Add"

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post("http://localhost:8000/api/players", {name, position})
        .then(res => {
            navigate('/')
        })
        .catch(err => {
            console.error(err.response.data.errors)
            const errorResponse = err.response.data.errors;
            const errorArr = [];
            for(const key of Object.keys(errorResponse)){
                errorArr.push(errorResponse[key].message);
            }
            setErrors(errorArr)
        })
    }    

    return (
        <form onSubmit={handleSubmit} className="bg-gray-100 w-1/3 p-4 rounded-2xl mx-auto mt-9">
            <div className=" flex justify-between mb-8">
                <h1 className="font-extrabold text-2xl text-blue-600">Add a player to the roster... </h1>
                <Link to="/"><span className="px-4 py-2 bg-gray-400 text-white hover:text-gray-700 font-semibold rounded-lg text-xs">Home</span></Link>
            </div>
            <div>
                <label htmlFor="" className="mr-7 font-bold">Player name</label>
            </div>
            <div className="flex ">
                <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 z-10" fill="none" viewBox="0 0 24 24" stroke="gray">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                </div>
                <input onChange={(e) => setName(e.target.value)} value={name} type="text" className=" -ml-10 w-full pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-blue-500" placeholder="Ronaldo" />
            </div>
            <span className="text-red-400 text-xs font-mono ">{errors[0]}</span>
            <div className="mt-5">
                <label htmlFor="" className="mr-7 font-bold">Preferred Position</label>
            </div>
            <div className="flex mb-5">
                <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="gray">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                </div>
                <input onChange={(e) => setPosition(e.target.value)} value={position} className="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-blue-500" placeholder="Forward" />
            </div>
            <div>
                <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-800 hover:text-blue-300 mt-3 items-end focus:ring focus:ring-blue-200 font-bold" >{btnText}</button>
            </div>
        </form>
    )
}


export default PlayerForm
