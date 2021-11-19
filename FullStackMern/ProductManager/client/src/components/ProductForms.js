import React, { useState } from "react";
import axios from "axios";

// eslint-disable-next-line import/no-anonymous-default-export
const ProductForms = (props) => {
    const [ title, setTitle ] = useState("");
    const [ price, setPrice ] = useState("");
    const [ description, setDescription ] = useState("");
    

    const onSubmitHandler = e => {
        e.preventDefault();
        axios.post("http://localhost:8000/api/product/new", {
            title,
            price,
            description
        })
            .then(res=>console.log("Response, ", res))
            .catch(err=>console.log("Error", err))
    }
    return(
        <form onSubmit={onSubmitHandler}>
            <h1>Product Manager</h1>
            <p>
                <label>Title</label>
                <input type="text" onChange={e=>setTitle(e.target.value)} />
            </p>
            <p>
                <label>Price</label>
                <input type="text" onChange={e=>setPrice(e.target.value)} />
            </p>
            <p>
                <label>Description</label>
                <input type="text" onChange={e=>setDescription(e.target.value)} />
            </p>
            <input type="submit" text="Create" />

        </form>
    )

}

export default ProductForms;