import {Routes } from "@angular/router";


export const inventarioRoutes:Routes = [
  {
    path:"categoria",
    title:"categoria",
    loadComponent:()=>import("./categoria/categoria.component"),
  },
  {
    path:"producto",
    title:"producto",
    loadComponent:()=>import("./producto/producto.component"),
  },
  {
    path:"oferta",
    title:"oferta",
    loadComponent:()=>import("./ofertas/ofertas.component"),
  },
  {
    path:"marca",
    title:"marca",
    loadComponent:()=>import("./marca/marca.component"),
  },
  {
    path:"combo",
    title:"combo",
    loadComponent:()=>import("./combo/combo.component"),
  },
  {
    path:"almacen",
    title:"almacen",
    loadComponent:()=>import("./almacen/almacen.component"),
  },
]
