import { Grid } from '@material-ui/core'
import React from 'react'
import MiddleHomeCard from './MiddleHomeCard'
import { MiddleHomeInfo } from './MiddleHomeInfo'


import './styles/App.css'
function MiddleHome() {
    return (
        <Grid container direction='row' className='middle-cont' >
            {MiddleHomeInfo.map((info) => {
                return (
                    <MiddleHomeCard classes={info.classes} title={info.title} key={info.index} index={info.index} text={info.text}  alt={info.imgALT} />             )
            })}
        </Grid>
    )
}

export default MiddleHome;
