'use client'

import { useEffect } from "react"
import {isLoggedIn, logout} from "@/lib/utils/auth"
import { useRouter } from "next/navigation"


// console.log(localStorage.getItem('token'))
export default function AdminPage() {
    const { push } = useRouter()
    const handleLogout = () => {
        logout()
        push('/login')
    }
    useEffect(() => {
        if(!isLoggedIn()){
            push('/login')
        } 
    })
    return (
        <div>
            <h1>Admin Page</h1>
            <button onClick={handleLogout}>Logout</button>
        </div>
    )
}