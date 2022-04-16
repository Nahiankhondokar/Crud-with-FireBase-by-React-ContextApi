import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Card, Col, Container, Row, Form, Button, Table, CloseButton, Alert } from 'react-bootstrap';
import { StudentContext } from '../../StudentContext/StudentContext';



const Student = () => {

    const [ login, setLogin, register, seRegister, handleRegisterSubmit, alert, setAlert, handleAlertClose, handleLoginSubmit, handleLogout ] = useContext(StudentContext);


  return (
    <>

    <Container>
        <Row className='justify-content-center my-5'>
            <Col md={ 4 }  className='mr-3'>
                <Card>
                    <Card.Header>
                        <h2>Create User </h2>
                    </Card.Header>
                        {
                            alert.status && <Alert className='d-flex justify-content-between' variant=''> <CloseButton></CloseButton> </Alert>
                        }
                    <Card.Body>
                        <Form onSubmit=''>
                            <Form.Group>
                                <Form.Label>Name</Form.Label>
                                <Form.Control value=''></Form.Control>
                            </Form.Group>

                            <Form.Group>
                                <Form.Label className='w-100'>Gender</Form.Label>
                                <input name='gender' type="radio" value='Male' id='Male' /> <label htmlFor="Male">Male</label> &nbsp;

                                <input name='gender' type="radio" value='Female' id='Female'/> <label htmlFor="Female">Female</label>
                            </Form.Group>

                            <Form.Group>
                                <Form.Label>Photo</Form.Label>
                                <Form.Control value=''></Form.Control>
                            </Form.Group>
                            <br />
                            <Form.Group>
                                <Button variant='info' type='submit'>Submit</Button>
                            </Form.Group>
                        </Form>
                    </Card.Body>
                </Card>
            </Col>

            <Col md={ 7 } style={{ marginLeft : '10px' }}>
                <Card className="w-100">
                    <Card.Header className="d-flex justify-content-between">
                        <h3>All User</h3>
                        <div className="btns">
                            <Link to="/profile" className="btn-primary" style={{ color : 'white', borderRadius : '5px', border : 'none', textDecoration : 'none', padding : '10px' }}>Profile</Link> &nbsp;
                            <button onClick={ handleLogout } className="btn-info" style={{ color : 'black', borderRadius : '5px', border : 'none', padding : '10px' }}>LogOut</button>
                        </div>
                    </Card.Header>
                    <Card.Body>
                        <Table>
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Name</th>
                                    <th>Gender</th>
                                    <th>Photo</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                
                              <tr>
                                  <td></td>
                                  <td></td>
                                  <td></td>
                                  <td>
                                      <img style={{ widht : '30px', height : '30px' }} src='' alt="" />
                                  </td>
                                  <td>
                                  <Button onClick='' variant='info' className="btn-sm">View </Button>&nbsp;

                                  <Button variant='warning' className="btn-sm">Edit</Button>&nbsp;

                                  <Button onClick='' variant='danger' className="btn-sm">Delete</Button>
                                  </td>
                              </tr>
                              
                               
                            
                            </tbody>
                        </Table>
                    </Card.Body>
                </Card>
            </Col>
        </Row>
    </Container>
</>
  )
}

export default Student
