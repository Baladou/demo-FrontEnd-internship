import {
  Box,
  Container
} from '@material-ui/core';
import Page from '../../../components/Page';
import { fetchUsers } from '../../../redux-saga/actionCreators/users';

import React, { Component } from 'react'
import { connect } from 'react-redux';
import Results from './Results';





class UserView extends Component {


  componentDidMount() {
    this.props.getUsers()

  }
  componentDidUpdate() {

  }
  render() {
    //console.log("get " + this.props.users)
    return (
      <Page title="Users">
        <Container maxWidth={false}>

          <Box mt={3}>

          </Box>
          <Results users={this.props.users.users} />

        </Container>
      </Page>
    )
  }
}

function mapStateToProps(state) {
  // console.log(state.users.users)
  return {
    users: state.users
  }

}

function mapDispatchToProps(dispatch) {

}



export default connect(mapStateToProps, { getUsers: fetchUsers })(UserView)