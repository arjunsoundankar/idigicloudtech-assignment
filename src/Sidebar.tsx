import React, {useState, useContext} from 'react';
import { Link, useLocation } from 'react-router-dom';
import { List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import Drawer from '@mui/material/Drawer';
import Divider from '@mui/material/Divider';
import Toolbar from '@mui/material/Toolbar';
import {routeDataContext} from './App';
import { Icon } from '@mui/material';
import DashboardIcon from '@mui/icons-material/Dashboard';
import AnalyticsIcon from '@mui/icons-material/Analytics';
import MonitorIcon from '@mui/icons-material/Monitor';
import HomeWorkIcon from '@mui/icons-material/HomeWork';
import AccountTreeIcon from '@mui/icons-material/AccountTree';
import ListAltIcon from '@mui/icons-material/ListAlt';
import DetailsIcon from '@mui/icons-material/Details';
import SettingsApplicationsIcon from '@mui/icons-material/SettingsApplications';

const IconDisplay: React.FC<{icon: string }> = ({icon}) => {
  if(icon === 'dashboard'){
    return (
      <Icon component={DashboardIcon} />
    )  
  }
  if(icon === 'analysis'){
    return (
      <Icon component={AnalyticsIcon} />
    )  
  }
  if(icon === 'monitor'){
    return (
      <Icon component={MonitorIcon} />
    )  
  }
  if(icon === 'workplace'){
    return (
      <Icon component={HomeWorkIcon} />
    )  
  }
  if(icon === 'projects'){
    return (
      <Icon component={AccountTreeIcon} />
    )  
  }
  if(icon === 'list'){
    return (
      <Icon component={ListAltIcon} />
    )  
  }
  if(icon === 'details'){
    return (
      <Icon component={DetailsIcon} />
    )  
  }
  if(icon === 'settings'){
    return (
      <Icon component={SettingsApplicationsIcon} />
    )  
  }
  return null;
}

const SidebarItem: React.FC<{ route: any, currentPath: string }> = ({ route, currentPath }) => {
  const { path, name, icon } = route;
  const isActive = currentPath === path;


  return (
    <ListItem
      button
      component={Link}
      to={path}
      sx={{ color: isActive ? 'primary.main' : 'inherit' }}
    >
      <ListItemIcon>
        {icon ? (
      <IconDisplay icon={icon} />):null}
      {/* {
        icon ? <icon /> : ''
      } */}
      {/* <svg data-testid={icon}></svg> */}

      </ListItemIcon>
      <ListItemText primary={name} />
    </ListItem>
  );
};
const drawerWidth = 240;
const Sidebar: React.FC = () => {
    const routes = useContext(routeDataContext);
    const location = useLocation();
  const [isOpen, setIsOpen] = useState<boolean>(true);
  return (
    <Drawer anchor="left"
    sx={{
        width: drawerWidth,
        flexShrink: 0,
        '& .MuiDrawer-paper': {
          width: drawerWidth,
          boxSizing: 'border-box',
        },
      }}
    open={isOpen}
    variant="permanent"
    onClose={()=>setIsOpen(false)}>
        <Toolbar />
        <Divider />
    <List>
      {routes.map((route) => (
        route.hideInMenu ? '' :
        <React.Fragment key={route.path}>
          <SidebarItem route={route} currentPath={location.pathname} />
          {route.routes && route.routes.length > 0 && (
            <List>
              {route.routes.map((nestedRoute: any) => (
                <SidebarItem key={nestedRoute.path} route={nestedRoute} currentPath={location.pathname} />
              ))}
            </List>
          )}
        </React.Fragment>
      ))}
    </List>
    </Drawer>
  );
};

export default Sidebar;
