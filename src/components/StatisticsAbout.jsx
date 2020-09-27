import { Grid } from '@material-ui/core'
import React from 'react'

import StudyD from './images/assets/about/desktop/image-team-members.jpg'
import { StatisticsInfo } from './PrinciplesInfo1'
import StatisticCard from './StatisticCard'


function StatisticsAbout() {
    return (
     <Grid container direction='column' >
         <img src={StudyD} alt="Study team members"/>

         <Grid container direction='row'>
             {StatisticsInfo.map((info) => {
                 return ( <StatisticCard key={info.index} title={info.title} text={info.text} />)
             })}
         </Grid>
     </Grid>
    )
}

export default StatisticsAbout
