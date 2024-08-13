import React from 'react'
import ProductCard from './ProductCard'

export default function NewProducts() {

    const productsData = [
        {
            img:"/prod-1.jpg",
            title:"Jacket",
            desc:"Men Yarn Fleece Full-Zip",
            rating:4,
            price:"45.00",
        },
        {
            img:"/skirt.jpg",
            title:"Skirt",
            desc:"Black Floral Wrap Midi Skirt",
            rating:5,
            price:"55.00",
        },
        {
            img:"/party.jpg",
            title:"Party Wear",
            desc:"Women's Party Wear Shoes",
            rating:1,
            price:"25.00",
        },
        {
            img:"/shirt.jpg",
            title:"Shirt",
            desc:"Pure Garment Dyed Cotton Skirt",
            rating:5,
            price:"50.00",
        },
        {
            img:"/menJacket.jpg",
            title:"Jacket",
            desc:"Men Yarn Fleece Full-Zip",
            rating:4,
            price:"45.00",
        },
    ]
  return (
    <div >
        <div className='container pt-16'>
            <h2 className='font-medium text-2xl pb-4'>
                New Products
            </h2>
            <div className='grid grid-cols-1 place-items-center sm:place-items-start sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 xl:gap-x-20 xl:gap-y-10'>
{productsData.map((item,index)=>(
    <ProductCard
    key={index}
    img={item.img}
    title={item.title}
    desc={item.desc}
    rating={item.rating}
    price={item.price}
    />
))}
            </div>
        </div>
    </div>
  )
}
