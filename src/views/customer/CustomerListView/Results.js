import {
  Box,
  Card,
  makeStyles
} from '@material-ui/core';
import { DataGrid } from '@material-ui/data-grid';
import PropTypes from 'prop-types';
import React, { useState } from 'react';
import EditForm from './EditForm';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';

const columns = [
  { field: 'id', headerName: 'ID', width: 70 },
  { field: 'firstName', headerName: 'First name', width: 130 },
  { field: 'lastName', headerName: 'Last name', width: 130 },
  { field: 'username', headerName: 'username', width: 130 },
  { field: 'email', headerName: 'Email', width: 200 },
  {
    field: 'rolename',
    headerName: 'Role Name',
    width: 130
  },
  {
    field: 'supervisorUsername',
    headerName: 'Supervisor Username',
    width: 200,

  },

];


const useStyles = makeStyles((theme) => ({
  root: {},
  avatar: {
    marginRight: theme.spacing(2)
  }
}));

const Results = (props) => {
  const classes = useStyles();
  const [selectedUserIds, setselectedUserIds] = useState([]);
  const [selectedUserId, setselectedUserId] = useState({});

  const [limit, setLimit] = useState(5);
  const [page, setPage] = useState(0);
  const [showForm, setShowform] = useState(false)
  const [order, setOrder] = useState()
  const [orderBy, setOrderBy] = useState()
  const SetUserEdit = (user) => {
    setShowform(!showForm);
    setselectedUserId(user)

  }
  props.users.map((user) => {
    user.id = user.userId; user.rolename = user.role.name;
    user.supervisorUsername = (user.supervisor ? user.supervisor.username : 'No-supervisor');;
  })



  const handleLimitChange = (event) => {
    setLimit(event.target.value);
  };

  const handlePageChange = (event, newPage) => {
    setPage(newPage);
  };

  return (

    <Card

    >
      <Box>
        {showForm && <EditForm roles={props.roles} user={selectedUserId} updateUser={props.updateUser} />}
      </Box>
      <div style={{ height: 500, width: '100%' }}>
        <DataGrid Height="Auto" rows={props.users} columns={columns} rowsPerPageOptions={[5, 10, 25]} pageSize={5} checkboxSelection />
      </div>

    </Card>

  );
};

Results.propTypes = {
  className: PropTypes.string,
  users: PropTypes.array.isRequired
};

export default Results;
