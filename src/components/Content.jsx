import React from 'react'
import { Container } from 'react-bootstrap'
import Card from './Card'
import { data } from '../data/north'

function Content() {

    return (
        <div className='w-100 rounded bg-white'>
            <Container>
                <Card data={data} />
            </Container>
        </div>
    )
}

export default Content