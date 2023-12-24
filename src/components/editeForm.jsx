"use client"

import { useState } from "react"

export default function EditeForm({id,fullName,job}){
    const [newjob,setNewjob]=useState(job)
    const [newfullName,setNewfullName]=useState(fullName)
    const HandleSubmit = async (e)=>{
        e.preventDefault()

        try{
            const res = await fetch(`/api/topics/${id}`,{
                method:"PUT",
                headers:{
                    "Content-type":"application/json"
                },
                body: JSON.stringify({newfullName,newjob})
              
            });
            if(res.ok){
                router.push('/')
            }else{
                throw new Error('Failed to Update data')
            }
        }catch(err){
            console.log(err)
        }
    }

    return(
        <>
         <form onSubmit={HandleSubmit} >
            <div className="flex bg-blue-500 flex-col gap-8  items-center  justify-center h-screen">
            <div className=" w-1/2 flex flex-col gap-8 text-center">
                <span className="  font-bold text-4xl font-serif text-[#001e2b] ">
                    Update you information
                </span>
                <div className="flex flex-col gap-4">
                    <input onChange={(e)=>setNewfullName(e.target.value)} value={newfullName} type="text"  placeholder="Your Name" className=" border-[#001e2b] placeholder:font-serif  border-2 rounded-lg p-2" />
                    <input onChange={(e)=>setNewjob(e.target.value)} value={newjob} type="text"  placeholder=" wath's You Job " className=" placeholder:font-serif border-[#001e2b] border-2 rounded-lg p-2"/>
                    <button type="submit" className=" bg-[#001e2b] p-2 hover:bg-blue-500  hover:text-white duration-500 border-4 border-[#001e2b] text-white rounded-lg text-xl font-semibold" href="/">Update</button>
                </div>
            </div>
           </div>
        </form>
        </>
    )
}