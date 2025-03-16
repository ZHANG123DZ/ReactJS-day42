import React, { useEffect, useState } from 'react'

function useDocumentTitle(initialValue) {
    const [title, setTitle] = useState(initialValue);

    useEffect(() => {
        document.title = title;
    }, [title]);
    return[title, setTitle]
}

export default useDocumentTitle
