

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
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import React from 'react';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
class EditForm extends React.Component {
    constructor(props) {

        super(props);
        this.state = {
            username: this.props.user.username,
            firstName: this.props.user.firstName,
            lastName: this.props.user.lastName,
            email: this.props.user.email,
            roleName: this.props.user.role.name,
            supervisorUserName: (this.props.user.supervisor ? this.props.user.supervisor.username : null)
        }


    }

    onUsernameChange(event) {
        this.setState({ username: event.target.value })
    }
    onFirstNameChange(event) {
        this.setState({ firstName: event.target.value })
    }
    onLastNameChange(event) {
        this.setState({ lastName: event.target.value })
    }

    onEmailChange(event) {
        this.setState({ email: event.target.value })
    }
    onRoleNameChange(event) {
        this.setState({ roleName: event.target.value })
    }
    onSupervisorUserNameChange(event) {
        this.setState({ supervisorUserName: event.target.value })
    }

    /////////////////




    handleSubmit(event) {
        event.preventDefault();
        this.props.updateUser(this.props.user.userId, this.state.username, this.state.firstName, this.state.lastName, this.state.email, this.state.roleName,
            this.state.supervisorUserName);
        /*this.setState({
    username: '',
    firstName: '',
    lastName: '',
    email: '',
    roleName: '',
    supervisorUserName: null

});*/
        //console.log("this is users comp " + this.props.errMessAddUser.message)
        //window.location.reload();



    }
    render() {
        //console.log(this.props.user.username)
        return (

            <form
                onSubmit={this.handleSubmit.bind(this)} method="POST"
            >
                <Card>
                    <CardHeader
                        title="Edit user"
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
                                    defaultValue="kln"
                                    onChange={this.onUsernameChange.bind(this)}
                                    value={this.state.username}

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
                                    defaultValue="Hello World"
                                    label="Email"
                                    name="email"

                                    onChange={this.onEmailChange.bind(this)}
                                    value={this.state.email}
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
                                    onChange={this.onLastNameChange.bind(this)}
                                    value={this.state.lastName}
                                    variant="outlined"
                                    defaultValue="Hello World"
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
                                    onChange={this.onFirstNameChange.bind(this)}
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
                                <FormControl variant="outlined" fullWidth  >
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
                                <TextField
                                    fullWidth
                                    label="Supervisor username"
                                    name="supervisorUserName"
                                    onChange={this.onSupervisorUserNameChange.bind(this)}
                                    value={this.state.supervisorUserName}
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
                                Edit
    </Button>
                        </Box>
                    </CardContent>
                    <Divider />


                </Card>
            </form>
        );
    }
}
export default EditForm