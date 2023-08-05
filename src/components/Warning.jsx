import { ThreeDots } from 'react-loader-spinner'

function Warning() {
    return (
        <div className='text-white d-flex flex-column justify-content-center align-items-center' style={{ width: "50vw", height: "80vh" }}>
            <div>
                <ThreeDots
                    height="80"
                    width="80"
                    radius="9"
                    color="#4fa94d"
                    ariaLabel="three-dots-loading"
                    wrapperStyle={{}}
                    wrapperClassName=""
                    visible={true}
                />
            </div>
            <div className='mt-2'>กำลังดำเนินการ...</div>
        </div>
    )
}

export default Warning