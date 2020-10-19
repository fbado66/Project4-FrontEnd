import React from 'react'
import { Route, Switch, Link, NavLink } from 'react-router-dom'


const Category = (props) => {


    let handleClick = () => {
                    //  <Route path="/category/:id" render = {this.renderSpecificCategory} /> 

        // console.log(props.url) 
    }
    console.log(props.url)

    let {title, content, image_url} = props.category

    return (
        <div className ='singular-category'>
            < img
            onClick = {handleClick} src={image_url} />
            <h1>{title}</h1>
            <p>{content}</p>
        </div>
    )
}


export default Category