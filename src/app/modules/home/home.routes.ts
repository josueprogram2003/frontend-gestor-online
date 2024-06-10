import { Routes } from "@angular/router";

export const homeRoutes:Routes = [
  {
    path:"",
    loadComponent:()=>import("./home.component"),
    children:[
      {
        path:"inventario",
        loadChildren:()=>import("./inventario/inventario.routes").then(r=>r.inventarioRoutes)
      }

    ]
  }
]
