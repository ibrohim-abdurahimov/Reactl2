import React from 'react'
import "./Product.scss"
import card1 from "../../assets/card 1.png"
import card2 from "../../assets/card 2.png"
import card3 from "../../assets/card 3.png"
import card4 from "../../assets/card 4.png"
import card5 from "../../assets/card 5.png"
import card6 from "../../assets/card 6.png"
import stars from "../../assets/Stars.svg"

const PRODUCTS = [
    {
        id:1,
        title: "Apple Smart I",
        star: stars,
        price: "$300.00",
        discount: "$255.00",
        image: card1
    },
    {
        id:2,
        title: "Apple Smart II",
        star: stars,
        price: "$300.00",
        discount: "$255.00",
        image: card2
    },
    {
        id:3,
        title: "Apple Smart I",
        star: stars,
        price: "$300.00",
        discount: "$255.00",
        image: card3
    },
    {
        id:4,
        title: "Apple Smart I",
        star: stars,
        price: "$450.00",
        discount: "$399.00",
        image: card4
    },
    {
        id:5,
        title: "Apple Smart I",
        star: stars,
        price: "$300.00",
        discount: "$255.00",
        image: card5
    },
    {
        id:6,
        title: "Apple Smart I",
        star: stars,
        price: "$220.00",
        discount: "$155.00",
        image: card6
    },
]

const Product = () => {
    const product = PRODUCTS?.map((product)=>(
        <div className="products__card">
            <div className="products__img">
                <img src={product.image} alt={product.title} />
            </div>
            <div className="products__body">
                <div className="products__name">{product.title}</div>
                <div className="products__icons">
                    <img src={product.star} alt="" />
                </div>
                <div className="products__price">
                    <p>{product.price}</p>
                    <strong>{product.discount}</strong>
                </div>
            </div>
        </div>
    ))
  return (
    <section className="products">
        <p className="products__subtitle">
            Find your favourite smart watch.
        </p>
        <h3 className="products__title">
            Our Latest Products 
        </h3>
        <div className="container">
            <div className="products__wrapper">
                {product}
            </div>
        </div>
    </section>
  )
}

export default Product