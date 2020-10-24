import React from "react";
const Signup = React.lazy(() => import("pages/Signup"));


const routes = [
    {
        enabled: true,
        path: "/signup",
        component: Signup,
        navbar: "Signup Form",
        child: null,
    },
];

export default routes.filter((route) => route.enabled);
