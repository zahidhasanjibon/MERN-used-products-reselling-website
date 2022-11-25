import { useEffect, useState } from "react"

const UseCheckUserRole = (email) => {
        const [roleName,setRoleName] = useState("")
        const [isRoleLoading,setIsRoleLoading] = useState(true)
    useEffect(() => {
        if(email){
            fetch(`${process.env.REACT_APP_API_URL}/user/checkrole/${email}`)
            .then(res => res.json())
            .then(data => {setRoleName(data.role)
               setIsRoleLoading(false)})
        }
    },[email])

    return [roleName,isRoleLoading]

}
export default UseCheckUserRole