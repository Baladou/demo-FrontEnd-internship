import React, { useState } from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import moment from 'moment';
import PerfectScrollbar from 'react-perfect-scrollbar';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import EditForm from './EditForm'
import {
  Avatar,
  Box,
  Card,

  Table,
  TableBody,
  TableCell,
  TableHead,
  TablePagination,
  TableRow,
  Typography,
  makeStyles
} from '@material-ui/core';
import getInitials from '../../../utils/getInitials';

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
  const SetUserEdit = (user) => {
    setShowform(!showForm);
    setselectedUserId(user)

  }
  /*
    const handleSelectAll = (event) => {
      let newselectedUserIds;
  
      if (event.target.checked) {
        newselectedUserIds = users.map((user) => user.userId);
      } else {
        newselectedUserIds = [];
      }
  
      setselectedUserIds(newselectedUserIds);
    };
  
    const handleSelectOne = (event, id) => {
      const selectedIndex = selectedUserIds.indexOf(id);
      let newselectedUserIds = [];
  
      if (selectedIndex === -1) {
        newselectedUserIds = newselectedUserIds.concat(selectedUserIds, id);
      } else if (selectedIndex === 0) {
        newselectedUserIds = newselectedUserIds.concat(selectedUserIds.slice(1));
      } else if (selectedIndex === selectedUserIds.length - 1) {
        newselectedUserIds = newselectedUserIds.concat(selectedUserIds.slice(0, -1));
      } else if (selectedIndex > 0) {
        newselectedUserIds = newselectedUserIds.concat(
          selectedUserIds.slice(0, selectedIndex),
          selectedUserIds.slice(selectedIndex + 1)
        );
      }
  
      setselectedUserIds(newselectedUserIds);
    };
  */
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
      <PerfectScrollbar>
        <Box minWidth={800}>
          <Table>
            <TableHead>
              <TableRow>

                <TableCell>
                  Name
                </TableCell>
                <TableCell>
                  Username
                </TableCell>
                <TableCell>
                  Email
                </TableCell>
                <TableCell>
                  Role
                </TableCell>

                <TableCell>
                  Supervisor
                </TableCell>
                <TableCell>
                  Creation date
                </TableCell>
                <TableCell>Delete User</TableCell>
                <TableCell>Update User</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {props.users.slice(page * limit, page * limit + limit).map((user) => (
                <TableRow
                  hover
                  key={user.userId}
                  selected={selectedUserIds.indexOf(user.userId) !== -1}
                >

                  <TableCell>
                    <Box
                      alignItems="center"
                      display="flex"
                    >
                      <Avatar
                        className={classes.avatar}
                        src={user.avatarUrl}
                      >
                        {getInitials(user.lastName + " " + user.firstName)}
                      </Avatar>
                      <Typography
                        color="textPrimary"
                        variant="body1"
                      >
                        {user.lastName} {user.firstName}
                      </Typography>
                    </Box>
                  </TableCell>
                  <TableCell>
                    {user.username}
                  </TableCell>
                  <TableCell>
                    {user.email}
                  </TableCell>
                  <TableCell>
                    {user.role.name}
                  </TableCell>
                  <TableCell>
                    {user.supervisor != null && <span>{user.supervisor.username}</span> || <span> No-Supervisor</span>}
                  </TableCell>
                  <TableCell>
                    {moment(user.createdDate).format('DD/MM/YYYY')}
                  </TableCell>
                  <TableCell>
                    <IconButton aria-label="delete" onClick={() => props.deleteUser(user.userId)} >

                      <DeleteIcon />
                    </IconButton>
                  </TableCell>
                  <TableCell>
                    <IconButton aria-label="Edit" onClick={() => SetUserEdit(user)} >

                      <EditIcon />
                    </IconButton>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Box>
      </PerfectScrollbar>
      <TablePagination
        component="div"
        count={props.users.length}
        onChangePage={handlePageChange}
        onChangeRowsPerPage={handleLimitChange}
        page={page}
        rowsPerPage={limit}
        rowsPerPageOptions={[5, 10, 25]}
      />
    </Card>
  );
};

Results.propTypes = {
  className: PropTypes.string,
  users: PropTypes.array.isRequired
};

export default Results;
