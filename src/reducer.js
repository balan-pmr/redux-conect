const initialState = {
    products: []
  }

  function reducer(state = initialState, action) {
    switch (action.type) {
        case 'ADD_PRODUCT': 
        return { products: [...state.products, action.payload] };
        case 'REMOVE_PRODUCT': 
        return { products:  [...state.products.filter(product => product.id !== action.payload ) ] } ;
      default:
        return state
    }
  }

  export default reducer