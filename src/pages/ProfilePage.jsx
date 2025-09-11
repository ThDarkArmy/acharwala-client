import React, { useState, useEffect } from 'react';
import { makeStyles } from '@mui/styles';
import { Container, Typography, Box, Button, Grid, MenuItem, InputLabel, FormControl, Select } from '@mui/material';
import Header from '../components/Header';
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Alert from '@mui/material/Alert';

const BASE_URL = "http://localhost:8000/api/v1";

const theme = createTheme();

const useStyles = makeStyles((theme) => ({
    container: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'left',
        marginTop: 4,
    },
    infoBox: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'start',
        marginTop: 4,
    },
    infoItem: {
        display: 'flex',
        alignItems: 'center',
        marginBottom: 2,
    },
    label: {
        marginRight: 2,
        fontWeight: 'bold',
    },
    value: {
        fontSize: '1.2rem',
    },
    button: {
        marginTop: 4,
    },
}));

const ProfilePage = () => {
    const classes = useStyles();
    const navigate = useNavigate();
    const token = localStorage.getItem("token");
    const [openSnackbar, setOpenSnackbar] = useState(false);
    const [snackbarMessage, setSnackbarMessage] = useState("");
    const [snackbarSeverity, setSnackbarSeverity] = useState("");
    const [user, setUser] = useState();

    const [showPassword, setShowPassword] = useState(false);
    const [error, setError] = useState(false)
    const [success, setSuccess] = useState(false)
    const [firstNameError, setFirstNameError] = useState(false)
    const [lastNameError, setLastNameError] = useState(false)
    const [emailError, setEmailError] = useState(false)
    const [addressError, setaddressError] = useState(false)
    const [address, setaddress] = useState()
    const [contactNumberError, setContactNumberError] = useState(false)
    const [role, setRole] = useState();
    const [firstName, setFirstName] = useState();
    const [lastName, setLastName] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [contactNumber, setContactNumber] = useState();

    const [passwordError, setPasswordError] = useState(false)


    const validateEmail = (email) => {
        return String(email)
            .toLowerCase()
            .match(
                /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
            );
    };


    const handleSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.currentTarget);

        let er = false;

        const data = {
            email: formData.get("email"),
            contactNumber: formData.get("contactNumber"),
            address: formData.get("address"),
            password: formData.get("password"),
            name: formData.get("firstName") + " " + formData.get("lastName"),
            role: user.role
        }

        const { email, contactNumber, password } = data
        if (email === "" || !validateEmail(email)) {
            er = true;
            setEmailError(true)
        } else {
            setEmailError(false)
        }
        if (formData.get("firstName") === "") {
            er = true;

            setFirstNameError(true)
        } else {
            setFirstNameError(false)
        }

        if (formData.get("lastName") === "") {
            er = true;
            setLastNameError(true)
        } else {
            setLastNameError(false)
        }

        if (formData.get("address") === "") {
            er = true;
            setaddressError(true)
        } else {
            setaddressError(false)
        }

        if (contactNumber === "" || contactNumber.length != 10) {
            er = true;

            setContactNumberError(true)
        } else {
            setContactNumberError(false)
        }
        if (password === "") {
            er = true;

            setPasswordError(true)
        } else {
            setPasswordError(false)
        }
        try {
            if (er) throw "Invalid form data"
            const response = await axios({
                method: "put",
                url: BASE_URL + "/users/update/" + user.id,
                data: JSON.stringify(data),
                headers: { "Content-Type": "application/json" },
            });

            if (response.data) {
                loadLoggedInUserProfile();
                setFirstName("");
                setLastName("");
                setEmail("");
                setContactNumber("");
                setRole("");
                setaddress("");

            }
        } catch (err) {
            setError(true)
            setTimeout(() => setError(false), 5000)
        }
    };

    useEffect(() => {
        if (!token) {
            navigate("/");
        }
    }, [])

    useEffect(() => {
        loadLoggedInUserProfile()
    }, [])

    const loadLoggedInUserProfile = async () => {
        try {
            const response = await axios({
                method: 'get',
                url: `${BASE_URL}/users/logged-in-user`,
                headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${token}` },
            });
            if (response.data) {
                setUser(response.data);

            } else {
                setSnackbarMessage("Couldn't load profile");
                setSnackbarSeverity("error");
                setOpenSnackbar(true);
            }
        } catch (error) {
            setSnackbarMessage("Couldn't load profile");
            setSnackbarSeverity("error");
            setOpenSnackbar(true);
            console.log(error);
        }
    }

    const handleEditProfile = () => {
        const name = user.name.split(" ")
        setFirstName(name[0]);
        setLastName(name[name.length - 1]);
        setEmail(user.email);
        setContactNumber(user.contactNumber);
        setaddress(user.address);
    };

    return (
        <div style={{ background: "#F1F3F6" }}>
            <Header />
            <Box sx={{ mt: 9, padding: 5 }}>
                <Grid container spacing={4}>
                    <Grid item xs={6}>
                        <Box maxWidth="sm" sx={{ padding: 3 }} >
                            <Box sx={{ paddingTop: 1, paddingLeft: 1, mb: 1, bgcolor: "#fff" }} display="flex">
                                <Typography variant="h4" gutterBottom>
                                    Profile
                                </Typography>
                            </Box>

                            {user && <Box sx={{ paddingTop: 2, paddingLeft: 1, pb: 2, mb: 1, bgcolor: "#fff" }}>
                                <div className={classes.infoItem}>
                                    <Typography className={classes.label}>Name:</Typography>
                                    <Typography className={classes.value}>{user.name}</Typography>
                                </div>
                                <div className={classes.infoItem}>
                                    <Typography className={classes.label}>ID:</Typography>
                                    <Typography className={classes.value}>{user.id}</Typography>
                                </div>
                                <div className={classes.infoItem}>
                                    <Typography className={classes.label}>Role:</Typography>
                                    <Typography className={classes.value}>{user.role}</Typography>
                                </div>
                                <div className={classes.infoItem}>
                                    <Typography className={classes.label}>Address:</Typography>
                                    <Typography className={classes.value}>{user.address}</Typography>
                                </div>
                                <div className={classes.infoItem}>
                                    <Typography className={classes.label}>Contact Number:</Typography>
                                    <Typography className={classes.value}>{user.contactNumber}</Typography>
                                </div>
                                <div className={classes.infoItem}>
                                    <Typography className={classes.label}>Email:</Typography>
                                    <Typography className={classes.value}>{user.email}</Typography>
                                </div>
                            </Box>}
                            <Button fullWidth variant="contained" color="primary" sx={{background: `radial-gradient(circle, rgba(63,219,251,0.7120973389355743) 26%, rgba(252,70,107,1) 100%);`}} className={classes.button} onClick={handleEditProfile}>
                                Edit Profile
                            </Button>
                        </Box>
                    </Grid>
                    <Grid item xs={6}>
                        <ThemeProvider theme={theme}>
                            <Container sx={{ marginTop: 0, bgcolor: "#fff", padding: 1 }} component="main" maxWidth="xs">
                                <CssBaseline />
                                <Box
                                    sx={{
                                        marginTop: 0,
                                        display: "flex",
                                        flexDirection: "column",
                                        alignItems: "center",
                                    }}
                                >
                                    {error && <Alert severity="error">Error occured, while editing profile</Alert>}
                                    {success && <Alert severity="success">Profile updated successfully</Alert>}
                                    <Typography component="h1" variant="h5">
                                        Edit Profile
                                    </Typography>
                                    <Box
                                        component="form"
                                        noValidate
                                        onSubmit={handleSubmit}
                                        sx={{ mt: 3 }}
                                    >
                                        <Grid container spacing={2}>
                                            <Grid item xs={12} sm={6}>
                                                <TextField
                                                    value={firstName}
                                                    error={firstNameError}
                                                    helperText={firstNameError ? "Enter first name" : ""}
                                                    onChange={(e) => {
                                                        setFirstName(e.target.value)
                                                        setFirstNameError(false)
                                                    }}
                                                    name="firstName"
                                                    required
                                                    fullWidth
                                                    id="firstName"
                                                    label={firstName?"": "First Name"}
                                                    
                                                />
                                            </Grid>
                                            <Grid item xs={12} sm={6}>
                                                <TextField
                                                    value={lastName}
                                                    error={lastNameError}
                                                    helperText={lastNameError ? "Enter last name" : ""}
                                                    onChange={(e) => {
                                                        setLastName(e.target.value)
                                                        setLastNameError(false)
                                                    }}
                                                    required
                                                    fullWidth
                                                    id="lastName"
                                                    label={lastName?"": "Last Name"}
                                                    name="lastName"
                                                    
                                                />
                                            </Grid>
                                            <Grid item xs={12} sm={6}>
                                                <TextField
                                                    value={email}
                                                    error={emailError}
                                                    helperText={emailError ? "Enter valid email" : ""}
                                                    onChange={(e) => {
                                                        setEmail(e.target.value)
                                                        setEmailError(false)
                                                    }}
                                                    required
                                                    fullWidth
                                                    id="email"
                                                    label={email?"": "Email"}
                                                    name="email"
                                                    autoComplete="email"

                                                />
                                            </Grid>
                                            <Grid item xs={12} sm={6}>
                                                <TextField
                                                    value={contactNumber}
                                                    error={contactNumberError}
                                                    helperText={contactNumberError ? "Enter valid contact number" : ""}
                                                    onChange={(e) => {
                                                        setContactNumber(e.target.value)
                                                        setContactNumberError(false)
                                                    }}
                                                    required
                                                    fullWidth
                                                    id="contactNumber"
                                                    label={contactNumber?"": "Contact Number"}
                                                    name="contactNumber"
                                                    autoComplete="contactNumber"
                                                    type="number"
                                                />
                                            </Grid>
                                            <Grid item xs={12} sm={12}>
                                                <TextField
                                                    error={addressError}
                                                    value={address}
                                                    helperText={addressError ? "Enter valid address" : ""}
                                                    onChange={(e) => {
                                                        setaddress(e.target.value)
                                                        setaddressError(false)}}
                                                    required
                                                    fullWidth
                                                    id="address"
                                                    label={address?"": "Address"}
                                                    name="address"
                                                    autoComplete="address"
                                                    type="text"
                                                />
                                            </Grid>
                                            
                                            <Grid item xs={12}>
                                                <TextField
                                                    error={passwordError}
                                                    helperText={passwordError ? "Enter valid password" : ""}
                                                    onChange={(e) => setPasswordError(false)}
                                                    required
                                                    fullWidth
                                                    name="password"
                                                    label="Password"
                                                    type={showPassword ? "text" : "password"}
                                                    id="password"
                                                    autoComplete="new-password"
                                                />
                                            </Grid>
                                            <Grid item xs={12}>
                                                <FormControlLabel
                                                    control={
                                                        <Checkbox
                                                            onChange={() => setShowPassword(!showPassword)}
                                                            value={showPassword}
                                                            color="primary"
                                                        />
                                                    }
                                                    label="Show Password"
                                                />
                                            </Grid>
                                        </Grid>
                                        <Button
                                            type="submit"
                                            fullWidth
                                            variant="contained"
                                            sx={{ mt: 3, mb: 2, background: `radial-gradient(circle, rgba(63,94,251,1) 0%, rgba(252,70,107,1) 100%);` }}
                                        >
                                            Update Profile
                                        </Button>
                                    </Box>
                                </Box>
                            </Container>
                        </ThemeProvider>
                    </Grid>
                </Grid>

            </Box>

        </div>

    );
};

export default ProfilePage;
