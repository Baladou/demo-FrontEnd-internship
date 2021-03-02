import { useState, useEffect, useRef } from "react";

import {
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  Divider,
  Grid,
  TextField,
  makeStyles
} from '@material-ui/core';
import axios from 'axios';

const UserForm = () => { 
  return (
    <form
     
    >
      <Card>
        <CardHeader
          title="Add a new user"
        />
        <Divider />
        <CardContent>
          <Grid
            container
            spacing={6}
          >
            <Grid
              item
              md={6}
              xs={12}
            >
              <TextField
                fullWidth
              
                label="Username"
                name="username"
                required
                variant="outlined"
              />
            </Grid>
            <Grid
              item
              md={6}
              xs={12}
            >
              <TextField
                fullWidth
              
                label="Email"
                name="email"
                required
                variant="outlined"
              />
            </Grid>
            <Grid
              item
              md={6}
              xs={12}
            >
              <TextField
                fullWidth
                label="Lastname"
                name="lastName"
                required
                variant="outlined"
              />
            </Grid>
            <Grid
              item
              md={6}
              xs={12}
            >
              <TextField
                fullWidth
                label="Firstname"
                name="firstName"
                required
                variant="outlined"
              />
            </Grid>
           
              
            
           
          </Grid>
          
            
               <Box
          display="flex"
          justifyContent="flex-end"
          p={2}
        >
          <Button
            color="primary"
            variant="contained"
            type="submit"
          >
     Add
          </Button>
        </Box>
          </CardContent>  
        <Divider />
       
         
      </Card>
    </form>
  );
}

export default UserForm