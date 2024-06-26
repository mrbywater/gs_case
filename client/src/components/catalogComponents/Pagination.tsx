import Pagination from '@mui/material/Pagination';
import {ChangeEvent, useEffect, useState} from "react";
import useScrollToTop from "../../hooks/useScrollToTop";
const PaginationCatalog = (props : any) => {

    const {
        itemsArr,
        setItemsArr
    } = props

    const { handleButtonClick } = useScrollToTop();

    const [page, setPage] = useState(1);
    const [itemsPerPage, setItemsPerPage] = useState(16);

    const totalPages: number = Math.ceil(itemsArr.length / itemsPerPage);
    const startIndex : number = (page - 1) * itemsPerPage;
    const endIndex : number = Math.min(startIndex + itemsPerPage, itemsArr.length);

    useEffect(() => {
        setItemsArr(itemsArr.slice(startIndex, endIndex))
        handleButtonClick()
    }, [page])

    const handleChange = (event: ChangeEvent<unknown>, value: number) => {
        setPage(value);
    };

    return (
        <Pagination
            count={totalPages}
            defaultPage={6}
            page={page}
            onChange={handleChange}
        />
    )
}
export { PaginationCatalog }