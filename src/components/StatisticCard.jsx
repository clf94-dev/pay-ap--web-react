import {Grid} from '@material-ui/core'
import React from 'react'

function StatisticCard(props) {
    return (
        <Grid item sm={4} xs={12}>
            <hr/>
            <h3>{props.title}</h3>
            <h1>{props.text}</h1>
            <hr/>
        </Grid>
    )
}

export default StatisticCard;
