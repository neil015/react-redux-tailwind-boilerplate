import { useEffect, useState } from "react";
import { calculateRange, sliceUserData } from "../../helpers/helper";

const usePagination = (userActualData, pageNumber, rowsPerPage) => {
    const [range, setRange] = useState([]);
    const [pageData, setPageData] = useState([]);

    useEffect(() => {
        if (userActualData.length) {
            const range = calculateRange(userActualData, rowsPerPage);
            setRange([...range]);
            const userDataCopy = [...userActualData];
            const pageData = sliceUserData(userDataCopy, pageNumber, rowsPerPage);
            setPageData([...pageData]);
        }
    }, [pageNumber, userActualData]);

    const updatePageNumber = (pageNumber) => {
        const userDataCopy = [...userActualData];
        const pageData = sliceUserData(userDataCopy, pageNumber, rowsPerPage);
        setPageData([...pageData]);
    }
    return {
        range, pageData, updatePageNumber
    }
}

export default usePagination;
