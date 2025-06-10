import React,{useEffect} from 'react'

function useTitle(num) {

    useEffect(() => {
        document.title = `Sayı ${num}`;
    }, [num]);

    return (
        <div>useTitle</div>
    )
}

export default useTitle