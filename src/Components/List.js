import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Container from "./Loading";
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import firebase from "../firebase/base";
const StyledTableCell = withStyles((theme) => ({
    head: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    body: {
      fontSize: 14,
    },
  }))(TableCell);
  
  const StyledTableRow = withStyles((theme) => ({
    root: {
      '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
      },
    },
  }))(TableRow);
  const useStyles = makeStyles({
    table: {
      minWidth: 700,
    },
  });
  
  

function App() {
  const [customers, setCustomers] = React.useState([]);
  const [userdetail, setUserdetail] = React.useState([null]);

  //  const [newSpellName, setNewSpellName] = React.useState();

  React.useEffect(() => {
    const fetchData = async () => {
      const db = firebase.db;
      const data = await db.collection("customers").get();
      setCustomers(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    fetchData();
  }, []);

  //   const onCreate = () => {
  //     const db = firebase.firestore();
  //     db.collection("spells").add({ name: newSpellName });
  //   };
  const classes = useStyles();

  return userdetail !== null ? (
      <>
      <Header />
      <section className="banner-area relative" id="home">
				<div className="overlay overlay-bg"></div>
				<div className="container">
					<div className="row d-flex align-items-center justify-content-center">
						<div className="about-content col-lg-12">
							<h1 className="text-white">
								List of Disaster Victims 
							</h1>
							<p className="text-white link-nav"><a href="/volunteer">Profile</a>  <span className="lnr lnr-arrow-right"></span>  <a href="/volunteer">List of Disaster Victims</a></p>
						</div>
					</div>
				</div>
			</section>
            <section className="Volunteer-form-area section-gap">
      <div className="container" style={{backgroundColor:"black", opacity:"0.7", color:"white"}}>
      <div className="row justify-content-center">
      <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Name</StyledTableCell>
            <StyledTableCell align="right">Age</StyledTableCell>
            {/* <StyledTableCell align="right">Fat&nbsp;(g)</StyledTableCell>
            <StyledTableCell align="right">Carbs&nbsp;(g)</StyledTableCell>
            <StyledTableCell align="right">Protein&nbsp;(g)</StyledTableCell> */}
          </TableRow>
        </TableHead>
        <TableBody>
          {customers.map((row) => (
            <StyledTableRow key={row.name}>
              <StyledTableCell component="th" scope="row">
                {row.name}
              </StyledTableCell>
              <StyledTableCell align="right">{row.age}</StyledTableCell>
              {/* <TableCell align="right">{row.}</TableCell>
              <TableCell align="right">{row.carbs}</TableCell>
              <TableCell align="right">{row.protein}</TableCell> */}
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </div> 
     <br/>   
     </div>
      </section>
    <Footer/>
    </>
  ): (
    <div className="container">
    <div className="row">
      <Container />
    </div>
  </div>
    );
}

export default App;