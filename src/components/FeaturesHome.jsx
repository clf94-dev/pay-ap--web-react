import { Grid } from '@material-ui/core'
import React from 'react'
import FeaturesCard from './FeaturesCard'
import { FeaturesHomeInfo } from './FeaturesHomeInfo'

import './styles/App.css'

function FeaturesHome() {
    return (
       <Grid container direction='row' className='features-cont'>
           {FeaturesHomeInfo.map((info) => {
               return( <FeaturesCard key={info.index} index={info.index} title={info.title}text={info.text} alt={info.imgALT} /> )
        })}
       </Grid>
    )
}

export default FeaturesHome
