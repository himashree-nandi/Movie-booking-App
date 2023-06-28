import { TOKEN } from "./constants"

 const isLoggedIn=()=>{
    const token =localStorage.getItem(TOKEN)
    return token!==undefined
}
export default isLoggedIn