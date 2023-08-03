import React from 'react'
import { Container } from 'react-bootstrap'
import Card from './Card'
import TabletCard from './TabletCard'

function Content() {
    return (
        <div style={{ width: "850px" }} className='overflow-hidden rounded bg-dark'>
            <Container>
                <Card />
                <TabletCard />
            </Container>
        </div>
    )
}

export default Content