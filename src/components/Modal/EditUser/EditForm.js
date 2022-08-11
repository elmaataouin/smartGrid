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




const EditForm = (props) => {
    const [level, setLevel] = useState();
    const [showPassword, setShowPassword] = useState(false);
    const handleClickShowPassword = () => {
        setShowPassword(!showPassword);
    };


    const [role, setrole] = React.useState('');
    const [status, seStatus] = React.useState('');
    const [profile,setProfile] = React.useState('');


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

                            <Grid item xs={12}>
                                <Stack  alignItems="center" spacing={1}>                                
                                    <Avatar
                                        alt="Remy Sharp"
                                        src={img1}
                                        sx={{ width: 70, height: 70 }}
                                    >
                                <input hidden accept="image/*" type="file" />
                                    </Avatar>
                                    <IconButton color="primary" aria-label="upload picture" component="label">
                                        <input hidden accept="image/*" type="file" />
                                        <PhotoCamera />
                                    </IconButton>
                                </Stack>
                            </Grid>

                            <Grid item xs={12}>
                                <Stack spacing={1}>
                                    <InputLabel htmlFor="name-signup">Name*</InputLabel>
                                    <OutlinedInput
                                        fullWidth
                                        id="name-login"
                                        type="name"
                                        value={props.data1.lastName}
                                        name="name"
                                        onBlur={handleBlur}
                                        onChange={handleChange}
                                        placeholder="EL MAATAOUI Nassime"
                                        error={Boolean(touched.name && errors.name)}
                                    />
                                    {touched.name && errors.name && (
                                        <FormHelperText error id="helper-text-name-signup">
                                            {errors.name}
                                        </FormHelperText>
                                    )}
                                </Stack>
                            </Grid>

                            <Grid item xs={12}>
                                <Stack spacing={1}>
                                    <InputLabel htmlFor="email-signup">Email Address*</InputLabel>
                                    <OutlinedInput
                                        fullWidth
                                        error={Boolean(touched.email && errors.email)}
                                        id="email-login"
                                        type="email"
                                        value={values.email}
                                        name="email"
                                        onBlur={handleBlur}
                                        onChange={handleChange}
                                        placeholder="elmaataouin@gmail.com"
                                        inputProps={{}}
                                    />
                                    {touched.email && errors.email && (
                                        <FormHelperText error id="helper-text-email-signup">
                                            {errors.email}
                                        </FormHelperText>
                                    )}
                                </Stack>
                            </Grid>


                            <Grid item xs={12}>
                                <Stack spacing={1}>
                                    <InputLabel id="role" htmlFor="role-signup">Role*</InputLabel>
                                    <Select
                                        labelId="role"
                                        id="role"
                                        onChange={handleChangeR}
                                        autoWidth
                                        defaultValue={10}
                                        xs={12}
                                    >
                                        <MenuItem value={10}>Admin</MenuItem>
                                        <MenuItem value={21}>User</MenuItem>
                                        <MenuItem value={22}>Super-User</MenuItem>
                                    </Select>
                                </Stack>
                            </Grid>


                            <Grid item xs={12}>
                                <Stack spacing={1}>
                                    <InputLabel id="status" htmlFor="status-signup">Status*</InputLabel>
                                    <Select
                                        labelId="status"
                                        id="status"
                                        onChange={handleChangeS}
                                        autoWidth
                                        defaultValue={10}
                                    >
                                        <MenuItem value="">
                                        </MenuItem>
                                        <MenuItem value={10}>Active</MenuItem>
                                        <MenuItem value={21}>suspended</MenuItem>
                                    </Select>
                                </Stack>
                            </Grid>



                            <Grid item xs={12}>
                                <Stack spacing={1}>
                                    <InputLabel htmlFor="password-signup">Password</InputLabel>
                                    <OutlinedInput
                                        fullWidth
                                        error={Boolean(touched.password && errors.password)}
                                        id="password-signup"
                                        type={showPassword ? 'text' : 'password'}
                                        value={values.password}
                                        name="password"
                                        onBlur={handleBlur}
                                        onChange={(e) => {
                                            handleChange(e);
                                            changePassword(e.target.value);
                                        }}
                                        endAdornment={
                                            <InputAdornment position="end">
                                                <IconButton
                                                    aria-label="toggle password visibility"
                                                    onClick={handleClickShowPassword}
                                                    onMouseDown={handleMouseDownPassword}
                                                    edge="end"
                                                    size="large"
                                                >
                                                    {showPassword ? <EyeOutlined /> : <EyeInvisibleOutlined />}
                                                </IconButton>
                                            </InputAdornment>
                                        }
                                        placeholder="******"
                                        inputProps={{}}
                                    />
                                    {touched.password && errors.password && (
                                        <FormHelperText error id="helper-text-password-signup">
                                            {errors.password}
                                        </FormHelperText>
                                    )}
                                </Stack>
                                <FormControl fullWidth sx={{ mt: 2 }}>
                                    <Grid container spacing={2} alignItems="center">
                                        <Grid item>
                                            <Box sx={{ bgcolor: level?.color, width: 85, height: 8, borderRadius: '7px' }} />
                                        </Grid>
                                        <Grid item>
                                            <Typography variant="subtitle1" fontSize="0.75rem">
                                                {level?.label}
                                            </Typography>
                                        </Grid>
                                    </Grid>
                                </FormControl>
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
                                        Edit User
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

export default EditForm;
