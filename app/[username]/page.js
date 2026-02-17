import React from 'react'

const Username = async ({ params }) => {
    const { username } = await params
    return (<>
        <div>Page for user: {username}</div>
    </>
    )
}

export default Username