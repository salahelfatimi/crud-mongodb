'use client'

import { useRouter } from "next/navigation"
import { useState } from "react"

export default function Edit(){
    const{fullName,setFullName}=useState('')
    const{job,setJob}=useState('')
    const router=useRouter()
    const HandleSubmit = async (e)=>{
        e.preventDefault()
        try{
            const res = await fetch('http://localhost:3000/api/topics',{
                method:"POST",
                headers:{
                    "Content-type":"application/json"
                },
                body: JSON.stringify({fullName,job})
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
        <form onSubmit={HandleSubmit}>
            <div className="flex bg-blue-500 flex-col gap-8  items-center  justify-center h-screen">
            <div className=" w-1/2 flex flex-col gap-8 text-center">
                <span className="  font-bold text-4xl font-serif text-[#001e2b] ">
                    Update you information
                </span>
                <div className="flex flex-col gap-4">
                    <input type="text" onChange={(e)=>setFullName(e.target.value)} value={fullName} placeholder="Your Name" className=" border-[#001e2b] placeholder:font-serif  border-2 rounded-lg p-2" />
                    <input type="text" onChange={(e)=>setJob(e.target.value)}   value={job} placeholder=" wath's You Job " className=" placeholder:font-serif border-[#001e2b] border-2 rounded-lg p-2"/>
                    <button type="submit" className=" bg-[#001e2b] p-2 hover:bg-blue-500  hover:text-white duration-500 border-4 border-[#001e2b] text-white rounded-lg text-xl font-semibold" href="/"><button >Update</button></button>
                </div>
            </div>
           </div>
        </form>
    )
}