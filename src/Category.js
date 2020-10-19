import React from 'react'

const Category = (props) => {

    let {title, content, image_url} = props.category

    return (
        <div className ='singular-category'>
            <img src={image_url} />
            <h1>{title}</h1>
            <p>{content}</p>
        </div>
    )
}

export default Category