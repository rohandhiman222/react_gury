import Dashboard from "./views/Dashboard";
import Charities from "./views/Charities";
import Shops from "./views/Shops";
import Temples from "./views/Temples";
import User from "./views/User";
import Slider from "./views/Slider";

const dashboardRoutes = [
    {
        path: "/dashboard",
        name: "Dashboard",
        icon: "pe-7s-graph",
        component: Dashboard,
        layout: "/admin"
    },
    {
        path: "/users",
        name: "Users",
        icon: "pe-7s-user",
        component: User,
        layout: "/admin"
    },
    {
        path: "/slider",
        name: "Slider",
        icon: "pe-7s-user",
        component: Slider,
        layout: "/admin"
    },
    {
        path: "/charities",
        name: "Charities",
        icon: "pe-7s-user",
        component: Charities,
        layout: "/admin"
    },

    {
        path: "/template",
        name: "Temples",
        icon: "pe-7s-news-paper",
        component: Temples,
        layout: "/admin"
    }
];

export default dashboardRoutes;
