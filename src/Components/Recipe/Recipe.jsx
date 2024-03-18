import PropTypes from 'prop-types'; // ES6
import { IoTimeOutline } from "react-icons/io5";
import { BsDroplet } from "react-icons/bs";


const Recipe = ({recipe, handleAddCooks}) => {
    const {recipe_name, recipe_image, short_description,ingredients, preparing_time, calories} = recipe;
    return (
        <div>
                                       
           <div className="card w-96 bg-base-100 shadow-xl">
              <figure className="px-10 pt-10 ">
                 <img src={recipe_image} alt={`image if the title ${recipe_name}`} class="rounded-xl" />
              </figure>
              <h2 className="text-2xl font-bold mt-5 mb-3 px-5"> {recipe_name} </h2>                  
              <p className='text-gray-400 mb-6 px-5'>{short_description}</p>
              <hr />
              <p className='text-gray-900 text-2xl p-5 font-semibold'>Ingredients: {ingredients.length}</p>
              <div className="text-gray-400 text-xl px-5 mb-5">
                  {
                    ingredients.map((ingredient, idx) => <li key={idx}><a href="">{ingredient}</a></li>                    )
                  }
              </div>
              <hr />
              <div className="flex justify-evenly align-middle mt-5">
                  <div className="flex justify-center align-middle">
                      <span><IoTimeOutline></IoTimeOutline></span>
                      <span className='ml-2'> {preparing_time} minites</span>
                  </div>
                  <div className="flex justify-center align-middle ">
                      <span><BsDroplet></BsDroplet></span>
                      <span className='ml-2'> {calories} Calories</span>
                  </div>
              </div>

                <div className="card-actions m-5 rounded-3xl">
                  <button onClick={() => handleAddCooks(recipe)} className="btn btn-primary px-5">  Want To Cook</button>
                </div> 
            </div>

         </div>
        
    );
};
 
Recipe.PropTypes ={
    recipe: PropTypes.object.isRequired,
    handleAddCooks: PropTypes.func
}
export default Recipe;