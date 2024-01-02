function debounce (fn, delay) {
    let timer;
    return function (...args) {
        const context = this;
        clearTimeout(timer);
        timer = setTimeout(() => {
            fn.apply(context, ...args);
        }, delay);
    }
}

function calculateRange (userActualData, rowsPerPage) {
    const range = [];
    const num = Math.ceil(userActualData.length/rowsPerPage);
    let i = 0;
    for(let i = 1; i <= num; i+=1) {
        range.push(i);
    }
    return range;
}

function sliceUserData (userActualData, pageNumber, rowsPerPage) {
    return userActualData.slice((pageNumber - 1) * rowsPerPage, pageNumber * rowsPerPage );
}

export { debounce, calculateRange, sliceUserData };