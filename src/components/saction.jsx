
import Link from "next/link";
import { Edit, Trash2 } from "react-feather";
import DataTablu from "./dataTablu";

export default function Saction() {
  return (
    <>
    <div className="relative overflow-x-auto container pt-8  ">
    <table className="w-full text-sm text-left rtl:text-right   ">
       <thead className="bg-[#001e2b] text-white " >
           <tr className=" text-center   font-bold ">
              <th scope="col" className="px-6 py-3">id</th>
              <th scope="col" className="px-6 py-3">full name</th>
              <th scope="col" className="px-6 py-3">job</th>
              <th scope="col" className="px-6 py-3">action</th>
           </tr>
       </thead>
       <DataTablu/>
    </table>
  
    </div>
    </>
  );
}
