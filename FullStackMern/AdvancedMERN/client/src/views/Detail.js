import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Link , navigate} from '@reach/router';
import DeleteButton from '../components/DeleteButton';

const Detail = (props) => {
    const [person, setPerson] = useState({})
    useEffect(() => {
        axios.get("http://localhost:8000/api/people/" + props.id)
            .then(res => setPerson({
                ...res.data
            }))
    }, [])
    return (
        <div>
            <>
                <Link to={"/"}>
                    Home
                </Link>
            </>
            <p>First Name: {person.firstName}</p>
            <p>Last Name: {person.lastName}</p>
            <>
                <Link to={"/" + person._id + "/edit"}>Edit</Link>

                <DeleteButton 
                    personId={person._id} 
                    successCallback={() => navigate("/")} 
                />
            </>
        </div>
    )
}

export default Detail;