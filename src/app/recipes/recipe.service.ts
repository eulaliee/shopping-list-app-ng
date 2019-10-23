import { Injectable, EventEmitter } from '@angular/core';
import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();
  private recipes: Recipe[] = [
    new Recipe(
      'Tasty Schnitzel',
      "The best Schnitzel you've ever had.",
      'https://natashaskitchen.com/wp-content/uploads/2016/02/Pork-Schnitzel-Recipe-7-768x1152.jpg',
      [new Ingredient('Pork', 6), new Ingredient('French Fries', 2)]
    ),
    new Recipe(
      'Chicken Curry',
      'Spicy, saucy and all-around fantastic!',
      'https://www.chelseasmessyapron.com/wp-content/uploads/2015/08/Coconut-Chicken-Curry-2.jpg',
      [new Ingredient('Chicken', 2), new Ingredient('Curry Paste', 20)]
    ),
    new Recipe(
      'Beef Goulash',
      'The ultimate comfort food.',
      'https://be35832fa5168a30acd6-5c7e0f2623ae37b4a933167fe83d71b5.ssl.cf3.rackcdn.com/4859/davids-beef-goulash__square.jpg',
      [new Ingredient('Beef', 2), new Ingredient('Cumin Powder', 1)]
    ),
    new Recipe(
      'Juicy Burger',
      'An American favorite.',
      'https://natashaskitchen.com/wp-content/uploads/2019/04/Best-Burger-5-768x1152.jpg',
      [new Ingredient('Beef Patty', 1), new Ingredient('Brioche Bun', 1)]
    )
  ];
  constructor(private shoppingListService: ShoppingListService) {}
  getRecipes() {
    return this.recipes.slice();
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.shoppingListService.addIngredients(ingredients);
  }
}
