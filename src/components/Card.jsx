import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';

function NavPillsExample(props) {
    return (
        <div>
            {
                props.data.map((e, i) => (
                    <Card key={i} className='my-2'>
                        <Container>
                            <div className="my-2">
                                <div className='d-flex justify-content-around'>
                                    {
                                        e.image.map((p, i) => (
                                            <Image key={i} style={{ width: '200px', height: '200px' }} src={p} rounded />
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
                ))
            }
        </div>
    );
}

export default NavPillsExample;