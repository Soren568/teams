import { navigate } from '@reach/router';
import axios from 'axios';
import React from 'react'

const DeleteButton = props => {
    const{ id } = props;
    const handleClick = e => {
        axios.delete('http://localhost:8000/api/players/' + id)
            .then(res => {
                console.log(res)
                navigate('/');
            })
            .catch( err => {
                console.log(err)
            })
    }
    return (
        <button onClick={handleClick} className="uppercase text-xs font-bold">Delete</button>
    )
}

export default DeleteButton
