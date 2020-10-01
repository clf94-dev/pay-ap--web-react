import {Grid} from '@material-ui/core'
import React from 'react'
import PricingCard from '../PricingCard'
import {PricingData} from '../PricingData'
import TopPricing from '../TopPricing'

function Pricing() {
    return (
        <div>
            <TopPricing/>
            <Grid container direction='row'>
                {PricingData.map(data => {
                    return (<PricingCard
                        key={data.index}
                        title={data.title}
                        text={data.text}
                        price={data.price}
                        checkTrans={data.transTick}
                        checkAuth={data.authTick}
                        checkIdent={data.identTick}
                        checkInvest={data.investTick}
                        checkAssets={data.assetsTick}
                        checkLiabil={data.liabilitTick}
                        checkInc={data.incoTick}/>)
                })}
            </Grid>
        </div>
    )
}

export default Pricing
