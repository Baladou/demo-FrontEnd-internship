import {
  Box,
  Container,
  Grid
} from '@material-ui/core';
import Page from '../../components/Page';
import RolesDisplay from './RolesDisplay';

import React, { Component } from 'react'
import { connect } from 'react-redux'
import RoleForm from './RoleForm';
import { getRoles, postRole, deleteRole } from '../../redux/actions/rolesActions';





class RolesView extends Component {
  componentDidMount() {
    this.props.getRoles()


  }
  componentDidUpdate() {
    this.props.getRoles()


  }
  render() {
    const { roles } = this.props.roles
    //console.log(roles)

    return (
      <Page
        title="Roles"
      >

        <Container maxWidth={false}>
          <Grid
            container
            spacing={2}
          >
            <Grid
              item
              lg={12}
              md={6}
              xl={3}
              xs={12}
            ></Grid>
            <Grid
              item
              lg={12}
              md={6}
              xl={3}
              xs={12}
            >
              <RoleForm postRole={this.props.postRole} />
            </Grid>
            <Grid
              item
              lg={12}
              md={6}
              xl={3}
              xs={12}
            >
              <Box mt={3}>
                <RolesDisplay roles={roles} deleteRole={this.props.deleteRole} />
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Page>
    )
  }
}

const mapStateToProps = (state) => ({ roles: state.roles })


const mapDispatchToProps = dispatch => ({
  getRoles: () => dispatch(getRoles()),
  postRole: (name) => dispatch(postRole(name)),
  deleteRole: (id) => dispatch(deleteRole(id)),

});

export default connect(mapStateToProps, mapDispatchToProps)(RolesView)