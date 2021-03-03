import {
  Box,
  Container
} from '@material-ui/core';
import Page from '../../../components/Page';
import Results from './Results';
import Toolbar from './Toolbar';
import React, { Component } from 'react'
import { connect } from 'react-redux'

import { getUsers, postUser } from '../../../redux/actions/usersActions';
import { getRoles } from '../../../redux/actions/rolesActions';
import UsersDisplay from './UsersDisplay';




class CustomerListView extends Component {
  componentDidMount() {
    this.props.getUsers()
    this.props.getRoles()


  }
  render() {
    const { users } = this.props.users
    const { roles } = this.props.roles
    //console.log(roles)

    return (
      <Page
        title="Users"
      >
        <Container maxWidth={false}>
          <Toolbar postUser={this.props.postUser} roles={roles} />
          <Box mt={3}>
            <Results users={users}></Results>
            <UsersDisplay users={users} ></UsersDisplay>
          </Box>
        </Container>
      </Page>
    )
  }
}

const mapStateToProps = (state) => ({ users: state.users, roles: state.roles })



const mapDispatchToProps = dispatch => ({
  getUsers: () => dispatch(getUsers()),
  getRoles: () => dispatch(getRoles()),
  postUser: (username, firstName, lastName, email, roleName, supervisorUserName) =>
    dispatch(postUser(username, firstName, lastName, email, roleName, supervisorUserName)),

});

export default connect(mapStateToProps, mapDispatchToProps)(CustomerListView)