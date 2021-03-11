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
function getID(params) {
  console.log(getID)
  return `${params.getValue('userId')}`;
}

const useStyles = makeStyles((theme) => ({
  root: {},
  avatar: {
    marginRight: theme.spacing(2)
  }
}));

const Results = (props) => {
  const classes = useStyles();

  const [selectedUserId, setselectedUserId] = useState({});
  const [selectionModel, setSelectionModel] = useState([]);

  const [showForm, setShowform] = useState(false)

  const SetUserEdit = (user) => {
    setShowform(!showForm);
    setselectedUserId(user)

  }
  props.users.map((user) => {
    user.id = user.userId; user.rolename = user.role.name;
    user.supervisorUsername = (user.supervisor ? user.supervisor.username : 'No-supervisor');;
  })
  //console.log(selectionModel)
  const columns = [

    { field: 'userId', headerName: 'ID', width: 100 },
    { field: 'firstName', headerName: 'First name', width: 130 },
    { field: 'lastName', headerName: 'Last name', width: 130 },
    { field: 'username', headerName: 'username', width: 130 },
    { field: 'email', headerName: 'Email', width: 200 },
    {
      field: 'rolename',
      headerName: 'Role Name',
      width: 150
    },
    {
      field: 'supervisorUsername',
      headerName: 'Supervisor Username',
      width: 200,

    },
    {
      field: "",
      headerName: "Edit Or Delete User",
      sortable: false,
      width: 180,
      disableClickEventBubbling: true,
      renderCell: (params) => (

        <div>
          <IconButton color='secondary'
            onClick={() => {
              const api = params.api;
              const fields = api
                .getAllColumns()
                .map((c) => c.field)
                .filter((c) => c !== "__check__" && !!c);
              const thisRow = {};

              fields.forEach((f) => {
                thisRow[f] = params.getValue(f);
              });
              SetUserEdit(thisRow)


            }}>
            <EditIcon />
          </IconButton >
          <IconButton onClick={() => props.deleteUser(params.getValue('userId'))} >
            <DeleteIcon />
          </IconButton>
        </div>
      )
    }

  ];




  return (

    <Card

    >
      <Box>
        {showForm && <EditForm roles={props.roles} user={selectedUserId} updateUser={props.updateUser} />}
      </Box>
      <div style={{ height: 400, width: '100%' }}>
        <DataGrid Height="Auto"
          rows={props.users}
          columns={columns}
          rowsPerPageOptions={[5, 10, 25]}
          pageSize={5}

          onSelectionModelChange={(newSelection) => {
            setSelectionModel(newSelection.selectionModel);
          }}
          selectionModel={selectionModel}
        />
      </div>

    </Card>

  );
};

Results.propTypes = {
  className: PropTypes.string,
  users: PropTypes.array.isRequired
};

export default Results;
