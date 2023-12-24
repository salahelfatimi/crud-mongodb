import connectMongoDB from "@/libs/mongodb";
import Topic from "@/model/topic";
import { NextResponse } from "next/server";
export async function POST(req){
    const {fullName,job}= await req.json();
    await connectMongoDB();
    await Topic.create({fullName,job})
    return NextResponse.json({message:"Topic Creatd"},{status:201})
}
export async function GET(){
    await connectMongoDB();
    const topics= await Topic.find()
    return NextResponse.json({topics})
}
export async function DELETE(req){
    const id=req.nextUrl.searchParams.get('id');
    await connectMongoDB();
    await Topic.findByIdAndDelete(id);
    return NextResponse.json({message:"Topic Deleted"},{status:200});

}
