import React from "react";
import { useParams } from "react-router-dom";

export default function RecipeDetails({ data }) {
  const { id } = useParams();
  const recipe = data.find((item) => item.id === parseInt(id));

  if (!recipe) {
    return <p>Recipe not found.</p>;
  }

  return (
    <div className="grid place-items-center h-screen" >
      <div className="flex flex-col items-center rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700  mt-11 p-6">
        <img className="rounded-t-lg mb-4" src={recipe.photo} alt="Recipe" />
        <h5 className="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
          {recipe.name}
        </h5>
        <div className="flex flex-col mb-4">
          <h3 className="mb-2 text-lg font-medium">Instructions:</h3>
          <ul className="list-none pl-6">
            {recipe.recipe && recipe.recipe.instructions ? (
              recipe.recipe.instructions.map((instruction, index) => (
                <li key={index}>{instruction}</li>
              ))
            ) : (
              <li>No instructions available.</li>
            )}
          </ul>
        </div>
        <div className="flex flex-col">
          <h3 className="mb-2 text-lg font-medium">Ingredients:</h3>
          <div className="space-y-2">
            {recipe.recipe && recipe.recipe.ingredients ? (
              recipe.recipe.ingredients.map((ingredient, index) => (
                <div key={index} className="flex items-center">
                  <input
                    type="checkbox"
                    className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                  />
                  <span className="ml-2 text-gray-700">{ingredient}</span>
                </div>
              ))
            ) : (
              <p>No ingredients available.</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
