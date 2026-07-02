import React, { useEffect, useEffectEvent, useState } from 'react'

function Github() {
    const [data, setData] = useState([])
    useEffect(() => {
        fetch('https://api.github.com/users/krishs2007')
        .then(response => response.json())
        .then(data => {
            console.log(data)
        })
    }, [])
    return (
        <div className='text-center m-4 bg-gray-600 text-white p-4 text-3xl'>Github followers: {data.followers}
        <img src={data.avatar.url} className='text-center' alt="Git Picture" width={300}/>
        </div>
    )
}

export default Github