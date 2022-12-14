import { useRef, useState } from 'react';

// material-ui
import { useTheme } from '@mui/material/styles';
import {
    Box,
    ClickAwayListener,
    IconButton,
    List,
    Paper,
    Popper,
    useMediaQuery,
    ListItemButton, 
    ListItemIcon, 
    ListItemText,
    Link
} from '@mui/material';

import SensorsIcon from '@mui/icons-material/Sensors';

// project import
import MainCard from 'components/MainCard';
import Transitions from 'components/@extended/Transitions';

// assets
import { CloseOutlined, SettingOutlined, QuestionCircleOutlined, ToolOutlined } from '@ant-design/icons';

// sx styles
const avatarSX = {
    width: 36,
    height: 36,
    fontSize: '1rem'
};

const actionSX = {
    mt: '6px',
    ml: 1,
    top: 'auto',
    right: 'auto',
    alignSelf: 'flex-start',

    transform: 'none'
};

// ==============================|| HEADER CONTENT - Settings ||============================== //

const Settings = () => {
    const theme = useTheme();
    const matchesXs = useMediaQuery(theme.breakpoints.down('md'));

    const anchorRef = useRef(null);
    const [open, setOpen] = useState(false);
    const handleToggle = () => {
        setOpen((prevOpen) => !prevOpen);
    };

    const handleClose = (event) => {
        if (anchorRef.current && anchorRef.current.contains(event.target)) {
            return;
        }
        setOpen(false);
    };

    const [selectedIndex, setSelectedIndex] = useState(0);
    const handleListItemClick = (event, index) => {
        setSelectedIndex(index);
    };

    const iconBackColorOpen = 'grey.300';
    const iconBackColor = 'grey.100';

    return (
        <Box sx={{ flexShrink: 0, ml: 0.75 }}>
            <IconButton
                disableRipple
                color="secondary"
                sx={{ color: 'text.primary', bgcolor: open ? iconBackColorOpen : iconBackColor }}
                aria-label="open profile"
                ref={anchorRef}
                aria-controls={open ? 'profile-grow' : undefined}
                aria-haspopup="true"
                onClick={handleToggle}
            >
                    <SettingOutlined />
            </IconButton>
            <Popper
                placement={matchesXs ? 'bottom' : 'bottom-end'}
                open={open}
                anchorEl={anchorRef.current}
                role={undefined}
                transition
                disablePortal
                popperOptions={{
                    modifiers: [
                        {
                            name: 'offset',
                            options: {
                                offset: [matchesXs ? -5 : 0, 9]
                            }
                        }
                    ]
                }}
            >
                {({ TransitionProps }) => (
                    <Transitions type="fade" in={open} {...TransitionProps}>
                        <Paper
                            sx={{
                                boxShadow: theme.customShadows.z1,
                                width: '100%',
                                minWidth: 285,
                                maxWidth: 420,
                                [theme.breakpoints.down('md')]: {
                                    maxWidth: 285
                                }
                            }}
                        >
                            <ClickAwayListener onClickAway={handleClose}>
                                <MainCard
                                    title="Settings"
                                    elevation={0}
                                    border={false}
                                    content={false}
                                    secondary={
                                        <IconButton size="small" onClick={handleToggle}>
                                            <CloseOutlined />
                                        </IconButton>
                                    }
                                >
                                    <List
                                        component="nav"
                                        sx={{
                                            p: 0,
                                            '& .MuiListItemButton-root': {
                                                py: 0.5,
                                                '& .MuiAvatar-root': avatarSX,
                                                '& .MuiListItemSecondaryAction-root': { ...actionSX, position: 'relative' }
                                            }
                                        }}
                                    >
                                        <Link 
                                        href="/configuration" 
                                        style = {{ textDecoration: 'none' , color : 'black' }} 

                                        >
                                        <ListItemButton selected={selectedIndex === 0} onClick={(event) => handleListItemClick(event, 1)}>
                                            <ListItemIcon>
                                            <ToolOutlined />
                                                     </ListItemIcon>
                                            <ListItemText primary="Configuration" />
                                        </ListItemButton>
                                        </Link>

                                        <Link 
                                        href="/support" 
                                        style = {{ textDecoration: 'none' , color : 'black' }} 

                                        >
                                        <ListItemButton selected={selectedIndex === 1} onClick={(event) => handleListItemClick(event, 0)}>
                                            <ListItemIcon>
                                                <QuestionCircleOutlined />
                                            </ListItemIcon>
                                            <ListItemText primary="Support" />
                                        </ListItemButton>
                                    </Link>
                                    </List>
                                </MainCard>
                            </ClickAwayListener>
                        </Paper>
                    </Transitions>
                )}
            </Popper>
        </Box>
    );
};

export default Settings;
