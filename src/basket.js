
import { connect } from 'react-redux';
import { removeProduct } from './actions';

const Basket = ({ products = [], total = 0.0, removeProduct }) => {
    return (
        <div>
            {products.map( (product, index) =>
            (
                <div key= {index}>
                    Name: {product.name} - Price: {product.price} - quantity: {product.quantity} -
                    <button onClick={() => removeProduct(product.id)}> Remove</button>
                </div>
            )
            )}
            <div>Total:{total}</div>
        </div>
    )
}

const mapStateToProps = function (state) {
    return {
        products: state.products,
        total: state.products.length !== 0? state.products.map(item => item.price).reduce((prev, next) => prev + next): 0.0
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        removeProduct: (id) => dispatch(removeProduct(id))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Basket);