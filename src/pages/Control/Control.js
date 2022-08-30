import * as React from 'react';

import { Box, Button, Card } from '../../../node_modules/@mui/material/index';
import { Typography , Grid} from '@mui/material';

import SensorTable from './SensorTable';
import Ateliers from './Ateliers';

const Control = () => { 

    return (
        <>





            <Box  sx={ { width: { xs: 450, sm: 800, md: 1300, lg: 1400, xl: 1400, }, ml: {   xl: "100px" } } }>
              
               { /* Users Table */ }
                <Grid container alignItems="center" justifyContent="space-between"  sx = {{ p: 1, m: 1 }}>
                    <Grid item>
                    <Typography variant = "h4">Ateliers</Typography>
                    </Grid>
                    <Grid item />
                </Grid>

                <Card>
                    <Ateliers />
                </Card>



                { /* Users Table */ }
                <Grid container alignItems="center" justifyContent="space-between"  sx = {{ p: 1, m: 1 }}>
                    <Grid item>
                    <Typography variant = "h4">Sensors </Typography>
                    </Grid>
                    <Grid item />
                </Grid>

                <Card>                           
                    <SensorTable />

                </Card>
        </Box>
        </>
    );
}
export default Control;
