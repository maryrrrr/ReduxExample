import { ProductGetAll, ProductAdd, ProductGetId, ProductRemove } from "../actions/ActionTypes";

const initialState= {
    items: [
        { id: 1, productName: "A", price:100 },
        { id: 2, productName: "B", price:200 },
        { id: 3, productName: "C", price:300 },
    ],
    isLoading: true,
};

function ProductReducer (state= initialState, action){
    switch(action.type){
        case ProductGetAll:
            return {...state, items: state.items};
        case ProductGetId:
            return {...state, items: state.items.find(q => q.id == action.payload)};
        case ProductAdd:
            return {...state, items: state.items.concat([action.payload])};
        case ProductRemove:
            return {...state, items: state.items.filter(q => q.id != action.payload)};
        default:
            return state;
    }
}
export default ProductReducer;