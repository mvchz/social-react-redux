import React, {useState} from 'react';
import s from './Paginator.module.css';


let Paginator = ({totalUsersCount, pageSize, currentPage, onPageChanged, portionSize = 10}) => {
    let pagesCount = Math.ceil(totalUsersCount / pageSize);

    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    let portionCount = Math.ceil(pagesCount / portionSize);
    let [portionNumber, setPortionNumber] = useState(1);
    let leftPortionPageNumber = (portionNumber - 1) * portionSize + 1;
    let rightPortionPageNumber = portionNumber * portionSize;

    return (
        <div className={s.pageStyle}>
            {portionNumber > 1 &&
            <button onClick={() => {setPortionNumber(portionNumber - 1)}}>Prev</button>}
              {pages
                  .filter(p => p >= leftPortionPageNumber && p<=rightPortionPageNumber)
                  .map(p => {
                        return <div
                            className={currentPage === p && s.selectedPage}
                            onClick={(e) => {
                                onPageChanged(p);
                            }}>
                            <span className={s.pageNumber}>{p}</span></div>
                    })}
            {portionCount > portionNumber &&
            <button onClick={() => { setPortionNumber(portionNumber + 1 )}}>Next</button>}
        </div>
    )
};

export default Paginator;