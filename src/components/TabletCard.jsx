import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import { useContext } from 'react';
import { filterContext } from '../context/filterContext';
import './Card.css'
import { Col, Row } from 'react-bootstrap';
import Error from './Error';


function Index() {

    const { provinceState } = useContext(filterContext)

    return (
        <div className='d-block d-lg-none'>
            {
                provinceState.length !== 0 ? (provinceState.map((e, i) => (
                    <div key={i} className='my-4 border p-3 rounded'>
                        <Container>
                            <Row>
                                <Col>
                                    <div>
                                        <Image className='hover' key={i} style={{ width: '200px', height: '200px' }} src={e.image[0]} rounded />
                                    </div>
                                </Col>
                                <Col className='d-flex flex-column gap-2'>
                                    <Button variant="success">{e.province}</Button>
                                    <div className='fw-bold'>{e.name}</div>
                                    <div>{e.desc}</div>
                                    <div className='fw-bold'>{e.location}</div>
                                    <Button href={e.credit} target="_blank">เครดิต</Button>
                                    <Button variant="secondary">#{e.tag}</Button>
                                </Col>
                            </Row>
                        </Container>
                    </div>
                ))) : (
                    <Error />
                )
            }
        </div>
    );
}

export default Index;