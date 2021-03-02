import React, { useState } from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import moment from 'moment';
import PerfectScrollbar from 'react-perfect-scrollbar';
import {
  Avatar,
  Box,
  Grid,
  Card,
  CardHeader,
  Checkbox,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TablePagination,
  TableRow,
  Typography,
  makeStyles
} from '@material-ui/core';


const useStyles = makeStyles((theme) => ({
  root: {},
  avatar: {
    marginRight: theme.spacing(2)
  }
}));

const RolesDisplay = ({ className, roles, ...rest }) => {
  const classes = useStyles();
  const [selectedroleIds, setselectedroleIds] = useState([]);
  const [limit, setLimit] = useState(10);
  const [page, setPage] = useState(0);

  const handleSelectAll = (event) => {
    let newselectedroleIds;

    if (event.target.checked) {
      newselectedroleIds = roles.map((role) => role.id);
    } else {
      newselectedroleIds = [];
    }

    setselectedroleIds(newselectedroleIds);
  };

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

  const handleLimitChange = (event) => {
    setLimit(event.target.value);
  };

  const handlePageChange = (event, newPage) => {
    setPage(newPage);
  };

  return (
    
    <Card
      className={clsx(classes.root, className)}
      {...rest}
    >
      <CardHeader title="Roles" />
      <PerfectScrollbar>
        <Box minWidth={800}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell padding="checkbox">
                  <Checkbox
                    checked={selectedroleIds.length === roles.length}
                    color="primary"
                    indeterminate={
                      selectedroleIds.length > 0
                      && selectedroleIds.length < roles.length
                    }
                    onChange={handleSelectAll}
                  />
                </TableCell>
                <TableCell>
                  Role ID
                </TableCell>
                <TableCell>
                  Role Name
                </TableCell>
                
              </TableRow>
            </TableHead>
            <TableBody>
              {roles.slice(0, limit).map((role) => (
                <TableRow
                  hover
                  key={role.roleId}
                  selected={selectedroleIds.indexOf(role.roleId) !== -1}
                >
                  <TableCell padding="checkbox">
                    <Checkbox
                      checked={selectedroleIds.indexOf(role.roleId) !== -1}
                      onChange={(event) => handleSelectOne(event, role.id)}
                      value="true"
                    />
                  </TableCell>
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
                  
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Box>
      </PerfectScrollbar>
      <TablePagination
        component="div"
        count={roles.length}
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
