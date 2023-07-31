import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Spinner from 'react-bootstrap/Spinner';
import { useContext } from 'react';
import { filterContext } from '../context/filterContext';
import './Card.css'


function Index() {

    const { provinceState } = useContext(filterContext)

    return (
        <div>
            {
                provinceState.length !== 0 ? (provinceState.map((e, i) => (
                    <Card key={i} className='my-2'>
                        <Container>
                            <div className="my-2">
                                <div className='d-none d-lg-flex gap-1 justify-content-around'>
                                    {
                                        e.image.map((p, i) => (
                                            <Image className='hover' key={i} style={{ width: '200px', height: '200px' }} src={p} rounded />
                                        ))
                                    }
                                </div>
                            </div>
                        </Container>
                        <Card.Body>
                            <Card.Title>
                                <Button variant="success">{e.province}</Button> {' '}
                                {e.name}
                            </Card.Title>
                            <Card.Text>
                                {e.desc}
                            </Card.Text>
                            <Card.Text>
                                {e.location}
                            </Card.Text>
                            <Card.Text>
                                <Button href={e.credit} target="_blank">เครดิต</Button>
                            </Card.Text>
                            <Button variant="secondary">{e.tag}</Button>
                        </Card.Body>
                    </Card>
                ))) : (
                    <div className='d-flex flex-column justify-content-center align-items-center' style={{ width: "50vw", height: "80vh" }}>
                        <Spinner animation="border" role="status">
                            <span className="visually-hidden">Loading...</span>
                        </Spinner>
                        <div className='mt-2'>กำลังดำเนินการ...</div>
                    </div>
                )
            }
        </div>
    );
}

export default Index;