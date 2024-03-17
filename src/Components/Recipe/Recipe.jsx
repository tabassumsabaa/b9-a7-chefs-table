import React from 'react';

const Recipe = () => {
  return (
    <div className="">    
        <div className='flex gap-4'>
            {/* card one*/}
           <div class="card w-96 bg-base-100 shadow-xl">
              <figure class="px-10 pt-10">
                 <img src="https://i.ibb.co/D1JvH7H/fruits.jpg" alt="Shoes" class="rounded-xl" />
              </figure>
              <div class="card-body items-center text-center">
                <h2 class="card-title">Shoes!</h2>
                <p>If a dog chews shoes whose shoes does he choose?</p>
                <div class="card-actions">
                  <button class="btn btn-primary">Buy Now</button>
                </div>          
              </div>     
            </div>

             {/* card two*/}
           <div class="card w-96 bg-base-100 shadow-xl">
              <figure class="px-10 pt-10">
                 <img src="https://i.ibb.co/Xk1Y5ZW/chiken-meal.jpg" alt="Shoes" class="rounded-xl" />
              </figure>
              <div class="card-body items-center text-center">
                <h2 class="card-title">Shoes!</h2>
                <p>If a dog chews shoes whose shoes does he choose?</p>
                <div class="card-actions">
                  <button class="btn btn-primary">Buy Now</button>
                </div>          
              </div>     
            </div>
        </div>




    </div>       
 );
};

export default Recipe;