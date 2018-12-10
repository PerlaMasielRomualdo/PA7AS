import { Routes, RouterModule } from '@angular/router';
import { RecipesComponent } from './recipes/recipes.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { NgModule, Component } from '@angular/core';
import { RecipeStarComponent } from './recipes/recipe-star/recipe-star.component';
import { RecipesDetailComponent } from './recipes/recipes-detail/recipes-detail.component';
import { RecipesEditComponent } from './recipes/recipes-edit/recipes-edit.component';
import { AuthGuard } from './guards/auth.guard';


const routes: Routes = [
    {
        path: '' , redirectTo: '/recipes', pathMatch: 'full'
    },
    {
        path: 'recipes', component: RecipesComponent, children: [
            { path: '', component: RecipeStarComponent},
            { path: 'new', component: RecipesEditComponent},
            { path: ':id', component: RecipesDetailComponent},
            { path: ':id/edit', component: RecipesEditComponent},
            { path: 'recipes', component: RecipesComponent, canActivate: [AuthGuard]}
        ]
    },
    {
        path: 'shoppinglist', component: ShoppingListComponent
    }
];
@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {

}