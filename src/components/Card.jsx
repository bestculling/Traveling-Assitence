import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import { useContext } from 'react';
import { filterContext } from '../context/filterContext';
import './Card.css'
import Error from './Error';


function Index() {

    const { provinceState } = useContext(filterContext)

    return (
        <div className='d-none d-lg-block'>
            {
                provinceState.length !== 0 ? (provinceState.map((e, i) => (
                    <Card key={i} className='my-2'>
                        <Container>
                            <div className="my-2">
                                <div className='d-flex gap-1 justify-content-around'>
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
                    <Error />
                )
            }
        </div>
    );
}

export default Index;