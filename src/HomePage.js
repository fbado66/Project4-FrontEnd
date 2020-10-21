import React, {Component } from 'react'
// import CategoryList from './CategoryList'


class HomePage extends Component {

    state = {
        categories: []
    }
    
    
    componentDidMount(){
        fetch("http://localhost:3000/categories")
            .then(res => res.json())
            .then((arrayOfCategories) => {
                this.setState( {
                categories: arrayOfCategories
                })
            })
    }



    render () {

        return (
            <div>
                <h1> Home Component</h1>
                <div className ='home-image'>
                    <div className="hero-text">
                        <h1>Go Near</h1>
                        <p>Settle in somewhere new. Discover stays to live, work, or just relax</p>
                    </div>
                </div>

                <div className = 'filler-home'>
                    <div className ='filler-header'>Online Experiences: Field Trips</div>
                    <p className= 'filler-text'>Due to Covid-19 Our team at DuckBnb has paused Field Trips <br/>
                    We will keep you inform on any upcoming changes</p>
                    <div className = 'filler-images'>
                        <div className ='filler-1'>
                            <img className = 'filler-mainImg' src = 'https://a0.muscache.com/im/pictures/4e1d29d2-5148-444d-945d-c278121675a3.jpg?im_w=1200' />
                            <p>Decode the science of 2020 with Bill Nye</p>
                        </div>
                    </div>

                </div>
                <div className = 'category-homepage'>
                    
                </div>
    
            </div>
        )
    }
    

}

export default HomePage