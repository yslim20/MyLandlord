import * as React from 'react';
import PropTypes from 'prop-types';
import { useRouter } from 'next/router'
import Box from '@mui/material/Box';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import TableSortLabel from '@mui/material/TableSortLabel';
import Paper from '@mui/material/Paper';
import Checkbox from '@mui/material/Checkbox';
import { visuallyHidden } from '@mui/utils';

// import list from '../../scripts/browse/list';

// ============ Imported Components ============== //
import Avatar from '../Avatar';

// ============ Tabel Head Create Data
// function createData(avatar, name, address, rate) {
// //   list();
//   return {
//     // avatar image (with src)
//     avatar,
//     // landlord name
//     name,
//     // landlord address
//     address,
//     // landlordd rate (1-5)
//     rate,
//   };
// }

// // ================ fake data for table body
// const rows = [
//   createData("", '','', ""),
//   createData("", '','', ""),
//   createData("", '','', ""),
//   createData("", '','', ""),
//   createData("", '','', ""),
//   createData("", '','', ""),
//   createData("", '','', ""),
// ];
// const rows = list();
// let rows = [];
// list().then(data => rows = data)
// console.log("this is rows: ", rows)

// ============ Function for filtering
function descendingComparator(a, b, orderBy) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

function getComparator(order, orderBy) {
  return order === 'desc'
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}

// This method is created for cross-browser compatibility, if you don't
// need to support IE11, you can use Array.prototype.sort() directly
function stableSort(array, comparator) {
  const stabilizedThis = array.map((el, index) => [el, index]);
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) {
      return order;
    }
    return a[1] - b[1];
  });
  return stabilizedThis.map((el) => el[0]);
}

// ============ Tabel Head Information
const headCells = [
  {
    id: 'avatar',
    numeric: false,
    disablePadding: true,
    label: 'Avatar',
  },
  {
    id: 'name',
    numeric: false,
    disablePadding: false,
    label: 'Name',
  },
  {
    id: 'address',
    numeric: false,
    disablePadding: false,
    label: 'Address',
  },
  {
    id: 'rate',
    numeric: true,
    disablePadding: false,
    label: 'Rate',
  },
  
];

// ============ EnhancedTableHead Function
function EnhancedTableHead(props) {
  const { onSelectAllClick, order, orderBy, numSelected, rowCount, onRequestSort } =
    props;
  const createSortHandler = (property) => (event) => {
    onRequestSort(event, property);
  };

  return (
    <TableHead
      sx={{
        span: {
          fontFamily: "'Heebo', sans-serif",
          fontSize: "1.125em",
          fontWeight: 500,
        },
      }}
    >
      <TableRow>
        <TableCell padding="checkbox">
          <Checkbox
            indeterminate={numSelected > 0 && numSelected < rowCount}
            checked={rowCount > 0 && numSelected === rowCount}
            onChange={onSelectAllClick}
            inputProps={{
              'aria-label': 'select all desserts',
            }}            
          />
        </TableCell>
        {headCells.map((headCell) => (
          <TableCell
            key={headCell.id}
            align={headCell.numeric ? 'center' : 'left'}
            padding={headCell.disablePadding ? 'none' : 'normal'}
            sortDirection={orderBy === headCell.id ? order : false}
            sx={{
              align: "center",
              tr: {
                fontFamily: "'Heebo', sans-serif",
                fontSize: "1.125em",
              }
            }}
          >
            <TableSortLabel
              active={orderBy === headCell.id}
              direction={orderBy === headCell.id ? order : 'asc'}
              onClick={createSortHandler(headCell.id)}
            >
              {headCell.label}
              {orderBy === headCell.id ? (
                <Box component="span" sx={visuallyHidden}>
                  {order === 'desc' ? 'sorted descending' : 'sorted ascending'}
                </Box>
              ) : null}
            </TableSortLabel>
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
}

// ============ EnhancedTableHead Props
EnhancedTableHead.propTypes = {
  numSelected: PropTypes.number.isRequired,
  onRequestSort: PropTypes.func.isRequired,
  onSelectAllClick: PropTypes.func.isRequired,
  order: PropTypes.oneOf(['asc', 'desc']).isRequired,
  orderBy: PropTypes.string.isRequired,
  rowCount: PropTypes.number.isRequired,
};

const EnhancedTableToolbar = (props) => {
  const { numSelected } = props;
  return <></>
};

EnhancedTableToolbar.propTypes = {
  numSelected: PropTypes.number.isRequired,
};

// ============ Function ============== //
const EnhancedTable = ({

// ============ Props
  boxSizing = "border-box",
  marginB = 30,
  width = "100%",
  checkcolor="#5333ED",
  rows

// ---------------OI, CALISTA, MAKE THAT BACKEND FUNCTION ALREADY---------//
// ============ clickHandler or Router  
  // clickHandler = () => {},
//   routeTo = "/LandlordProfile",

}) => {

// ============ useState
  const [order, setOrder] = React.useState('asc');
  const [orderBy, setOrderBy] = React.useState('calories');
  const [selected, setSelected] = React.useState([]);
  const [page, setPage] = React.useState(0);
  const [dense, setDense] = React.useState(false);

// ============ Routing
  const router = useRouter()

// Row to show
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

// ============ filetering function
  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  };

  const handleSelectAllClick = (event) => {
    if (event.target.checked) {
      const newSelecteds = props.rows.map((n) => n.firstname);
      setSelected(newSelecteds);
      return;
    }
    setSelected([]);
  };

// ============ handleclick function
  const handleClick = (event, name) => {
    const selectedIndex = selected.indexOf(name);
    let newSelected = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, name);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1),
      );
    }

    setSelected(newSelected);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handleChangeDense = (event) => {
    setDense(event.target.checked);
  };

  const isSelected = (name) => selected.indexOf(name) !== -1;

  // Avoid a layout jump when reaching the last page with empty rows.
  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - props.rows.length) : 0;

