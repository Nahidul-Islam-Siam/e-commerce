import Image from 'next/image'
import React from 'react'
import { BsFillStarFill } from 'react-icons/bs';
import { HiOutlineStar } from 'react-icons/hi';

export default function ProductCard({ img, title, desc, rating, price }) {

 const generateRating = (rating)=>{
    switch (rating){
        case 1:
           return(
            <div className='flex gap-1 text-[20px] text-[#FF9529]'>
                <BsFillStarFill/>
                <HiOutlineStar/>
                <HiOutlineStar/>
                <HiOutlineStar/>
                <HiOutlineStar/>

            </div>
           );
           case 2:
           return(
            <div className='flex gap-1 text-[20px] text-[#FF9529]'>
                <BsFillStarFill/>
                <BsFillStarFill/>
                <HiOutlineStar/>
                <HiOutlineStar/>
                <HiOutlineStar/>

            </div>
           );
           case 3:
           return(
            <div className='flex gap-1 text-[20px] text-[#FF9529]'>
                <BsFillStarFill/>
                <BsFillStarFill/>
                <BsFillStarFill/>
                <HiOutlineStar/>
                <HiOutlineStar/>

            </div>
           );
           case 4:
           return(
            <div className='flex gap-1 text-[20px] text-[#FF9529]'>
                <BsFillStarFill/>
                <BsFillStarFill/>
                <BsFillStarFill/>
                <BsFillStarFill/>
                <HiOutlineStar/>

            </div>
           );
           case 5:
           return(
            <div className='flex gap-1 text-[20px] text-[#FF9529]'>
                <BsFillStarFill/>
                <BsFillStarFill/>
                <BsFillStarFill/>
                <BsFillStarFill/>
                <BsFillStarFill/>

            </div>
           );

    }
 };
    return (
        <div className='px-4 border border-gray-200 rounded-xl max-w-[400px]'>
            <div>
                <Image className='w-full h-auto' src={img} alt={title} height={300} width={200} />
            </div>
            <div className='space-y-2 py-2'>
                <h2 className='text-accent font-medium uppercase'>{title}</h2>
                <p className=' text-gray-500 max-w-[150px]'>{desc}</p>
<div>
    {generateRating(rating)}
</div>
<div className='font-bold flex gap-4'>
    ${price}
    <del>${parseInt(price) + 50}.00</del>
</div>
            </div>

        </div>
    )
}
