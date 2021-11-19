import React, { useEffect, useState } from 'react'
import axios from 'axios';
import PersonForms from '../components/PersonForrms';
import DeleteButton from '../components/DeleteButton';
import { navigate, Link } from '@reach/router';

const Update = (props) => {
    const { id } = props;
    const [ person, setPerson ] = useState();
    const [ loaded, setLoaded] = useState(false);
    useEffect(() => {
        axios.get('http://localhost:8000/api/people/' + id)
            .then(res => {
                setPerson(res.data);
                setLoaded(true);
            })
    }, [])
    const updatePerson = person => {
        axios.put('http://localhost:8000/api/people/' + id, person) 
            .then(res => console.log(res)); 

    }
            
    return (
        <div>
            <>
            <Link to={"/"}>
                Home
            </Link> 
            </>
            <h1>Update a Person</h1>
            {loaded && (
                <>
                <PersonForms
                    onSubmitProp={updatePerson}
                    initialFirstName={person.firstName}
                    initialLastName={person.lastName}
                />

                <DeleteButton 
                    personId={person._id} 
                    successCallback={() => navigate("/")} 
                />
                </>
            )}
        </div>
    )
}

export default Update;