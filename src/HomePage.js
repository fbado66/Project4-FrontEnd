import React, {Component } from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import StatementFooter from './StatementFooter'
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
              
                <div className ='home-image'>
                    <div className="hero-text">
                        <h1>Go Near</h1>
                        <p>Settle in somewhere new. Discover stays to live, work, or just relax</p>
                    </div>
                </div>




                <div className = 'filler-home'>
                    <Row> 
                        <div className ='filler-header'>Online Experiences: Field Trips</div>
                    </Row>

                    <Row> 
                        <p className= 'filler-text'>Due to Covid-19 Our team at DuckBnb has paused Field Trips <br/>
                        We will keep you inform on any upcoming changes</p>
                    </Row>

                    <div className="grid-container2">
                        <div className="avatar">
                            <div className = 'filler-card-avatar'>
                                <img className = 'avatar-image'src ="https://media.moddb.com/cache/images/groups/1/19/18020/thumb_620x2000/Katara_Sokka_Aang_Momo_Appa.jpg" />
                                <p className= 'filler-text-avatar'>Join the Code Bender in a new journey as they coming close to graduation date</p>
                            </div>
                        </div>

                        <div className="filler-1">
                            <div className = 'filler-card'>
                                <img className ='filler-image'src = 'https://a0.muscache.com/im/pictures/4e1d29d2-5148-444d-945d-c278121675a3.jpg?im_w=480' />
                                <p className= 'filler-text'>Decode the science of 2020 with Bill Nye</p>
                            </div>
                        </div>


                        <div className="filler-2">
                            <div className = 'filler-card'>
                                <img className ='filler-image' src = "https://a0.muscache.com/im/pictures/5d6ee25d-0d8e-472a-b8e7-56bb498b1403.jpg?im_w=480" />
                                <p className= 'filler-text'>Discover Buenos Aires street art and sketch</p>
                            </div>
                        </div>

                        <div className="filler-3">
                            <div className = 'filler-card-wide'>
                                <img className ='filler-image' src= "https://a0.muscache.com/im/pictures/c4975e3c-32c2-4bca-9bc7-25a3e69ea341.jpg?im_w=480" />
                                <p className = 'filler-text'>Go on a leopard safari in Sri Lanka</p>
                            </div>
                        </div>
                    </div>
                </div>

                <StatementFooter />

                
            </div>
        )
    }
    

}

export default HomePage