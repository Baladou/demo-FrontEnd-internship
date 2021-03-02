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

import useRoleForm from './useRoleForm';


const RoleForm = () => { 
  const display = () => {
    alert(`Role Created!
           Name: ${inputs.name}`);
  }
  const {inputs, handleInputChange, handleSubmit} = useRoleForm(display);
  return (
    <form onSubmit={handleSubmit}>
      <Card>
        <CardHeader
          title="Add a new role"
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
              
                label="Name"
                name="name"
                onChange={handleInputChange} 
                value={inputs.name}
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

export default RoleForm