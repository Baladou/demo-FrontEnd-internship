import {

  Box,

  Card,
  CardHeader,
  makeStyles, Table,
  TableBody,
  TableCell,
  TableHead,
  TablePagination,
  TableRow,
  Typography
} from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import React, { useState } from 'react';
import PerfectScrollbar from 'react-perfect-scrollbar';


const useStyles = makeStyles((theme) => ({
  root: {},
  avatar: {
    marginRight: theme.spacing(2)
  }
}));

const RolesDisplay = (props) => {
  const classes = useStyles();
  const [selectedroleIds, setselectedroleIds] = useState([]);
  const [limit, setLimit] = useState(5);
  const [page, setPage] = useState(0);
  /*
    const handleSelectAll = (event) => {
      let newselectedroleIds;
  
      if (event.target.checked) {
        newselectedroleIds = roles.map((role) => role.id);
      } else {
        newselectedroleIds = [];
      }
  
      setselectedroleIds(newselectedroleIds);
    };
  /*
    const handleSelectOne = (event, id) => {
      const selectedIndex = selectedroleIds.indexOf(id);
      let newselectedroleIds = [];
  
      if (selectedIndex === -1) {
        newselectedroleIds = newselectedroleIds.concat(selectedroleIds, id);
      } else if (selectedIndex === 0) {
        newselectedroleIds = newselectedroleIds.concat(selectedroleIds.slice(1));
      } else if (selectedIndex === selectedroleIds.length - 1) {
        newselectedroleIds = newselectedroleIds.concat(selectedroleIds.slice(0, -1));
      } else if (selectedIndex > 0) {
        newselectedroleIds = newselectedroleIds.concat(
          selectedroleIds.slice(0, selectedIndex),
          selectedroleIds.slice(selectedIndex + 1)
        );
      }
  
      setselectedroleIds(newselectedroleIds);
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
      <CardHeader title="Roles" />
      <PerfectScrollbar>
        <Box minWidth={800}>
          <Table>
            <TableHead>
              <TableRow>

                <TableCell>
                  Role ID
                </TableCell>
                <TableCell>
                  Role Name
                </TableCell>
                <TableCell>
                  Delete Role
                </TableCell>

              </TableRow>
            </TableHead>
            <TableBody>
              {props.roles.slice(page * limit, page * limit + limit).map((role) => (
                <TableRow
                  hover
                  key={role.roleId}
                  selected={selectedroleIds.indexOf(role.id) !== -1}
                >

                  <TableCell>
                    <Box
                      alignItems="center"
                      display="flex"
                    >

                      <Typography
                        color="textPrimary"
                        variant="body1"
                      >
                        {role.id}
                      </Typography>
                    </Box>
                  </TableCell>
                  <TableCell>
                    {role.name}
                  </TableCell>
                  <TableCell>
                    <IconButton aria-label="delete" onClick={() => props.deleteRole(role.id)} >
                      <DeleteIcon />
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
        count={props.roles.length}
        onChangePage={handlePageChange}
        onChangeRowsPerPage={handleLimitChange}
        page={page}
        rowsPerPage={limit}
        rowsPerPageOptions={[5, 10, 25]}
      />
    </Card>
  );
};

RolesDisplay.propTypes = {
  className: PropTypes.string,
  roles: PropTypes.array.isRequired
};

export default RolesDisplay;
