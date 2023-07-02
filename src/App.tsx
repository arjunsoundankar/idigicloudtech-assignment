import React, {createContext} from 'react';
import { Suspense } from 'react';
import { BrowserRouter , Route, Routes, Navigate } from 'react-router-dom';import './App.css';
import Toolbar from '@mui/material/Toolbar';
import routes from './routes.json';
import Box from '@mui/material/Box';
import ResponsiveAppBar from './Header';
import Sidebar from './Sidebar';


const renderRoutes = (routes: any[]): JSX.Element[] => {
  let renderedRoutes: JSX.Element[] = [];
  const isAdmin = true; //Here you change admin variable for access analysis route 
  routes.forEach((route) => {
    const { path, component: Component, routes: nestedRoutes, locale, accessTO } = route;
    
    if (accessTO && accessTO.includes('admin') && !isAdmin) {
      return null; // Skip rendering the route if user is not an admin and accessTO includes 'admin'
    }

    if (nestedRoutes) {
      renderedRoutes = renderedRoutes.concat(renderRoutes(nestedRoutes));
    }
    
    const Lazycomponent = React.lazy(() => import(`${Component}`));
    
    if(Component){
    renderedRoutes.push(
      <Route
        key={path}
        path={path}
        element={<Lazycomponent locale={locale}/>}
      />
    );
    }
  });
  return renderedRoutes;
};
export const routeDataContext = createContext(routes);
const App: React.FC = () => {
  
  return (
    <BrowserRouter>
    <routeDataContext.Provider value={routes}>
    <Box sx={{ display: 'flex' }}>
      <ResponsiveAppBar />
    </Box>
    <Box sx={{ display: 'flex' }}>
    <Sidebar />
    <Box
        component="main"
        sx={{ flexGrow: 1, bgcolor: 'background.default', p: 3 }}
      >
         <Toolbar />
      <Suspense fallback={<div>Loading...</div>}>
      <Routes>
          {renderRoutes(routes)}
          <Route
            path="/projects"
            element={<Navigate to="/projects/list" replace />}
          />
        </Routes>
      </Suspense>
      </Box>
      </Box>
      </routeDataContext.Provider>
    </BrowserRouter>
  );
}

export default App;
