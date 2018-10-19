import { Ingredient } from "../shared/ingredient.model";
import { EventEmitter } from "@angular/core";
import { AngularWaitBarrier } from "blocking-proxy/built/lib/angular_wait_barrier";

export class IngredientsService {
    ingredientsChanged = new EventEmitter<Ingredient[]>();
    private ingredients: Ingredient [] = [
        new Ingredient('Tomatoes', 5),
        new Ingredient('Apples', 3)
      ];

      getIngredients(){
          return this.ingredients.slice();
      }

      addIngredient(ingredient: Ingredient){
          this.ingredients.push(ingredient);
          this.ingredientsChanged.emit(this.ingredients.slice());
      }

      addIngredients(auxIngredients: Ingredient[]){
          for(const i of auxIngredients){
              //this.ingredients.push(i);
              var ingadd = this.ingredients.find(Ingredient => Ingredient.name === i.name);
              if (ingadd !== undefined) {
                ingadd.amount = ingadd.amount + i.amount;
              }else {
                this.ingredients.push(i);
          }
          this.ingredientsChanged.emit(this.ingredients.slice());
      }
}
}