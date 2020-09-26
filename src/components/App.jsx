import React from 'react'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

import Home from './pages/Home'
import Contact from './pages/Contact'
import About from './pages/About'
import Pricing from './pages/Pricing'
import Navbar from './Navbar'
import TopHome from './TopHome'
import Cta from './Cta'
import Footer from './Footer'

function App() {
    return (
        <div>
            <Router>
                <Navbar/>
          
                <Switch>

                    <Route path='/' exact component={Home}></Route>
                    <Route path='/pricing' component={Pricing}></Route>
                    <Route path='/about' component={About}></Route>
                    <Route path='/contact' component={Contact}></Route>

                </Switch>
                <Cta/>
                <Footer/>
            </Router>
        </div>
    )
}

export default App