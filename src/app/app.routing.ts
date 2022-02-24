import { AppComponent } from "./app.component";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

const routes: Routes = [
  {
    path: "",
    component: AppComponent,
    children: [
      {
        path: "",
        loadChildren: () =>
          import("./features/feature-home/home.module").then(
            (m) => m.HomeModule
          ),
      },
      {
        path: "category",
        loadChildren: () =>
          import("./features/feature-category/category.module").then(
            (m) => m.CategoryModule
          ),
      },
      {
        path: "episode",
        loadChildren: () =>
          import("./features/feature-category/category.module").then(
            (m) => m.CategoryModule
          ),
      },
      {
        path: "movie",
        loadChildren: () =>
          import("./features/feature-movie/movie.module").then(
            (m) => m.MovieModule
          ),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
