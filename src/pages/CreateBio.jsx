import React from 'react'
import { getDatabase , ref , set } from 'firebase/database';
import { app } from "../firebase.js"


function CreateBio() {
    const db = getDatabase(app)

const data =  JSON.parse(localStorage.getItem("user"))

console.log(data?.displayName);

    const user = data?data.displayName:""


const pudata = ()=>{
    set(ref(db,`users/${user}`),{
        // id:data?.uid,
        name:"abhishek",
        
    })
}


    const formsend = () => {
        console.log("KKKK");
        
    }


    return (
        <>
            <form className='*:bg-red-300 *:m-2 p-2' action="" onSubmit={formsend}>
                <input type="file" />
                <input type="text" placeholder='Your Name' />
                <input type="text" placeholder='links' />
                <button onClick={pudata} >done</button>
            </form>
            <button onClick={pudata}>DDD</button>



            <div className="border">
            <p>name: {data?.name}</p>
            <p>email: {data?.email}</p>
            <img src={data?.photoURL}  className="rounded-full" alt="" />
            </div>
        </>
    )
}

export default CreateBio