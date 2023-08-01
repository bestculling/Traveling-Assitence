import { MagnifyingGlass } from 'react-loader-spinner'

function Error() {
    return (
        <div className='d-flex flex-column justify-content-center align-items-center' style={{ width: "50vw", height: "80vh" }}>
            <div>
                <MagnifyingGlass
                    visible={true}
                    height="80"
                    width="80"
                    ariaLabel="MagnifyingGlass-loading"
                    wrapperStyle={{}}
                    wrapperClass="MagnifyingGlass-wrapper"
                    glassColor='#c0efff'
                    color='#e15b64'
                />
            </div>
            <div className='mt-2'>ไม่พบการค้นหา...</div>
        </div>
    )
}

export default Error