import React from "react";
import {
  Table as MuiTable,
  TableSortLabel,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  TableFooter,
  TablePagination,
  TextField,
  TableContainer,
  Box,
  Button,
  Toolbar,
  InputAdornment
} from "@material-ui/core";
import PropTypes from "prop-types";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import ArrowUpwardIcon from "@material-ui/icons/ArrowUpward";
import ArrowDownwardIcon from "@material-ui/icons/ArrowDownward";
import EditIcon from "@material-ui/icons/Edit";
import AddIcon from "@material-ui/icons/Add";
import DeleteIcon from "@material-ui/icons/Delete";
import IconButton from "@material-ui/core/IconButton";
import FirstPageIcon from "@material-ui/icons/FirstPage";
import KeyboardArrowLeft from "@material-ui/icons/KeyboardArrowLeft";
import KeyboardArrowRight from "@material-ui/icons/KeyboardArrowRight";
import LastPageIcon from "@material-ui/icons/LastPage";
import TableSearchHeader from './TableSearchHeader'

import {
  useTable,
  usePagination,
  useSortBy,
  useGlobalFilter
} from "react-table";

const useStyles = makeStyles(theme => ({
    table: {
        marginTop: theme.spacing(3),
        '& thead th': {
            fontWeight: '600',
            color: theme.palette.primary.main,
            backgroundColor: theme.palette.secondary.main,
        },
        '& tbody td': {
            fontWeight: '300',
        },
        '& tbody tr:hover': {
            backgroundColor: '#fffbf2',
            cursor: 'pointer',
        },
    },
}))

const useStyles1 = makeStyles(theme => ({
  root: {
    flexShrink: 0,
    marginLeft: theme.spacing(2.5)
  }
}));

function TablePaginationActions(props) {
  const classes = useStyles1();
  const theme = useTheme();
  const {
    canNextPage,
    canPreviousPage,
    nextPage,
    previousPage,
    gotoPage,
    pageCount
  } = props;

  const handleBackButtonClick = previousPage;

  const handleNextButtonClick = nextPage;

  return (
    <div className={classes.root}>
      <IconButton
        onClick={() => gotoPage(0)}
        disabled={!canPreviousPage}
        aria-label="first page"
      >
        {theme.direction === "rtl" ? <LastPageIcon /> : <FirstPageIcon />}
      </IconButton>
      <IconButton
        onClick={handleBackButtonClick}
        disabled={!canPreviousPage}
        aria-label="previous page"
      >
        {theme.direction === "rtl" ? (
          <KeyboardArrowRight />
        ) : (
          <KeyboardArrowLeft />
        )}
      </IconButton>
      <IconButton
        onClick={handleNextButtonClick}
        disabled={!canNextPage}
        aria-label="next page"
      >
        {theme.direction === "rtl" ? (
          <KeyboardArrowLeft />
        ) : (
          <KeyboardArrowRight />
        )}
      </IconButton>
      <IconButton
        onClick={() => gotoPage(pageCount - 1)}
        disabled={!canNextPage}
        aria-label="last page"
      >
        {theme.direction === "rtl" ? <FirstPageIcon /> : <LastPageIcon />}
      </IconButton>
    </div>
  );
}

TablePaginationActions.propTypes = {
  count: PropTypes.number.isRequired,
  onChangePage: PropTypes.func.isRequired,
  page: PropTypes.number.isRequired,
  rowsPerPage: PropTypes.number.isRequired
};

function Table({ columns, data,add }) {
  // Use the state and functions returned from useTable to build your UI
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    page,
    nextPage,
    previousPage,
    canNextPage,
    state,
    pageOptions,
    setPageSize,
    gotoPage,
    setGlobalFilter,
    pageCount,
    canPreviousPage,
    prepareRow
  } = useTable(
    {
      columns,
      data
    },
    useGlobalFilter,
    useSortBy,
    usePagination
  );

  // Render the UI for your table
  const classes=useStyles()
 
  return (
    <Box>
      <TableSearchHeader
        filter={state.globalFilter}
        setFilter={setGlobalFilter}
        add={add}
      classes={classes}
      />
      <TableContainer >
        <MuiTable {...getTableProps()} className={classes.table}>
          <TableHead>
            {headerGroups.map(headerGroup => (
              <TableRow {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map(column => (
                  <TableCell
                    {...column.getHeaderProps(column.getSortByToggleProps)}
                  >
                    {column.render("Header")}
                    <TableSortLabel>
                      {column.isSorted ? (
                        column.isSortedDesc ? (
                          <ArrowDownwardIcon fontSize="small" />
                        ) : (
                          <ArrowUpwardIcon fontSize="small" />
                        )
                      ) : (
                        ""
                      )}
                    </TableSortLabel>
                  </TableCell>
                ))}
              </TableRow>
            ))}
          </TableHead>
          <TableBody {...getTableBodyProps()}>
            {page.map((row, i) => {
              prepareRow(row);
              return (
                <TableRow {...row.getRowProps()}>
                  {row.cells.map(cell => {
                    return (
                      <TableCell {...cell.getCellProps()}>
                        {cell.render("Cell")}
                      </TableCell>
                    );
                  })}
                </TableRow>
              );
            })}
          </TableBody>
          <TableFooter>
            <TablePagination
              rowsPerPageOptions={[5, 10, 25]}
              page={state.pageIndex}
              onChangeRowsPerPage={e => {
                setPageSize(e.target.value);
                gotoPage(0);
              }}
              rowsPerPage={state.pageSize}
              count={data.length}
              SelectProps={{
                inputProps: { "aria-label": "rows per page" },
                native: true
              }}
              ActionsComponent={() => (
                <TablePaginationActions
                  nextPage={nextPage}
                  previousPage={previousPage}
                  canNextPage={canNextPage}
                  canPreviousPage={canPreviousPage}
                  gotoPage={gotoPage}
                  pageCount={pageCount}
                />
              )}
            />
          </TableFooter>
        </MuiTable>
      </TableContainer>
      
    </Box>
  );
}

function App({data,columns,add}) {
 
  return <Table columns={columns} data={data} add={add}/>;
}

export default App;
