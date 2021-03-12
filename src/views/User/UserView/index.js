import {
  Box,
  Container
} from '@material-ui/core';
import Page from '../../../components/Page';
import { fetchUsers } from '../../../redux-saga/actionCreators/users';

import React, { Component } from 'react'
import { connect } from 'react-redux';





class UserView extends Component {


  componentDidMount() {

  }
  componentDidUpdate() {

  }
  render() {
    const {



    } = this.props;

    return (
      <Page title="Users">
        <Container maxWidth={false}>

          <Box mt={3}>

          </Box>

        </Container>
      </Page>
    )
  }
}

function mapStateToProps(state) {
  return {
    state
  }
}

function mapDispatchToProps(dispatch) {
  getUsers: () => dispatch(fetchUsers())
}



export default connect(mapStateToProps, mapDispatchToProps)(UserView)