import { Cookies } from "react-cookie";

export const useToken = (tokenName:string , type:"get" | "set" , valueToken?:string) =>{
    const cookie = new Cookies()
    if(typeof window !== undefined){
        if(type === "set"){
            cookie.set(tokenName , valueToken)
        } else {
            return cookie.get(tokenName)   
        }
    }
}

