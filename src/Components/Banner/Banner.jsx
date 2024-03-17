import React from 'react';

const Banner = () => {
    return (
        <div className='container'>
            <div className="h-[80%] w-[78%] m-auto rounded-3xl">
                 <img src="https://i.ibb.co/fQDfMhs/banner.jpg" alt="" /> 
            </div>
            <div className="w-2/3 mx-auto -mt-96  text-center text-gray-100">
                <h2 className=' text-3xl font-bold mb-9'>Explore an Discover International Cooking Compitition And Speared Your Talent In World</h2>
                <p className='mb-12'>Lorem ipsum dolor sit amet consectetur adipisicing elit. A quod quia vel quisquam, dignissimos vero! Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eligendi laboriosam animi corporis a fugit odit?</p>
                <div>
                   <button className="btn btn-success rounded-3xl">Explore Now</button>
                   <button className="btn btn-outline btn-success rounded-3xl ml-5 text-gray-100">Our Feedback</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;