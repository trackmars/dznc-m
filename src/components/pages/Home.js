import React from 'react';
import Hero1 from '../hero/Hero1';
import Hero2 from '../hero/Hero2';
import Hero3 from '../hero/Hero3';
import './home.css?v=12931';


class Home extends React.Component {
    render() {
        return(
                <div className="home-wrapper">
                    <Hero1 />
                    <Hero2/>
                    <Hero3 />
                </div>
        )
     }
}

export default Home;