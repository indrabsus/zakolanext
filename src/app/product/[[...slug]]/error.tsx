'use client'

import { useEffect } from "react"

export default function Error({
    error,
    reset
}: {error: Error; reset: void}){

    useEffect(() => {
        // Log the error to an error reporting service
        console.error(error)
    }, [error]);
    return (
        <div className="flex justify-center items-center h-screen mx-auto">
            <p className="text-3xl font-bold">Failed to load data!</p>
        </div>
    )
}