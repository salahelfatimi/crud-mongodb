import connectMongoDB from "@/libs/mongodb";
import Topic from "@/model/topic";
import { NextResponse } from "next/server";

export async function PUT(req,{params}){
    const {id}=params;
    const {newFullName:fullName,newJob:job}= await req.json()
    await connectMongoDB();
    await Topic.findByIdAndUpdate(id,{fullName,job})
    return NextResponse.json({message:"Topic updated"}, {status:200})


}
export async function GET(req,{params}){
    const {id}=params;
    await connectMongoDB();
    const topics= await Topic.findOne({_id:id})
    return NextResponse.json({topics}, {status:200})
}