import { useState } from "react"
import { useAuthContext } from "./useAuthContext"

export const useLogin = () => {
    const [error, setError] = useState(null)
    const [isLoading, setIsLoading] = useState(null)

    const { dispatch } = useAuthContext()

    const login = async (email, password) => {
        // set states
        setError(null)
        setIsLoading(true)

        // send API request
        const response = await fetch('/api/user/login', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({email, password})
        })

        const json = await response.json()

        // check response
        if (!response.ok){
            setIsLoading(false)
            setError(json.error)
        }
        if (response.ok){
            // set user in local storage
            localStorage.setItem('user', JSON.stringify(json))

            // dispatch login auth context
            dispatch({type: 'LOGIN', payload: json})

            setIsLoading(false)
        }
    }

    return { login, isLoading, error }
}