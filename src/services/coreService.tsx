import { Api } from "@/settings/configApi"
import axios from "axios"
import { useMutation, useQuery } from "react-query"
//Get Data
export const useFetching = (label :string ,fetchFunction:any)=>{
    const {data , isLoading , isFetching , isSuccess , refetch} = useQuery(label , fetchFunction())
    return {
        data , 
        isLoading,
        isFetching,
        isSuccess,
        refetch
    }
}

// Post , Put , Delete 
export const useMutate = (mutateFunction:any)=>{
    const {data , mutate , mutateAsync , isLoading , isSuccess} = useMutation(mutateFunction())
    return {
        data ,
        mutate,
        mutateAsync,
        isLoading,
        isSuccess
    }
}


export const customAxios  = axios.create({
    baseURL:Api.baseUrl
})



