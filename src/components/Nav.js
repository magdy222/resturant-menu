import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


function NavScrollExample({filterBySearch}) {
const [value, setValue]  = useState('') 
const onSearch = ()=>{
  filterBySearch(value)
  setValue('')
}
  return (
    <Navbar bg="dark" expand="lg" variant='dark'>
      <Container>
        <Navbar.Brand href="#"><div className='bg-success'>مطعم المجد</div></Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
          </Nav>
          <Form className="d-flex px-1">
            <Form.Control
              type="search"
              placeholder="ابحث عن وجبتك المفضلة"
              className="mx-2"
              aria-label="Search"
              onChange={(e)=> setValue(e.target.value)}
              value = {value}
            />
            <Button onClick={()=> onSearch()} className=" px-1" variant="success">ابحث</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavScrollExample;