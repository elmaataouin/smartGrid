// material-ui
import { Box, Typography , Link} from '@mui/material';


import './index.css'

import {
    DashboardOutlined,

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


const style = { textDecoration: 'none' , color : 'black' } ;
const Navigation = () => {

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
              <Link   href="/"  style = { style }    >

              <ListItemButton className= "btnSideBar">
                <ListItemIcon>
                  <DashboardOutlined className = "icon" />
                </ListItemIcon>
                    <Typography className = "label">Dashboard</Typography>
              </ListItemButton>
              </Link>
            

              <ListItemButton onClick={handleClick} className= "btnSideBar">
                <ListItemIcon>
                  <DesktopMacIcon className = "icon" />
                </ListItemIcon>
                <Typography  className = "label" >Supervision</Typography>
                {!open ? <ExpandLess  className = "ic"/> : <ExpandMore className = "ic"/>}
              </ListItemButton>
              <Collapse in={!open} timeout="auto" unmountOnExit>

                <List component="div" disablePadding>
                <Link   href="/reporting"  style = { style }    >
                    <ListItemButton sx={{ pl: 4 }}>
                    <ListItemIcon className = "iconChild" >
                      <FileTextOutlined />
                    </ListItemIcon>

                    <Typography sx = {{
                  textDecoration : "none"
                }}
                 className = "labelChild">Reporting</Typography>
                  </ListItemButton>
                </Link>
                <Link   href="/statistiques"  style = { style }    >

                  <ListItemButton sx={{ pl: 4 }}>
                  <ListItemIcon className = "iconChild" >
                      <BarChartOutlined />
                    </ListItemIcon>
                    <Typography className = "labelChild">Statistiques</Typography>
                  </ListItemButton>
                </Link>
                </List>

              </Collapse>

              <Link   href="/control"  style = { style }    >

              <ListItemButton className= "btnSideBar">
                <ListItemIcon>
                  <SettingsRemoteIcon className = "icon" />
                </ListItemIcon>
                    <Typography className = "label">Control</Typography>
              </ListItemButton>
              </Link>

              <Link   href="/optimisation"  style = { style }    >

              <ListItemButton className= "btnSideBar">
                <ListItemIcon>
                  <EnergySavingsLeafIcon className = "icon" />
                </ListItemIcon>
                    <Typography className = "label">Optimisation</Typography>
              </ListItemButton>

              </Link>  

              <Link   href="/prediction"  style = { style }    >

              <ListItemButton className= "btnSideBar">
                <ListItemIcon>
                  <OnlinePredictionIcon className = "icon" />
                </ListItemIcon>
                    <Typography className = "label">Prédiction</Typography>
              </ListItemButton>
              </Link>
              
            </List>

            
    )

};

export default Navigation;
