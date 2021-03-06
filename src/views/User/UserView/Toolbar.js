import React, { useState } from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import {
  Box,
  Button,
  Card,
  CardContent,
  TextField,
  InputAdornment,
  SvgIcon,
  makeStyles
} from '@material-ui/core';
import { Search as SearchIcon } from 'react-feather';
import UserForm from './UserForm'

const useStyles = makeStyles((theme) => ({
  root: {},
  importButton: {
    marginRight: theme.spacing(1)
  },
  exportButton: {
    marginRight: theme.spacing(1)
  }
}));

const Toolbar = (props) => {
  const classes = useStyles();
  const [showForm, setShowform] = useState(false)
  //console.log(props.roles)
  return (


    <div
      className={clsx(classes.root)}

    >

      <Box mt={2}>

        <Card>
          <CardContent>
            <Box maxWidth={500}>
              <TextField
                fullWidth
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <SvgIcon
                        fontSize="small"
                        color="action"
                      >
                        <SearchIcon />
                      </SvgIcon>
                    </InputAdornment>
                  )
                }}
                placeholder="Search user"
                variant="outlined"
              />
            </Box>
            <Box
              display="flex"
              justifyContent="flex-end"
              m={0}

            >

              <Button
                color="primary"
                variant="contained"
                onClick={() => setShowform(true)}
              >
                Add user
        </Button>
            </Box>

          </CardContent>
        </Card>

      </Box>
      <Box>
        {showForm && <UserForm users={props.users} postUser={props.postUser} roles={props.roles} errMessAddUser={props.errMessAddUser} />}
      </Box>
    </div>
  );
};

Toolbar.propTypes = {
  className: PropTypes.string
};

export default Toolbar;
