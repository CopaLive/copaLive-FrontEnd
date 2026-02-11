import { lazy } from "react";
import type { RouteObject } from "react-router-dom";

export const routes: RouteObject = {
  path: "/",
  Component: lazy(() => import("./pages/Layout")),
  children: [
    {
      index: true,
      Component: lazy(() => import("./pages/GamesList")),
    },
    {
      path: "/games/:id",
      Component: lazy(() => import("./pages/GameDetails")),
    },
  ]
}