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
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import React from 'react';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
class UserForm extends React.Component {
  constructor(props) {

    super(props);
    this.state = {
      username: '',
      firstName: '',
      lastName: '',
      email: '',
      roleName: '',
      supervisorUserName: null
    }


  }

  onRoleNameChange(event) {
    console.log(event.target.value);
    this.setState({ roleName: event.target.value })
  }
  onSupervisorUserNameChange(event) {
    this.setState({ supervisorUserName: event.target.value })
  }

  handleChange(evt) {
    const value = evt.target.value;
    this.setState({
      ...this.state,
      [evt.target.name]: value
    });
  }

  /////////////////




  handleSubmit(event) {
    event.preventDefault();
    this.props.postUser(this.state.username, this.state.firstName, this.state.lastName, this.state.email, this.state.roleName,
      this.state.supervisorUserName);
    this.setState({
      username: '',
      firstName: '',
      lastName: '',
      email: '',
      roleName: '',
      supervisorUserName: null

    });
    //console.log("this is users comp " + this.props.errMessAddUser.message)
    //window.location.reload();



  }
  render() {

    return (

      <ValidatorForm
        onSubmit={this.handleSubmit.bind(this)} method="POST"
        ref="form"
        onError={errors => console.log(errors)}
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
                  defaultValue="This is the default value"
                  fullWidth
                  label="Username"
                  name="username"
                  onChange={this.handleChange.bind(this)}
                  value={this.state.username}
                  required
                  variant="outlined"
                />
              </Grid>

              <Grid
                item
                md={6}
                xs={12}
              >
                <TextValidator
                  fullWidth
                  label="Email"
                  onChange={this.handleChange.bind(this)}
                  name="email"
                  value={this.state.email}
                  variant="outlined"
                  required
                  validators={['required', 'isEmail']}
                  errorMessages={['this field is required', 'email is not valid']}
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
                  onChange={this.handleChange.bind(this)}
                  value={this.state.lastName}
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
                  onChange={this.handleChange.bind(this)}
                  value={this.state.firstName}
                  variant="outlined"
                />
              </Grid>

              <Grid
                item
                lg={6}
                md={6}
                xs={12}
              >
                <FormControl variant="outlined" fullWidth required >
                  <InputLabel id="demo-simple-select-filled-label">Role Name</InputLabel>
                  <Select

                    labelId="demo-simple-select-filled-label"
                    id="demo-simple-select"
                    value={this.state.roleName}
                    onChange={this.onRoleNameChange.bind(this)}
                    variant="outlined"


                  >
                    {this.props.roles.map((role) => (
                      <MenuItem value={role.name}>{role.name}</MenuItem>


                    ))}
                  </Select>
                </FormControl>
              </Grid>
              <Grid
                item
                md={6}
                xs={12}
              >
                <FormControl variant="outlined" fullWidth  >
                  <InputLabel id="demo-simple-select-filled-label">Supervisor username</InputLabel>
                  <Select

                    labelId="demo-simple-select-filled-label"
                    id="demo-simple-select"
                    fullWidth
                    onChange={this.onSupervisorUserNameChange.bind(this)}
                    value={this.state.supervisorUserName}
                    variant="outlined"


                  >
                    {this.props.users.map((user) => (
                      <MenuItem value={user.username}>{user.username}: {user.role.name}</MenuItem>


                    ))}
                  </Select>
                </FormControl>

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
      </ValidatorForm>
    );
  }
}
export default UserForm