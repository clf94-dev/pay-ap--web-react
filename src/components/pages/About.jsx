import React from 'react'
import PrincipleCard from '../PrincipleCard'
import {PrinciplesInfo1, PrinciplesInfo2} from '../PrinciplesInfo1'
import StatisticsAbout from '../StatisticsAbout'
import TopAbout from '../TopAbout'

function About() {
    return (
        <div>
            <TopAbout/> {PrinciplesInfo1.map((principle1) => {
                return (<PrincipleCard
                    key={principle1.index}
                    title={principle1.title}
                    text={principle1.text}
                    delayT={principle1.delayT}
                    delayt={principle1.delayt}/>)
            })}
<StatisticsAbout/>

            {PrinciplesInfo2.map((principle1) => {
                return (<PrincipleCard
                    key={principle1.index}
                    title={principle1.title}
                    text={principle1.text}
                    delayT={principle1.delayT}
                    delayt={principle1.delayt}/>)
            })}
        </div>
    )
}

export default About
