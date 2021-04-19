export const removeItem = (array, id) => {
    const index = array.findIndex(x => x.id === id);
    if (index > -1) {
        array.splice(index, 1);
    }
    return array;
}
export const changeStatusItem = (array, id) => {
    const index = array.findIndex(x => x.id === id);
    if (index > -1) {
        array[index].status = array[index].status === 1 ? 0 : 1;
    }
    return array;
}