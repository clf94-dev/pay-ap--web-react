import React from 'react'
import Companies from '../Companies'
import MiddleHome from '../MiddleHome'
import TopHome from '../TopHome'

function Home() {
    return (
        <div>
            <TopHome />
            <Companies/>
            <MiddleHome/>
        </div>
    )
}

export default Home;
