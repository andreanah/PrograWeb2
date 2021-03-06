import React, {useState} from 'react';
import {
  Grid,
  TextField,
  FormControlLabel,
  Button,
  Link,
  CssBaseline,
  Avatar,
  Paper,
  Checkbox,
  Typography,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';

import {LoginAPI} from '../api/SecurityAPI'

import SignUp from '../components/SignUp';
import CustomizedDialogs from '../components/dialogSignUp';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

import { useAlert } from 'react-alert'

const useStyles = makeStyles((theme) => ({
  root: {
    height: '100vh',
  }, 
  image: {
    backgroundImage: 'url(./BgLogin2.png)',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },
  paper: {
    margin: theme.spacing(8, 4),
    marginTop: "20%",
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    fontSize: 70 ,
    backgroundColor: theme.palette.secondary,
  },
  form: {
    width: '100%', 
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

const Login = (props) => {
  const alert = useAlert();
  console.log(props)

  const [login, setLogin] = useState({
    UserName: "",
    Password: "",
});

const loginSubmit = async (e) => {
  e.preventDefault();
  
  var res = await LoginAPI(login);
  if(!res.isAxiosError)
  {
    var token = res;
    localStorage.setItem("token", token);
    window.location.href = "MainPage";
  }else{
    var errorMsg = res?.response?.data || "Hubo un error al intentar ingresar"
    alert.error(errorMsg);
  }

  


  // alert.success("Login succesfully");
  // <Redirect to ={"/MainPage"}/>
}

const handleChange = (e) => {
  const { name, value } = e.target;
  setLogin({
      ...login,
      [name]: value
  })
  console.log(name, value);
}

  const classes = useStyles();

  return (
    <Router>
    <Grid container component='main' className={classes.root}>
      <CssBaseline />
      <Grid item xs={false} sm={4} md={7} className={classes.image} />
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
          </Avatar>

          <Typography component='h1' variant='h5' style={{ marginTop: "5%"}}>
            <strong >Inicia Sesión</strong>
          </Typography>

          <form onSubmit={loginSubmit} className={classes.form} noValidate>
            <TextField
              variant='outlined'
              margin='normal'
              required
              fullWidth
              id='UserName'
              label='Nombre de usuario'
              name='UserName'
              autoComplete='UserName'
              autoFocus
              onChange={handleChange}
            />

            <TextField
              variant='outlined'
              margin='normal'
              required
              fullWidth
              name='Password'
              label='Contraseña'
              type='password'
              id='Password'
              autoComplete='current-password'
              onChange={handleChange}
            />
            
            <Button
              type='submit'
              fullWidth
              variant='contained'
              color='secondary'
              className={classes.submit}
            //  href='/Header'
            >
              Ingresar
             
            </Button>
          </form>
            

            <Grid container>
              <Grid mt={3} item justify="center">
                <CustomizedDialogs>
                  <SignUp/>
                </CustomizedDialogs>
              </Grid>
            </Grid>
        </div>
      </Grid>
    </Grid>
    </Router>
  );
};

export default Login;
