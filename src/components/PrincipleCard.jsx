import { Grid } from '@material-ui/core'
import React from 'react'

function PrincipleCard(props) {
    return (
        <Grid container direction='row'>
          <Grid item sm={4} xs={12}  >
    <h4>{props.title}</h4>
          </Grid>
          <Grid item sm={8} xs={12}  >
    <p>{props.text}</p>
              </Grid>
        </Grid>
    )
}

export default PrincipleCard
