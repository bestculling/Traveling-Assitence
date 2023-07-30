import React from 'react'
import { Container } from 'react-bootstrap'
import Card from './Card'
import { data } from '../data/north'

function Content() {

    return (
        <div className='overflow-hidden rounded bg-white'>
            <Container>
                <Card data={data} />
            </Container>
        </div>
    )
}

export default Content