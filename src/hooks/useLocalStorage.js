import React, { useEffect, useState } from 'react'

function useLocalStorage(key, initialValue) {
    const nameStorage = JSON.parse(localStorage.getItem(key))
    const [name, setName] = useState(nameStorage)
    
    useEffect(() => {
        localStorage.setItem(key, JSON.stringify(name))
    }, [name])
    return [name, setName];
}

export default useLocalStorage
