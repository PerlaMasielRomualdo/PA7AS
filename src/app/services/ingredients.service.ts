import { Ingredient } from "../shared/ingredient.model";
import { EventEmitter } from "@angular/core";
import { AngularWaitBarrier } from "blocking-proxy/built/lib/angular_wait_barrier";
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

      addIngredients(auxIngredients: Ingredient[]){
          for(const i of auxIngredients){
              //this.ingredients.push(i);
              var sendIng = this.ingredients.find(Ingredient => Ingredient.name === i.name);
              if (sendIng !== undefined) {
                sendIng.amount = sendIng.amount + i.amount;
              }else {
                this.ingredients.push(i);
          }
          this.ingredientsChanged.next(this.ingredients.slice());
      }
}
}