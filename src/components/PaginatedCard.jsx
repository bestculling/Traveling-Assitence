import Pagination from 'react-bootstrap/Pagination';

export default function PaginatedCard({ pages }) {
    console.log(pages)
    return (
        <Pagination>
            <Pagination.First />
            <Pagination.Prev />
            <Pagination.Item>
                1
            </Pagination.Item>
            <Pagination.Item>
                2
            </Pagination.Item>
            <Pagination.Item>
                3
            </Pagination.Item>
            <Pagination.Item>
                4
            </Pagination.Item>
            <Pagination.Item>
                5
            </Pagination.Item>
            <Pagination.Ellipsis />
            <Pagination.Next />
            <Pagination.Last />
        </Pagination>
    )
}



// import React, { useEffect, useState } from 'react';
// import ReactPaginate from 'react-paginate';
// import { initialState } from '../App';
// import Card from './Card'
// import Pagination from 'react-bootstrap/Pagination'


// function PaginatedCard() {
//     const itemsPerPage = 5
//     // Here we use item offsets; we could also use page offsets
//     // following the API or data you're working with.
//     const [itemOffset, setItemOffset] = useState(0);

//     // Simulate fetching items from another resources.
//     // (This could be items from props; or items loaded in a local state
//     // from an API endpoint with useEffect and useState)
//     const endOffset = itemOffset + itemsPerPage;
//     console.log(`Loading items from ${itemOffset} to ${endOffset}`);
//     const currentItems = initialState.slice(itemOffset, endOffset);
//     const pageCount = Math.ceil(initialState.length / itemsPerPage);



//     // Invoke when user click to request another page.
//     const handlePageClick = (event) => {
//         const newOffset = (event.selected * itemsPerPage) % initialState.length;
//         console.log(
//             `User requested page number ${event.selected}, which is offset ${newOffset}`
//         );
//         setItemOffset(newOffset);
//     };

//     return (
//         <>
//             <Card provinceState={currentItems} />
//             <Pagination>
//                 { pageCount }
//             </Pagination>
//             {/* <div className='text-white'>
//                 <ReactPaginate
//                     className='list-group-item d-flex gap-5 justify-content-center'
//                     breakLabel="..."
//                     nextLabel="next >"
//                     onPageChange={handlePageClick}
//                     pageRangeDisplayed={5}
//                     pageCount={pageCount}
//                     previousLabel="< previous"
//                     renderOnZeroPageCount={null}
//                 />
//             </div> */}
//         </>
//     );
// }

// export default PaginatedCard