import React from 'react'
import { Container } from 'react-bootstrap'
import Dropdown from 'react-bootstrap/Dropdown';
import Form from 'react-bootstrap/Form';
import { category, province } from '../data/filterExplore'

function Filter() {
    return (
        <div style={{ width: "200px" }} className='overflow-auto rounded bg-white'>
            <Container>
                <div className="my-2 filter__header">
                    จังหวัด
                </div>
                <Dropdown className='my-2'>
                    <Dropdown.Toggle variant="dark" id="dropdown-basic">
                        เลือกจังหวัด
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                        {
                            province.map((p, i) => (
                                <Dropdown.Item key={i}>{p}</Dropdown.Item>
                            ))
                        }
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
                        {
                            category.map((c, i) => (
                                <Form.Check key={i} type="checkbox" label={c} />
                            ))
                        }
                    </Form.Group>
                </Form>
            </Container>
        </div>
    )
}

export default Filter