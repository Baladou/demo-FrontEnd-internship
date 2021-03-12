import React from 'react';

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



class EditRoleForm extends React.Component {
    constructor(props) {

        super(props);
        this.state = {
            name: this.props.role.name


        }
    }
    onNameChange(event) {
        this.setState({ name: event.target.value })
    }

    handleSubmit(event) {
        event.preventDefault();
        this.props.updateRole(this.props.role.id, this.state.name);




    }
    render() {
        return (
            <form
                onSubmit={this.handleSubmit.bind(this)} method="POST"
            >
                <Card>
                    <CardHeader
                        title="Edit the current Role"
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
                                Edit
          </Button>
                        </Box>
                    </CardContent>
                    <Divider />


                </Card>
            </form>
        );
    };

}
export default EditRoleForm;
