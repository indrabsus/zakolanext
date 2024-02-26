"use client"

import { useState } from 'react';
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function LoginPage() {
    const { push } = useRouter();
    const [errorMessage, setErrorMessage] = useState("");

    const handleLogin = async (e: any) => {
        e.preventDefault();

        const username = e.currentTarget.username.value;
        const password = e.currentTarget.password.value;

        if (!username || !password) {
            setErrorMessage("Username and password are required.");
            return;
        }

        const login = await fetch('http://skuliodigital.test/api/login', {
            cache: 'no-store',
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                username: username,
                password: password
            })
        });

        const data = await login.json();

        if (data.data.token) {
            localStorage.setItem('token', data.data.token);
            localStorage.setItem('role', data.data.data.nama_role);
            push('/admin');
        } else {
            setErrorMessage(data.errors ? data.errors.join(", ") : "Login Failed");
        }
    }

    return (
        <div className="flex justify-center items-center h-screen mx-auto">
            <div className="bg-gray shadow-md border border-gray-200 rounded-lg max-w-sm p-4 sm:p-6 lg:p-8 dark:bg-gray-800 dark:border-gray-700 w-full">
                <form className="space-y-6" onSubmit={(e)=>handleLogin(e)}>
                    <h3 className="text-xl font-medium text-gray-900 dark:text-white">Sign in to our platform</h3>
                    <div>
                        <label htmlFor="username" className="text-sm font-medium text-gray-900 block mb-2 dark:text-gray-300">Your Username</label>
                        <input 
                            type="username" name="username" id="username" 
                            className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" 
                            placeholder="username" 
                        />
                    </div>
                    <div>
                        <label htmlFor="password" className="text-sm font-medium text-gray-900 block mb-2 dark:text-gray-300">Your password</label>
                        <input 
                            type="password" name="password" id="password" 
                            placeholder="••••••••" 
                            className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" 
                        />
                    </div>
                    {errorMessage && (
                        <div className="text-red-500 text-sm font-medium">{errorMessage}</div>
                    )}
                    <button 
                        type="submit" 
                        className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    >
                        Login to your account
                    </button>
                    <div className="text-sm font-medium text-gray-500 dark:text-gray-300">
                        Not registered? <Link href="/register" className="text-blue-700 hover:underline dark:text-blue-500">Create account</Link>
                    </div>
                </form>
            </div>
        </div>
    );
}
