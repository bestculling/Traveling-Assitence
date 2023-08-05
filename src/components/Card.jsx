import { useContext } from 'react';
import { Link } from "react-router-dom"
import { filterContext } from '../context/filterContext';
import { Card, Container } from 'react-bootstrap';
import Error from './Error';
import './Card.css'

function Index() {

    const { provinceState } = useContext(filterContext)

    return (
        <div className='d-flex flex-wrap gap-2 justify-content-center'>
            {
                provinceState.length !== 0 ? (provinceState.map((e, i) => (
                    <Card key={i} border="secondary" className='my-2 text-white'>
                        <Link to="/:loading">
                            <Container>
                                <Card.Img variant="top" className='mt-2 rounded' key={i} style={{ width: '200px', height: '200px' }} src={e.image[0]} />
                            </Container>
                            <div className='d-flex flex-column text-center mx-2 my-2'>
                                <p className='border border-success rounded p-1'>{e.province}</p>
                                <p className='text-truncate' style={{ maxWidth: "190px" }}>
                                    {e.name}
                                </p>
                            </div>
                        </Link>
                    </Card>
                ))) : (
                    <Error />
                )
            }
        </div>
    )
}

export default Index;