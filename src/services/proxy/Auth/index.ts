import { customAxios } from "@/services/coreService"
let baseUrl = {
    login :"user/login"
}
export const AuthProxy = {
    loginUser :(body:any)=>{
        return customAxios.post(baseUrl.login ,body)
    }
}
