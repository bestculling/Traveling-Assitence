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
        <div className='p-2 d-none d-lg-block'>
            {
                provinceState.length !== 0 ? (provinceState.map((e, i) => (
                    <Card border="secondary" key={i} className='p-2 bg-dark text-white my-2'>
                        <Container>
                            <div className="my-2">
                                <div className='d-flex gap-1 justify-content-around'>
                                    {
                                        e.image.map((p, i) => (
                                            <Image className='hover' key={i} style={{ width: '180px', height: '180px' }} src={p} rounded />
                                        ))
                                    }
                                </div>
                            </div>
                        </Container>
                        <Card.Body>
                            <Card.Title>
                                <Button disabled variant="outline-success">{e.province}</Button> {' '}
                                <span className='mx-2'>{e.name}</span>
                            </Card.Title>
                            <Card.Text>
                                {e.desc}
                            </Card.Text>
                            <Card.Text>
                                {e.location}
                            </Card.Text>
                            <div className='d-flex justify-content-between'>
                                <Button className='text-white' disabled variant="outline-secondary">#{e.tag}</Button>
                                <Button href={e.credit} target="_blank">เครดิตข้อมูล</Button>
                            </div>
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