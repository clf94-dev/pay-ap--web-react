import { Grid } from '@material-ui/core'
import React from 'react'
import MiddleHomeCard from './MiddleHomeCard'
import { MiddleHomeInfo } from './MiddleHomeInfo'

function MiddleHome() {
    return (
        <Grid container direction='row'>
            {MiddleHomeInfo.map((info) => {
                return (
                    <MiddleHomeCard title={info.title} key={info.index} index={info.index} text={info.text}  alt={info.imgALT} />             )
            })}
        </Grid>
    )
}

export default MiddleHome
