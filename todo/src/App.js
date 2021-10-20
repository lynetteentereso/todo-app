import React from 'react';
import AllTasks from './components/js/AllTasks';
import AddTaskForm from './components/js/AddTaskForm';
import Pending from './components/js/Pending';
import Done from './components/js/Done';
import { Link, Switch, Route } from 'react-router-dom';
import { Navbar, Nav, Container } from 'react-bootstrap';
import './App.css';

const App = () => {

  return (
    <div className='main-wrapper'>
      <Navbar className='nav-wrapper ' expand="lg">
        <Container className='mynav'>
          <Navbar.Brand className='brand '><Link to='/'>To Do</Link></Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav " />
          <Navbar.Collapse className='mynav-collapse' id="basic-navbar-nav ">
            <Nav className="me-auto ">
              <Nav.Link ><Link to='/all'>All</Link></Nav.Link>
              <Nav.Link ><Link to='/'>Pending</Link></Nav.Link>
              <Nav.Link ><Link to='/done'>Done</Link></Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <main>
        <Switch>
          <Route path='/all' >
            <AllTasks />
          </Route>
          <Route exact path='/'>
            <Pending />
          </Route>
          <Route path='/done'>
            <Done />
          </Route>
        </Switch>
      </main>
      
      <section>
        <AddTaskForm />
      </section>
    </div>
  );
};

export default App;