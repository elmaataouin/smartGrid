// material-ui
import { Box, Typography } from '@mui/material';

// project import
import NavGroup from './NavGroup';
import menuItem from 'menu-items';
import './index.css'

import {
    DashboardOutlined,
    LoginOutlined,
    ProfileOutlined,
    BarChartOutlined,
    FileTextOutlined
} from '@ant-design/icons';

import DesktopMacIcon from '@mui/icons-material/DesktopMac';
import SettingsRemoteIcon from '@mui/icons-material/SettingsRemote';
import EnergySavingsLeafIcon from '@mui/icons-material/EnergySavingsLeaf';
import OnlinePredictionIcon from '@mui/icons-material/OnlinePrediction';

import * as React from 'react';
import ListSubheader from '@mui/material/ListSubheader';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import DraftsIcon from '@mui/icons-material/Drafts';
import SendIcon from '@mui/icons-material/Send';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import StarBorder from '@mui/icons-material/StarBorder';

// ==============================|| DRAWER CONTENT - NAVIGATION ||============================== //

const Navigation = () => {

    /* const navGroups = menuItem.items.map((item) => {

      switch (item.type) {
            case 'group':
                return <NavGroup key={item.id} item={item} />;
            default:
                return (
                    <Typography key={item.id} variant="h6" color="error" align="center">
                        Fix - Navigation Group
                    </Typography>
                );
        } 

        
    });

    return <Box sx={{ pt: 10 }}>{navGroups}</Box>;
 */

    const [open, setOpen] = React.useState(true);

    const handleClick = () => {
      setOpen(!open);
    };
    return (
            <List
              sx={{ width: '100%', maxWidth: 360,
               bgcolor: 'background.paper',
                mt : 15 }}
              component="nav"
              aria-labelledby="nested-list-subheader"

              
            >
              <ListItemButton className= "btn">
                <ListItemIcon>
                  <DashboardOutlined className = "icon" />
                </ListItemIcon>
                    <Typography className = "label">Dashboard</Typography>
              </ListItemButton>
            

              <ListItemButton onClick={handleClick} className= "btn">
                <ListItemIcon>
                  <DesktopMacIcon className = "icon" />
                </ListItemIcon>
                <Typography  className = "label" >Supervision</Typography>
                {!open ? <ExpandLess  className = "ic"/> : <ExpandMore className = "ic"/>}
              </ListItemButton>
              <Collapse in={!open} timeout="auto" unmountOnExit>

                <List component="div" disablePadding>
                  <ListItemButton sx={{ pl: 4 }}>
                    <ListItemIcon className = "iconChild" >
                      <FileTextOutlined />
                    </ListItemIcon>
                    <Typography className = "labelChild">Reporting</Typography>
                  </ListItemButton>

                  <ListItemButton sx={{ pl: 4 }}>
                  <ListItemIcon className = "iconChild" >
                      <BarChartOutlined />
                    </ListItemIcon>
                    <Typography className = "labelChild">Statistiques</Typography>
                  </ListItemButton>
                </List>

              </Collapse>

              <ListItemButton className= "btn">
                <ListItemIcon>
                  <SettingsRemoteIcon className = "icon" />
                </ListItemIcon>
                    <Typography className = "label">Control</Typography>
              </ListItemButton>

              <ListItemButton className= "btn">
                <ListItemIcon>
                  <EnergySavingsLeafIcon className = "icon" />
                </ListItemIcon>
                    <Typography className = "label">Optimisation</Typography>
              </ListItemButton>


              <ListItemButton className= "btn">
                <ListItemIcon>
                  <OnlinePredictionIcon className = "icon" />
                </ListItemIcon>
                    <Typography className = "label">Prédiction</Typography>
              </ListItemButton>

              
            </List>

            
    )

};

export default Navigation;
