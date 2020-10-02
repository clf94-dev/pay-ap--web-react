import {Grid} from '@material-ui/core'
import React from 'react'

import StudyD from './images/assets/about/desktop/image-team-members.jpg'
import {StatisticsInfo} from './PrinciplesInfo1'
import StatisticCard from './StatisticCard'

import './styles/App.css'
function StatisticsAbout() {
    return (
        <Grid container direction='column' className='statistics-cont'>
            <img src={StudyD} alt="Study team members"/>

            <Grid container direction='row' className='statistics-row'>
                <hr className='block-div'/> {StatisticsInfo.map((info) => {
                    return (<StatisticCard
                        key={info.index}
                        title={info.title}
                        text={info.text}
                        delay={info.delay}/>)
                })}
                <hr className='block-div'/>
            </Grid>
        </Grid>
    )
}

export default StatisticsAbout
