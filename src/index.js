// You should implement your task here.

module.exports = function towelSort(matrix) {
    if (!Array.isArray(matrix)) {
        return [];
    }

    let a = [];
    let i = 0;
    matrix.forEach(el => {
        a = a.concat(i % 2 === 0 ? el : el.reverse());
        i++;
    });

    // if (!Array.isArray(a)) return [];

    return a;
};
