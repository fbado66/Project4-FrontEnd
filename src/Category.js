import React, {Component } from 'react';

class Category extends Component {

    render () {
      let  {title, content, image_url} = this.props.category

        return (
            <div className ='singular-category'>
                < img
                src={image_url} alt='' />
                <h2>{title}</h2>
                <p>{content}</p>
            </div>
        )
        
    }
}

export default Category