// ============ Layout
  return (
    <Box sx={{ width: '100%', mb: {marginB} }}>
      <Paper sx={{ width: {width}, mb: 4 }}>
        <TableContainer>
          <Table
            sx={{ minWidth: 750 }}
            aria-labelledby="tableTitle"
            size={dense ? 'small' : 'medium'}
          >
{/* // ============ TableHead */}
            <EnhancedTableHead
              numSelected={selected.length}
              order={order}
              orderBy={orderBy}
              onSelectAllClick={handleSelectAllClick}
              onRequestSort={handleRequestSort}
              rowCount={rows.length}
            />

{/* // ============ TableBody */}
            <TableBody>
              {/* if you don't need to support IE11, you can replace the `stableSort` call with:
                 rows.slice().sort(getComparator(order, orderBy)) */}
              {stableSort(rows, getComparator(order, orderBy))
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row, index) => {
                  const isItemSelected = isSelected(row.firstname);
                  const labelId = `enhanced-table-checkbox-${index}`;

                  return (
                    <TableRow
                      hover

// ============ onClick or onPress handler 
                      onClick={(event) => handleClick(event, row.firstname)}
                      // onPress={()=>{ clickHandler()} }  
                      onClick={() => router.push('/LandlordProfile/5')}                      
                    //   onClick={() => router.push(routeTo)}                      
                      
                      role="checkbox"
                      aria-checked={isItemSelected}
                      tabIndex={-1}
                      key={row.firstname}
                      selected={isItemSelected}
                      align= "center"
                      sx={{
                        td: {
                          fontFamily: "'Heebo', sans-serif",
                          fontSize: "1em",
                          borderBottomColor: "C4C4C4",
                          cursor: "pointer",
                        }
                      }}
                    >
{/*================= CHECKBOX =================*/}
                      <TableCell padding="checkbox">
                        <Checkbox
                          checked={isItemSelected}
                          inputProps={{
                            'aria-labelledby': labelId,
                          }}
                          sx={{ 
                            color: "#c4c4c4",
                            '&.Mui-checked': {
                              color: checkcolor,
                            },                           
                          }}
                        />
                      </TableCell>

{/*================= AVATAR =================*/}
                      <TableCell 
                        sx={{
                          boxSizing: {boxSizing},
                        }}
                        align="center"
                      >
                        <Avatar 
                          src ={row.profile_image}
                          bradius="50%"
                          bshadow = "rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px"
                        />
                      </TableCell>

{/*================= NAME =================*/}
                      <TableCell
                        component="th"
                        id={labelId}
                        scope="row"
                        padding="normal"
                        sx={{
                          boxSizing: {boxSizing},
                        }}
                        
                      >
                        {row.firstname}
                      </TableCell>

{/*================= ADDRESS =================*/}
                      <TableCell 
                        align="left"
                        sx={{
                          boxSizing: {boxSizing},
                        }}
                      >
                        {""}
                        {/* {row.address} */}
                      </TableCell>
{/*================= RATE =================*/}
                      <TableCell 
                        align="center"
                        sx={{
                          boxSizing: {boxSizing},
                        }}
                      >
                        {5}
                        {/* {row.rate} */}
                      </TableCell>
                    </TableRow>
                  );
                })}
              {emptyRows > 0 && (
                <TableRow
                  style={{
                    height: (dense ? 33 : 53) * emptyRows,
                  }}
                >
                  <TableCell colSpan={6} />
                </TableRow>
              )}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
    </Box>
  );
}

export default EnhancedTable;