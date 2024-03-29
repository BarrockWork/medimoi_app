import { useSelector } from 'react-redux';

import { ThemeProvider } from '@mui/material/styles';
import { CssBaseline, StyledEngineProvider } from '@mui/material';

// routing
import Routes from 'routes';

// defaultTheme
import themes from 'themes';

// project imports
import NavigationScroll from 'layout/NavigationScroll';
import {AuthProvider} from "./contexts/AuthContext";
import jwtHandler from "./utils/jwtHandler";

// ==============================|| APP ||============================== //

const App = () => {
    const customization = useSelector((state) => state.customization);
    //Get userinfo
    let user = jwtHandler.getUser();

    return (
        <StyledEngineProvider injectFirst>
            <ThemeProvider theme={themes(customization)}>
                <CssBaseline />
                <NavigationScroll>
                    <AuthProvider userData={user}>
                        <Routes />
                    </AuthProvider>
                </NavigationScroll>
            </ThemeProvider>
        </StyledEngineProvider>
    );
};

export default App;
