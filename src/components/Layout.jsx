import React from 'react'
import { Container } from 'react-bootstrap'

function Layout({ children }) {
    return (
        <Container className='w-100 d-flex mt-4 gap-4'>
            {children}
        </Container>
    )
}

export default Layout