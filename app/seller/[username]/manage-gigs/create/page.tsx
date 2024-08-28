"use client"
import { useMutation } from 'convex/react';
import { CreateForm } from './_components/create-from';
import { api } from '@/convex/_generated/api';
import { useEffect } from 'react';

interface CreateGigProps{
    params:{
        username:string;
    }
}

const CreateGig = ({params}:CreateGigProps) =>{
    // const insertCategores = useMutation(api.seedCategories.create)
    const insertSubCategores = useMutation(api.seedSubcategories.create)
    useEffect(()=>{
        // insertCategores({})
        insertSubCategores({})
    })
    return (
        <div className="flex justify-center">
            <CreateForm  username={params.username}/>
        </div>
    )
}
export default CreateGig;