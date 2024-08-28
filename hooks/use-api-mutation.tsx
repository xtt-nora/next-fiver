"use client";

import { useMutation } from "convex/react";
import { useState } from "react";

export const useApiMutation = (mutationFunction:any)=>{
    const [pending,setPending] = useState(false);
    const apiMutaion = useMutation(mutationFunction);

    const mutate = (payload:any)=>{
            setPending(true);
            return apiMutaion(payload)
            .then((result)=>{
                return result
            })
            .catch((error)=>{
                throw error
            })
            .finally(()=>setPending(false))
    }
    return{
        mutate,
        pending
    }
}