import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Nav from 'react-bootstrap/Nav';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';

function NavPillsExample(props) {
    return (
        <div>
            {
                props.data.map((e, i) => (
                    <Card key={i} className='my-2'>
                        <Container>
                            <div className="my-2">
                                <div className='d-flex justify-content-center gap-4'>
                                    <Image style={{ width: '200px', height: '200px' }} src="https://img.kapook.com/u/2023/sutasinee/04/WatPhraKaew11.jpg" rounded />
                                    <Image style={{ width: '200px', height: '200px' }} src="https://img.kapook.com/u/2023/sutasinee/04/WatPhraKaew11.jpg" rounded />
                                    <Image style={{ width: '200px', height: '200px' }} src="https://img.kapook.com/u/2023/sutasinee/04/WatPhraKaew11.jpg" rounded />
                                    <Image style={{ width: '200px', height: '200px' }} src="https://img.kapook.com/u/2023/sutasinee/04/WatPhraKaew11.jpg" rounded />
                                </div>
                            </div>
                        </Container>
                        <Card.Body>
                            <Card.Title>{e.name}</Card.Title>
                            <Card.Text>
                                {e.desc}
                            </Card.Text>
                            <Card.Text>
                                {e.location}
                            </Card.Text>
                            <Card.Text>
                                { e.credit }
                            </Card.Text>
                            <Button variant="secondary">{e.province}</Button>{' '}
                            <Button variant="secondary">{e.tag}</Button>
                        </Card.Body>
                    </Card>
                ))
            }
        </div>
    );
}

export default NavPillsExample;