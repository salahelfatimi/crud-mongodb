'use client'
import { useRouter } from 'next/router'
import EditeForm from "@/components/editeForm"
const getDataById=async(id)=>{
    try{
        const res =await fetch(`/api/topics/${id}`,{cache:"no-store"})
        if(!res.ok){
            throw new Error('failed to fetch by id')
        }
        return res.json()
    }catch(err){
        console.log(err)
    }
}

export default  function Edit(){
    const router = useRouter()
    const id=router.query.id
    const {topics}= getDataById(id)
    console.log(topics)
    return <EditeForm />
    
}