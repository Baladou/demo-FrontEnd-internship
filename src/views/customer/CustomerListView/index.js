import {
  Box,
  Container
} from '@material-ui/core';
import Page from '../../../components/Page';
import Results from './Results';
import Toolbar from './Toolbar';
import React, { Component } from 'react'
import {connect} from 'react-redux'

import {getUsers} from '../../../redux/actions/usersActions';





 class CustomerListView extends Component {
    componentDidMount(){
        this.props.getUsers()
        //console.log( this.props.getUsers())
        
    }
    render() {
        const {users} = this.props.users
      // console.log(users)
        
        return (
          <Page
      title="Users"
    >
      <Container maxWidth={false}>
        <Toolbar />
        <Box mt={3}>
          <Results users={users}></Results>
        </Box>
      </Container>
    </Page>
        )
    }
}

const mapStateToProps  = (state) => ({users:state.users})

export default connect(mapStateToProps, {getUsers})(CustomerListView)