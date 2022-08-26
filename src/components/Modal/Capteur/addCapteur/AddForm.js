import { useEffect, useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import * as React from 'react';

import PhotoCamera from '@mui/icons-material/PhotoCamera';

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




const AddForm = () => {
    const [level, setLevel] = useState();
    const [showPassword, setShowPassword] = useState(false);
    const handleClickShowPassword = () => {
        setShowPassword(!showPassword);
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
                        <Grid container spacing={2}
                            sx={{
                                display: 'flex',
                                alignItems: 'flex-start',
                                flexDirection: 'column',
                            }}>


                            <Grid item >
                                <Stack spacing={1}>
                                    <InputLabel htmlFor="rf_id">rf_ID</InputLabel>
                                    <OutlinedInput
                                        fullWidth
                                        id="rf_id"
                                        type="id"
                                        onBlur={handleBlur}
                                        onChange={handleChange}
                                        placeholder="id"
                                        error={Boolean(touched.name && errors.name)}
                                    />
                                </Stack>
                            </Grid>

                            <Grid item >
                                <Stack spacing={1}>
                                    <InputLabel htmlFor="name">Name</InputLabel>
                                    <OutlinedInput
                                        fullWidth
                                        error={Boolean(touched.email && errors.email)}
                                        id="name_sensor"
                                        value={values.email}
                                        onBlur={handleBlur}
                                        onChange={handleChange}
                                        placeholder="Namem"
                                        inputProps={{}}
                                    />
                                </Stack>
                            </Grid>

                            <Grid item >
                                <Stack spacing={1}>
                                    <InputLabel htmlFor="email-signup">Node</InputLabel>
                                    <OutlinedInput
                                        fullWidth
                                        error={Boolean(touched.email && errors.email)}
                                        id="node"
                                        value={values.email}
                                        onBlur={handleBlur}
                                        onChange={handleChange}
                                        placeholder="node"
                                        inputProps={{}}
                                    />
                                </Stack>
                            </Grid>



                            {errors.submit && (
                                <Grid item xs={12}>
                                    <FormHelperText error>{errors.submit}</FormHelperText>
                                </Grid>
                            )}

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
                                        Add Sensor
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

export default AddForm;
