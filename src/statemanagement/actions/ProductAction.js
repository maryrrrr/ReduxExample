import { ProductAdd, ProductGetAll, ProductGetId, ProductRemove } from "./ActionTypes";

export const getAll = () => ({
    type: ProductGetAll,
});
export const getById = id =>({
    type: ProductGetId,
    payload: id,
});
export const add = item =>({
    type: ProductAdd,
    payload: item,
});
export const remove = id =>({
    type: ProductRemove,
    payload: id,
});
