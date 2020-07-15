import React from "react";
import {Container,Row,Col} from 'react-bootstrap'
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import {Link} from 'react-router-dom'
import cx from 'classnames'
//import logo from '../img/Kickers_shoes_logo (1).png'

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
    height:'73px'
  },
  bgBlue:{
    backgroundColor:"blue"

  },
  color:{
    color:"white"
  }
});

function NavBar() {

  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (

      <Container fluid>
        <Row className={classes.bgBlue}>
          <Col>

          <Paper className={cx(classes.root,classes.bgBlue,"pt-3")}>

      <Tabs
        value={value}
        onChange={handleChange}
        indicatorColor="primary"
        textColor="primary"
        className="classes.color"
        centered
      >
        <Link className={classes.color}  to="/"><Tab label="Home"/></Link>

<Link className={classes.color} to="/product"><Tab label="Product"/></Link>
{/* <Link  className={classes.color}  to="/product/:id"><Tab label="ProductItem"/></Link> */}
      </Tabs>
    </Paper>
          </Col>
        </Row>
      </Container>

  );
}

export default NavBar;




