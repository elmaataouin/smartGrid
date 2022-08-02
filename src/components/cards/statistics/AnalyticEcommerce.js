import PropTypes from 'prop-types'

import './card.css'
// material-ui
import { Box, ListItemAvatar, Avatar , Grid, Stack, Typography } from '@mui/material';

// project import
import MainCard from 'components/MainCard';
import DeviceThermostatIcon from '@mui/icons-material/DeviceThermostat';


// ==============================|| STATISTICS - ECOMMERCE CARD  ||============================== //




const AnalyticEcommerce = ({ title , count , extra , icon , ac}) => (
    <MainCard contentSX={{ p: 2.0 }} 
    className={`m-${ac}`}
    >
        <Stack spacing={0.5}>
            <Typography variant="h6">
                {title}
            </Typography>
            <Grid container alignItems="center">
                <Grid item>
                    <Typography variant="h4" >
                        {count}
                    </Typography>
                </Grid>
               
               
                    <Grid item>
                    <ListItemAvatar
                    sx={{
                        ml : '200%'
                                        
                    }}
                    >
                                                <Avatar className={ac}
                                                >
                                                    {icon}
                                                </Avatar>
                                            </ListItemAvatar>
                    </Grid>
                
                
            </Grid>
        </Stack>
        <Box sx={{ pt: 1 }}>
                <Typography component="span" variant="caption" sx={{ color: '#00000'}}>
                    {extra}
                </Typography>
        </Box>
    </MainCard>
);



AnalyticEcommerce.defaultProps = {
    color: 'primary'
};

AnalyticEcommerce.propTypes = {
    icon: PropTypes.element.isRequired,
    color: PropTypes.string.isRequired,
  }

export default AnalyticEcommerce;
