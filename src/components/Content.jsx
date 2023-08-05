import React from 'react'
import { Container } from 'react-bootstrap'
// import Card from './CardExample'
import Card from './Card'

function Content() {
    return (
        <div style={{ width: "950px" }} className='overflow-hidden rounded bg-dark'>
            <Card />
            {/* <Card />
                <TabletCard /> */}
        </div>
    )
}

export default Content