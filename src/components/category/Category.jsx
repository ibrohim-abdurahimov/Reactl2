import React from 'react'
import "./Category.scss"
import category1 from "../../assets/category 1.png"
import category2 from "../../assets/category 2.png"
import category3 from "../../assets/category 3.png"

const CATEGORY = [
    {
        id: 1,
        title: "Apple",
        desc: "Apple is one of the most famous smart watches providing company.",
        image: category1
    },
    {
        id: 2,
        title: "Xiaomi",
        desc: "Xiaomi smart watches are produced by MI company.",
        image: category2
    },
    {
        id: 3,
        title: "FitBit",
        desc: "FitBit smart watches are best for there health and fitness features.",
        image: category3
    }
]

const Category = () => {
    const categories = CATEGORY?.map((category)=>(
        <div key={category.id} className="category__card">
            <img src={category.image} alt={category.title} />
            <div className="category__text">
                <h3 className="category__title">{category.title}</h3>
                <p className="category__desc">{category.desc}</p>
            </div>
        </div>
    ))
  return (
    <section className="category">
        <div className="container">
            <div className="category__wrapper">
                {categories}
            </div>
        </div>
    </section>
  )
}

export default Category