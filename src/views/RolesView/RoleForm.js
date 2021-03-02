import React, { useState } from 'react';

import {
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  Divider,
  Grid,
  TextField
} from '@material-ui/core';



class RoleForm extends React.Component  {
  constructor(props) {
   
    super(props);
    this.state = {
    name:''

      
    }
  }
  onNameChange(event) {
    this.setState({name: event.target.value})
  }
 
  handleSubmit(event){
  this.props.postRole(this.state.name);
  window.location.reload();
    event.preventDefault();
   
    
  }
render(){
  return (
    <form
      onSubmit={this.handleSubmit.bind(this)} method="POST"
    >
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
              
                label="Role Name"
                name="name"
                onChange={this.onNameChange.bind(this)}
                required
                value={this.state.name}
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
};

}
export default RoleForm;
