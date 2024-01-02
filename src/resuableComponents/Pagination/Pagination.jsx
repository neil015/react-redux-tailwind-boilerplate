
const Pagination = ({
    range = [], pageNumber, setPageNumber
}) => {
    return (
        <div className="w-full flex-none flex items-center flex text-sm space-x-3 my-4">
            <button className="border-2 p-2 relative flex-none flex items-center justify-center cursor-pointer"
                disabled={pageNumber === 1} onClick={(e => setPageNumber(e, pageNumber === 1 ? 1 : pageNumber - 1))}
                style={pageNumber === 1 ? {backgroundColor: 'gray', cursor: 'none'}: null}>
                    Previous
            </button>
            {
                range.map((el, idx) => {
                    return <button key={idx} className="border-2 p-2 relative flex-none flex items-center justify-center cursor-pointer"
                        onClick={(e) => setPageNumber(e, el)}
                        style={pageNumber === el ? {backgroundColor: 'lightBlue', }: null}>
                            {el}
                    </button>
                })
            }
            <button className="border-2 p-2 relative flex-none flex items-center justify-center cursor-pointer"
                onClick={(e => setPageNumber(e, pageNumber + 1))}
                style={pageNumber === range.length ? {backgroundColor: 'gray', cursor: 'none'}: null}>
                    Next
            </button>
        </div>
    )
}

export default Pagination;