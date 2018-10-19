import { Recipe } from "../recipes/recipe.model";
import { EventEmitter, Injectable } from "@angular/core";
import { Ingredient } from "../shared/ingredient.model";
import { IngredientsService } from "./ingredients.service";

@Injectable()//Permite injectar un servicio dentro de otro servicio
export class RecipeService {
    recipeSelected = new EventEmitter<Recipe>();
    
    private recipes: Recipe[] = [
        new Recipe('A test recipe 1', 'This is a simply test ', 'https://cocina-casera.com/mx/wp-content/uploads/2018/01/tacoas-de-carne-enchilada.jpg', 
    [
        new Ingredient('bread', 2),
        new Ingredient('tomatoes', 3)
    ]),
        new Recipe('A test recipe 2', 'This is a simply test', 'https://cocina-casera.com/mx/wp-content/uploads/2018/01/tacoas-de-carne-enchilada.jpg',
        [
            new Ingredient('Beef', 3),
            new Ingredient('garlic', 1)
        ]),
        new Recipe('A test recipe 3', 'This is a simply test', 'https://cocina-casera.com/mx/wp-content/uploads/2018/01/tacoas-de-carne-enchilada.jpg',
        [
            new Ingredient('Sauce', 2),
        ])
    ];
    constructor(private ingredientsService: IngredientsService){

    }
      getRecipes(){
          return this.recipes.slice();
      }
      
      addIngredientsToShoppingList(ingredients: Ingredient[]){
        this.ingredientsService.addIngredients(ingredients);
      }
}