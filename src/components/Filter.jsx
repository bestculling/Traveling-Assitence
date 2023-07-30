import React from 'react'
import { Container } from 'react-bootstrap'
import Dropdown from 'react-bootstrap/Dropdown';
import Form from 'react-bootstrap/Form';

function Filter() {
    return (
        <div style={{ width: "200px" }} className='rounded bg-white'>
            <Container>
                <div className="my-2 filter__header">
                    จังหวัด
                </div>
                <Dropdown className='my-2'>
                    <Dropdown.Toggle variant="dark" id="dropdown-basic">
                        เลือกจังหวัด
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                        <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                        <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                        <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
                <div className="my-2 filter__header">
                    ภูมิภาค
                </div>
                <Form>
                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label="เหนือ" />
                        <Form.Check type="checkbox" label="ใต้" />
                        <Form.Check type="checkbox" label="ตะวันออก" />
                        <Form.Check type="checkbox" label="ตะวันตก" />
                    </Form.Group>
                </Form>
                <div className="my-2 filter__header">
                    ประเภทสถานที่เที่ยว
                </div>
                <Form>
                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label="ทะเล" />
                        <Form.Check type="checkbox" label="ภูเขา" />
                        <Form.Check type="checkbox" label="Check me out" />
                        <Form.Check type="checkbox" label="Check me out" />
                        <Form.Check type="checkbox" label="Check me out" />
                    </Form.Group>
                </Form>
            </Container>
        </div>
    )
}

export default Filter