import React from 'react';
import logo from './logo.svg';
import './App.css';
import ReactSVG from 'react-svg'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Modal, Button, ButtonToolbar, Card, Accordion} from 'react-bootstrap'
import axios from 'axios'


class AddItem extends React.Component
{
  constructor(props){
        
    super(props)
    
    this.state = ({
        items:{}
    })

    this.addPizza = this.addPizza.bind(this);
    this.addMuffin = this.addMuffin.bind(this);

  }
    addPizza() {
      console.log("Sending");
      axios.post('https://2907cbe7.ngrok.io/meals/add', 
    
        { "title": "Pizza",
	      "ingredients": ["cheese", "tomatoes", "pineapple"],
        "price": "1"},
        
        )

      .then(response => {
        console.log(response)
      })
      .catch(error => {
        console.log(error)
      })
}

addMuffin() {
  console.log("Sending");
  axios.post('https://2907cbe7.ngrok.io/meals/add', 

    { "title": "Muffin",
    "ingredients": ["chocolatechips", "raisins", "baking powder"],
    "price": "1"},
    
    )

  .then(response => {
    console.log(response)
  })
  .catch(error => {
    console.log(error)
  })
}

render(){
  return(
    <div>
    <button className="orderBtn" onClick={this.addItem}>Add Pizza</button>
    <button className="orderBtn" onClick={this.addItem}>Add Muffin</button>
    </div>
  )
}
}


function MyVerticallyCenteredModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          <span id="ball"></span>Table 1
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        
        <Accordion defaultActiveKey="0">
  <Card>
    <Card.Header>
      <Accordion.Toggle as={Button} variant="link" eventKey="0">
        David Brown <span className="namePrice" >$22.31</span>
      </Accordion.Toggle>
    </Card.Header>
    <Accordion.Collapse eventKey="0">
      <Card.Body>
        <AddItem/>
      </Card.Body>
    </Accordion.Collapse>
  </Card>
  <Card>
    <Card.Header>
      <Accordion.Toggle as={Button} variant="link" eventKey="1">
        Jeff Bazinga
      </Accordion.Toggle>
    </Card.Header>
    <Accordion.Collapse eventKey="1">
      <Card.Body>Order Item</Card.Body>
    </Accordion.Collapse>
  </Card>
</Accordion>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

const Table = (props) =>{

    const [modalShow, setModalShow] = React.useState(false);

    return( 
          
          <div className="table table-01">
            
            <h4>Table<span id="tableNum"> {props.tableID}</span><span className="tableStatus statusRed"></span></h4>
            
            { props.tableStatus === "done" && <button className="tableBtn">Clean Table</button>}
            { props.tableStatus === "inuse" && <button className="tableBtn" onClick={() => setModalShow(true)} >View Table Overview</button> }
            { props.tableStatus === "free" && <button className="tableBtn">Initialize Table</button>}
            
            {props.tableStatus === "done" && <p className="tableStatus">Status:<span className="statusAvailable"> Waiting Cleaning</span></p>}
            {props.tableStatus === "inuse" && <p className="tableStatus">Status:<span className="statusOccupied"> In Use</span></p>}
            {props.tableStatus === "free" && <p className="tableStatus">Status:<span className="statusCleanup"> Available</span></p>}

     
            <MyVerticallyCenteredModal
              show={modalShow}
              onHide={() => setModalShow(false)}
            />

          </div>
    )
  
}

function App() {
  return (
    <div className="App">
      <header className="App-header">OrdrUp</header>
      <div className="containerBox">
        <div className="tablesContainer">
          
          <Table tableID={1} tableStatus="inuse" />
          <Table tableID={2} tableStatus="done" />
          <Table tableID={3} tableStatus="free" />
          <Table tableID={4} tableStatus="free" />
          <Table tableID={5} tableStatus="free" />
          <Table tableID={6} tableStatus="free" />
          <Table tableID={7} tableStatus="free" />
          <Table tableID={8} tableStatus="free" />
          
        </div>
      </div>
    </div>
  );
}

export default App;

