import { useDispatch, useSelector } from "react-redux";

import { updateUserData, updatePage } from "../../reducer/userData";
import { useEffect } from "react";
import { debounce } from '../../helpers/helper';
import usePagination from "./usePagination";
import Pagination from "../../resuableComponents/Pagination/Pagination";
import { useState } from "react";
import LikeDislike from "./likeDislike";

const API = 'https://jsonplaceholder.typicode.com/posts';

const ROWS_PER_PAGE = 10;

export const UserData = () => {
  const userActualData = useSelector((state) => state.userData.userDetails);
  const pageNumber = useSelector((state) => state.userData.pageNumber);
  const [isLoading, setLoading] = useState(false);
  const dispatch = useDispatch();

  const { range = [], pageData = [], updatePageNumber } = usePagination(userActualData, pageNumber, ROWS_PER_PAGE);

  useEffect(() => {
    try {
        async function fetchUserData () {
          setLoading(true);
          const data = await fetch(API);
          const res = await data.json();
          dispatch(updateUserData(res));
          setLoading(false);
        }
        const debounced = debounce(fetchUserData, 200);
        debounced(); 
    } catch (error) {
      console.warn('Some thing Went Wrong Please re-try');
    }
  }, []);

  const setPageNumber = (e, pageNumber) => {
    e.preventDefault();
    e.stopPropagation();
    updatePageNumber(pageNumber);
    dispatch(updatePage(pageNumber));
  }

  return (
    <div className="flex flex-col my-4 ml-4">
      {isLoading && <div>...loading</div>}
      <ul className="pl-4">
        {
          pageData.map((data) => {
            return <li key={data.id} className="list-disc">
              <div>{data.title}</div>
              <LikeDislike userId={data.id}/>
            </li>
          })
        }
      </ul>
      {userActualData.length ? <Pagination range={range} pageNumber={pageNumber} setPageNumber={setPageNumber}/>: null}
    </div>
  );
};
