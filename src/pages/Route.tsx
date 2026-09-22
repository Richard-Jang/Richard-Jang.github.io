import { type RouteObject } from "react-router-dom";
import { PageSkeleton } from "./PageSkeleton";

const Route: RouteObject[] = [
    { index: true, lazy: () => import("./Home"), hydrateFallbackElement: <PageSkeleton /> },
    { path: "about", lazy: () => import("./AboutMe"), hydrateFallbackElement: <PageSkeleton /> },
    { path: "experience", lazy: () => import("./Experience"), hydrateFallbackElement: <PageSkeleton /> },
    { path: "*", lazy: () => import("./NotFound"), hydrateFallbackElement: <PageSkeleton /> },
];

export const RootRoute: RouteObject = {
    path: "",
    lazy: () => import("./Layout"),
    hydrateFallbackElement: <PageSkeleton />,
    children: Route,
};

// Sidebar-free: the business card is a standalone floating card, not part of the sidebar layout.
// It's also the site's Contact destination — there is no separate /contact page.
export const ContactRoute: RouteObject = {
    path: "contact",
    lazy: () => import("./BusinessCard"),
    hydrateFallbackElement: <PageSkeleton />,
};