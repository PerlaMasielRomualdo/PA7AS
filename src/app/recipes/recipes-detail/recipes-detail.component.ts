import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipeService } from 'src/app/services/recipe.service';
import { Params, ActivatedRoute, Router } from '@angular/router';
import { FormArray } from '@angular/forms';
import { PARAMETERS } from '@angular/core/src/util/decorators';

@Component({
  selector: 'app-recipes-detail',
  templateUrl: './recipes-detail.component.html',
  styleUrls: ['./recipes-detail.component.css']
})
export class RecipesDetailComponent implements OnInit {

  //@Input() recipe: Recipe;
  recipe: Recipe;
  id: number;
  Subcription;
  constructor(private recipeService: RecipeService, 
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit() {
    //console.log(this.recipe)
    this.route.params.subscribe((param: Params) => {
      this.id = param['id'];
      this.recipe = this.recipeService.getRecipe(this.id);
    });
  }

  onAddToShoppingList(){
    this.recipeService.addIngredientsToShoppingList(this.recipe.ingredients);
  }

  onEditRecipe(){
    this.router.navigate(['edit'], {relativeTo: this.route});
  }

  onDeleteRecipe(id: number){
    this.recipeService.onDeleteRecipe(id);
    this.router.navigate(['../'], {relativeTo: this.route});
  }
}
