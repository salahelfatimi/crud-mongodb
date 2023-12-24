
"use client"
import { useRouter } from "next/navigation"
import { useState } from "react"


export default function Add(){
    const[fullName,setFullName]=useState('')
    const[job,setJob]=useState('')
    const router=useRouter()
    const HandleSubmit = async (e)=>{
        e.preventDefault()

        try{
            const res = await fetch('/api/topics',{
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
           <div className="flex bg-[#00ed64] flex-col gap-8  items-center  justify-center h-screen">
            <div className=" w-1/2 flex flex-col gap-8 text-center">
                <span className="  font-bold text-4xl font-serif text-[#001e2b] ">
                    Add you information
                </span>
                <div className="flex flex-col gap-4">
                    <input type="text" placeholder="Your Name" onChange={(e)=>setFullName(e.target.value)}  className=" border-[#001e2b] placeholder:font-serif  border-2 rounded-lg p-2" />
                    <input type="text"  placeholder=" wath's You Job " onChange={(e)=>setJob(e.target.value)}     className=" placeholder:font-serif border-[#001e2b] border-2 rounded-lg p-2"/>
                    <button type="submit" className=" bg-[#001e2b] p-2 hover:bg-[#00ed64] hover:text-[#001e2b] duration-500 border-4 border-[#001e2b] text-white rounded-lg text-xl font-semibold" >save</button>
                </div>
            </div>
           </div>
        </form>
    )
    }