"use client"

import { useConvexAuth, useMutation } from "convex/react";
// import { GigList } from "./_components/gig-list";
import { useUser } from "@clerk/nextjs";
import { useEffect, useState } from "react";
import { Id } from "@/convex/_generated/dataModel";
import { api } from "@/convex/_generated/api";
import { useRouter } from "next/navigation";
interface DashboardType{
    searchParams:{
        search?:string;
        favorites?:string;
        filter?:string;
    }
}
const Dashboard = ({
    searchParams
}:DashboardType)=>{
    return (
        <div>Hi</div>
    )
}
export default Dashboard