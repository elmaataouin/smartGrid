import { useEffect, useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import * as React from 'react';

import PhotoCamera from '@mui/icons-material/PhotoCamera';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import TextField from '@mui/material/TextField';

// material-ui
import {
    Box,
    Button,
    Divider,
    FormControl,
    FormHelperText,
    Grid,
    Link,
    IconButton,
    InputAdornment,
    InputLabel,
    OutlinedInput,
    Stack,
    Typography
} from '@mui/material';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';

import Avatar from '@mui/material/Avatar';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormGroup from '@mui/material/FormGroup';
import Checkbox from '@mui/material/Checkbox';
import img1 from 'assets/images/users/avatar-nassime.jpg'

// third party
import * as Yup from 'yup';
import { Formik } from 'formik';

// project import
import AnimateButton from 'components/@extended/AnimateButton';
import { strengthColor, strengthIndicator } from 'utils/password-strength';

// assets
import { EyeOutlined, EyeInvisibleOutlined } from '@ant-design/icons';

// ============================|| FIREBASE - REGISTER ||============================ //




const ConfigForm = (props) => {
    const [level, setLevel] = useState();
    const [showPassword, setShowPassword] = useState(false);
    const handleClickShowPassword = () => {
        setShowPassword(!showPassword);
    };

    const [value, setValue] = React.useState('on');

    const handleChange = (event) => {
      setValue(event.target.value);
    };


    const [role, setrole] = React.useState('');
    const [status, seStatus] = React.useState('');
    const [profile, setProfile] = React.useState('');


    const handleChangeR = (event) => {
        setrole(event.target.value);
    };

    const handleChangeS = (event) => {
        seStatus(event.target.value);
    };


    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    const changePassword = (value) => {
        const temp = strengthIndicator(value);
        setLevel(strengthColor(temp));
    };

    useEffect(() => {
        changePassword('');
    }, []);

    return (
        <>
            <Formik
                initialValues={{
                    name: '',
                    email: '',
                    password: '',
                    submit: null
                }}
                validationSchema={Yup.object().shape({
                    name: Yup.string().max(255).required('Name is required'),
                    email: Yup.string().email('Must be a valid email').max(255).required('Email is required'),
                    password: Yup.string().max(255).required('Password is required')
                })}
                onSubmit={async (values, { setErrors, setStatus, setSubmitting }) => {
                    try {
                        setStatus({ success: false });
                        setSubmitting(false);
                    } catch (err) {
                        console.error(err);
                        setStatus({ success: false });
                        setErrors({ submit: err.messrole });
                        setSubmitting(false);
                    }
                }}
            >
                {({ errors, handleBlur, handleChange, handleSubmit, isSubmitting, touched, values }) => (
                    <form noValidate onSubmit={handleSubmit}>
                        <Grid container spacing={3}>

                            {/* <Grid item xs={12}>
                                <span>Status</span>

                                <Grid
                                    container
                                    alignItems="center"
                                    justifyContent="center"
                                    value={value}
                                    onChange={handleChange}
                                >
                                    <RadioGroup
                                        row
                                        aria-labelledby="demo-row-radio-buttons-group-label"
                                        name="row-radio-buttons-group"
                                    >
                                        <FormControlLabel value="on" control={<Radio defaultChecked />} label="on"  />
                                        <FormControlLabel value="off " control={<Radio />} label="off" />
                                    </RadioGroup>
                                </Grid>
                            </Grid> */}


                            <Grid item xs={12}>
                                <span>Control mode</span>

                                <Grid
                                    container
                                    alignItems="center"
                                    justifyContent="center"
                                >
                                    <RadioGroup
                                        row
                                        aria-labelledby="demo-row-radio-buttons-group-label"
                                        name="row-radio-buttons-group"
                                       
                                    >
                                        <FormControlLabel value="manuel" control={<Radio /> }  label="manuel" />
                                        <FormControlLabel value="automatique " control={<Radio />} label="automatique" />
                                    </RadioGroup>
                                </Grid>
                            </Grid>

                           {/*  <Grid item xs={12}>
                                <span>min / max value </span>
                                <Grid
                                    container
                                    alignItems="center"
                                    justifyContent="center"
                                >
                                    <TextField
                                        label="min-value"
                                        type="number"
                                        id="outlined-size-small"
                                        size="small"
                                        sx={{ m: 1 }}
                                    />

                                    <TextField
                                        label="max-value"
                                        type="number"
                                        id="outlined-size-small"
                                        size="small"
                                    />
                                </Grid>
                            </Grid> */}


                            <Grid item xs={12}>
                                <span>Alert</span>

                                <Grid
                                    container
                                    alignItems="center"
                                    justifyContent="center"
                                >
                                    <FormGroup
                                        row
                                        aria-labelledby="demo-row-radio-buttons-group-label"

                                    >
                                        <FormControlLabel control={<Checkbox defaultChecked />} label="notification" />
                                        <FormControlLabel  control={<Checkbox />} label="par sms" />
                                        <FormControlLabel  control={<Checkbox />} label="par email" />

                                    </FormGroup>

                                </Grid>

                            </Grid>



                            <Grid item xs={12}>
                                <AnimateButton>
                                    <Button
                                        disableElevation
                                        disabled={isSubmitting}
                                        fullWidth
                                        size="large"
                                        type="submit"
                                        variant="contained"
                                        color="primary"
                                    >
                                        Config Atelier
                                    </Button>
                                </AnimateButton>
                            </Grid>

                        </Grid>
                    </form>
                )}
            </Formik>
        </>
    );
};

export default ConfigForm;
