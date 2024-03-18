import {useEffect, useState} from 'react';
import Recipe from '../Recipe/Recipe';
import PropTypes from 'prop-types';

const Recipes = ({handleAddCooks}) => {
  const [Recipes, setRecipes] = useState([]);

  useEffect( () =>{
    fetch('data.json')
    .then(res => res.json())
    .then(data => setRecipes(data))
  })
  return (
    <div className="grid grid-cols-2 md:grid-rows-1 gap-5">   
       {
        Recipes.map(recipe => <Recipe key={recipe.id} recipe={recipe} handleAddCooks={handleAddCooks}></Recipe>)
       }     
    </div>       
 );
};

Recipes.PropTypes={
    handleAddCooks: PropTypes.func
}
export default Recipes;