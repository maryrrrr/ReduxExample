import { connect } from 'react-redux';
import { getAll } from '../statemanagement/actions/ProductAction';
const ProductLists = () => {
  return (
    <div>
        <h1>Product Lists Application</h1>
        <table>
            <thead>
                <tr>
                <th>Id</th>
                <th>Title</th>
                <th>Price</th>
                </tr>
            </thead>
        </table>
        <tbody>
            {
                this.props.products.map ( item=>
                    <tr key={item.id}>
                        <td>{item.id}</td>
                        <td>{item.productName}</td>
                        <td>{item.price}</td>
                    </tr>
                )
            }

        </tbody>
    </div>
  )
}


function mapSateToProps(state){
    return{
        products:state.productState.items,
    };
}


export default connect(mapSateToProps)(ProductLists);
