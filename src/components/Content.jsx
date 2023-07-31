import React from 'react'
import { Container } from 'react-bootstrap'
import Card from './Card'

function Content() {
    return (
        <div style={{ width: "850px" }} className='overflow-hidden rounded bg-white'>
            <Container>
                <Card />
            </Container>
        </div>
    )
}

export default Content