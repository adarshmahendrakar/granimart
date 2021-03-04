import React from 'react'
import Controls from '../controls/Controls';
import { AddIcCallOutlined, Search,Add as AddIcon } from '@material-ui/icons';
import {Box, InputAdornment, Toolbar} from '@material-ui/core'
export default  ({ filter, setFilter, classes,add }) => {
    return (
      <Toolbar>
                      <Controls.Input
                          label="Search Here.."
                          className={classes.searchInput}
                          value={filter || ""}
                          size={'small'}
          onChange={e => setFilter(e.target.value)}
                          InputProps={{
                              startAdornment: (<InputAdornment position="start">
                                  <Search />
                              </InputAdornment>)
                          }}
                      />
                      <Box flex='1'/>
                      {add}
                  </Toolbar>
    );
  };
