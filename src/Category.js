import React, {Component } from 'react';

class Category extends Component {

    render () {
      let  {title, content, image_url} = this.props.category

        return (
            <div className ='singular-category'>
                < img
                src={image_url} />
                <h1>{title}</h1>
                <p>{content}</p>
            </div>
        )
        
    }
}

export default Category


// const Category = (props) => {

//     let {title, content, image_url} = props.category
//     return (
//         <div className ='singular-category'>
//             < img
//             src={image_url} />
//             <h1>{title}</h1>
//             <p>{content}</p>
//         </div>
//     )
// }

// export default Category