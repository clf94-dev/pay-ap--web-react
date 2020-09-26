import { Grid } from '@material-ui/core'
import React from 'react'

import TerminalD from './images/assets/home/desktop/illustration-easy-to-implement.svg'
import SimpleUID from './images/assets/home/desktop/illustration-simple-ui.svg'

function MiddleHomeCard(props) {
const MiddleImgD = [TerminalD, SimpleUID];

    return (
        <div>
            <Grid item lg={6} md={12} >
    <h2>{props.title}</h2>
    <p>{props.text}</p>
            </Grid>
            <Grid item lg={6} md={12} >
                <img src={MiddleImgD[props.index]} alt={props.alt}/>
            </Grid>
        </div>
        
    )
}

export default MiddleHomeCard
