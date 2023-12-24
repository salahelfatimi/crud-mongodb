import Link from "next/link";
import { Edit, Trash2 } from "react-feather";

const getData= async()=>{
    try{
        const res= await fetch('https://crud-mongodb-neon.vercel.app/api/topics',{cache:'no-store'})
        if(!res.ok){
            throw new Error('faild to fetch data')
        }

        return res.json()
    }catch(err){
        console.log(err)
    }
}
export default async function DataTablu(){
    
    const {topics}=await getData();
    return(
        <>
        
            <tbody className="bg-[#00ed64]">
            {
                topics.map((ele,index)=>(
                <tr key={index} className=" text-center  ">           
                    <td scope="row" className="px-6 py-4  text-base font-extrabold">{index+1}</td>
                    <td className="py-6 px-4">{ele.fullName}</td>
                    <td className="py-6 px-4">{ele.job}</td>
                    <td className="py-6 px-4 flex gap-4 items-center justify-center">
                    <Link href={`/delet/${ele._id}`}><Trash2 size={30} className=" stroke-blue-600" /></Link>
                    <Link href={`/update/${ele._id}`}><Edit size={30} className="  stroke-red-600"/></Link>
                    </td>
                </tr>
            ))}
            </tbody>
        </>
    )
}