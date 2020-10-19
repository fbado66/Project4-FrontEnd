import React from 'react'
import Category from './Category'


const CategoryList = (props) => {
    
    let arrayOfCategories = props.categories.map((category) => {
        return <Category 
                url = {props.taco}
                key = {category.id}
                category = {category}
                />
                
    })

    return (
        <div className ='card-category'>
            {arrayOfCategories}
        </div>
    )
}

export default CategoryList;