"use client"
import { useRouter } from "next/navigation"
import { Trash2 } from "react-feather"

export default function Delete({id}){
    const router=useRouter()
    const HandelDelet= async()=>{
        const confirmd=confirm("are you sure ? ")
        if(confirmd){
            const res= await fetch(`api/topics?id=${id}`,{method:"DELETE"})
        if(res.ok){
            router.refresh();
        }
        }
        }
       
    return(
        <>
        <button onClick={HandelDelet}> <Trash2 size={30} className=" stroke-blue-600" /></button>
        </>
    )
}