import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { headerComponent } from './header/header.component';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { RecipeComponent } from './recipe/recipe.component';
import { RecipeListComponent } from './recipe/recipe-list/recipe-list.component';
import { RecipeItemComponent } from './recipe/recipe-list/recipe-item/recipe-item.component';
import { RecipeDetailComponent } from './recipe/recipe-detail/recipe-detail.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { ShoppingEditComponent } from './shopping-list/shopping-edit/shopping-edit.component';





@NgModule({
  declarations: [
    AppComponent,
    headerComponent,
    RecipeComponent,
    RecipeListComponent,
    RecipeItemComponent,
    RecipeDetailComponent,
    ShoppingListComponent,
    ShoppingEditComponent


  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})



export class AppModule { }
