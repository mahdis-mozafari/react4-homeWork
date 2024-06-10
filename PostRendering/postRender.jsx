import {useEffect, useState} from "react";

 export function Posting() {
    const [show, setShow]= useState(null)

    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then((res)=>{
            return res.json();
        })
        .then((data)=>{
            setShow(data);
        });
    },[]);

    return show?(
 
    <ul>
        {show.map((value,i)=>{
            return <li key={i}>{value.id} : {value.title}</li>
        })}
    </ul>
 
    ):null;
}

