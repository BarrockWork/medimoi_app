import { useRoutes } from "react-router-dom";

// routes
import MainRoutes from "./MainRoutes";
import AuthenticationRoutes from "./AuthenticationRoutes";
import config from "config";
import LandingPage from "landing-page";

// ==============================|| ROUTING RENDER ||============================== //

export default function ThemeRoutes() {
    return useRoutes(
        [
            MainRoutes,
            AuthenticationRoutes,
            {
                path: "home",
                element: <LandingPage />,
            },
        ],
        config.basename
    );
}
