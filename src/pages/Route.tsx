import { type RouteObject } from "react-router-dom";
import { PageSkeleton } from "./PageSkeleton";

const Route: RouteObject[] = [
    { index: true, lazy: () => import("./Home"), hydrateFallbackElement: <PageSkeleton /> },
    { path: "about", lazy: () => import("./AboutMe"), hydrateFallbackElement: <PageSkeleton /> },
    { path: "experience", lazy: () => import("./Experience"), hydrateFallbackElement: <PageSkeleton /> },
    { path: "contact", lazy: () => import("./Contact"), hydrateFallbackElement: <PageSkeleton /> },
    { path: "*", lazy: () => import("./NotFound"), hydrateFallbackElement: <PageSkeleton /> },
];

export const RootRoute: RouteObject = {
    path: "",
    lazy: () => import("./Layout"),
    hydrateFallbackElement: <PageSkeleton />,
    children: Route,
};