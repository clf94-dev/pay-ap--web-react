import React from 'react'
import Companies from '../Companies'
import FeaturesHome from '../FeaturesHome'
import MiddleHome from '../MiddleHome'
import TopHome from '../TopHome'

function Home() {
    return (
        <div>
            <TopHome />
            <Companies/>
            <MiddleHome/>
            <FeaturesHome/>
        </div>
    )
}

export default Home;
