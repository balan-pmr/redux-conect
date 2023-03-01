
import { connect } from 'react-redux';
import { addProduct } from './actions';

const AddProduct = (props) => {

    const createNewProduct = () => {
        return {
            id: 1+Math.random(),
            name: 'Product:'+(Math.random() + 1).toString(36).substring(7),
            price: 1.5,
            quantity: 1
        }
    }

    // Invoking the actions via props.dispatch()
    const addNewProduct = () => {
        props.dispatch(addProduct(createNewProduct()))
    };
    return (
        <button onClick={addNewProduct}> Add Product </button>
    )
}

export default connect()(AddProduct);