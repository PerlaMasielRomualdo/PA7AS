import { Ingredient } from "../shared/ingredient.model";
import { EventEmitter } from "@angular/core";
import { Subject } from "rxjs";

export class IngredientsService {
    ingredientsChanged = new Subject<Ingredient[]>();
    startedEditing = new Subject<number>();
    private ingredients: Ingredient [] = [
        new Ingredient('Tomatoes', 5),
        new Ingredient('Apples', 3)
      ];

      getIngredients(){
          return this.ingredients.slice();
      }
      getIngredient(index: number){
            return this.ingredients[index];
      }
      updateIngredient(index: number, ingredient: Ingredient){
          this.ingredients[index] = ingredient;
          this.ingredientsChanged.next(this.ingredients.slice());
      }

      addIngredient(ingredient: Ingredient){
          this.ingredients.push(ingredient);
          this.ingredientsChanged.next(this.ingredients.slice());
      }

      //deletedIngredient(index: number){
        //this.ingredients.splice(index, 1);
       // this.ingredientsChanged.next(this.ingredients.slice());
        //}
    onDelete(index: number){
        this.ingredients.splice(index, 1);
        this.ingredientsChanged.next(this.ingredients.slice());
     }

      addIngredients(auxIngredients: Ingredient[]){
          for(const i of auxIngredients){
              //this.ingredients.push(i);
              var sendIng = this.ingredients.find(Ingredient => Ingredient.name === i.name);
              if (sendIng !== undefined) {
                this.ingredients.push(i);
              }else {
                sendIng.amount = sendIng.amount + i.amount;
          }
          this.ingredientsChanged.next(this.ingredients.slice());
      }
    }
}