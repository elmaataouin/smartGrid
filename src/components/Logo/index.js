import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import './logo.css'
import Logo from '../../assets/images/logo.png'
// material-ui
import { ButtonBase } from '@mui/material';

// project import
import config from 'config';
import { Avatar } from '../../../node_modules/@mui/material/index';

// ==============================|| MAIN LOGO ||============================== //

const LogoSection = ({ sx, to }) => (
    <ButtonBase disableRipple component={Link} to={!to ? config.defaultPath : to} sx={sx}>
      <div className='logo'>   
        <img src={Logo}
        style={
            {
                width: '180px' ,
                 height: '70px'
            }
        }/>
        </div>
    </ButtonBase>
);

LogoSection.propTypes = {
    sx: PropTypes.object,
    to: PropTypes.string
};

export default LogoSection;
