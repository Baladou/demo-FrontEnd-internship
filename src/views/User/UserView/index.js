import {
  Box,
  Container
} from '@material-ui/core';
import Page from '../../../components/Page';
import { fetchUsers, CreateUser } from '../../../redux-saga/actionCreators/users';
import { fetchRoles } from '../../../redux-saga/actionCreators/roles';
import React, { Component } from 'react'
import { connect } from 'react-redux';
import Results from './Results';
import Toolbar from './Toolbar'





class UserView extends Component {


  componentDidMount() {
    this.props.getUsers()
    this.props.getRoles()

  }
  componentDidUpdate() {

  }
  render() {
    console.log("get " + this.props.roles.roles)
    return (
      <Page title="Users">
        <Container maxWidth={false}>

          <Box mt={3}>
            <Toolbar users={this.props.users.users} roles={this.props.roles.roles} postUser={this.props.postUser} />
          </Box>
          <Results users={this.props.users.users} />

        </Container>
      </Page>
    )
  }
}

function mapStateToProps(state) {
  console.log(state.users)
  return {
    users: state.users,
    roles: state.roles,
  }

}

function mapDispatchToProps(dispatch) {
  return {
    getUsers: () => dispatch(fetchUsers()),
    getRoles: () => dispatch(fetchRoles()),

  }
}



export default connect(mapStateToProps, mapDispatchToProps)(UserView)