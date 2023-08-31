import { Link } from "react-router-dom";
import { getAllProducts } from "./service"
import axios from "axios";

const Table = () => {

    const {data: products} = getAllProducts();
    
    const deleteProduct = async (productId) => {
        const confirmDelete = confirm('Yakin Akan Menghapus ?')
        try {
            if(confirmDelete) {
                await axios.delete('http://localhost:5500/products/' + productId)
                window.location.reload();
            }
        } catch (error) {
            console.log(error.message);
        }
    } 

  return (
<>    
    <div className="container">
    <div className="py-5">
        <Link to={'/add'} className="btn btn-primary fw-semibold">Add New</Link>
    </div>
        <table className="table">
  <thead className="border">
    <tr>
      <th scope="col">No</th>
      <th scope="col">Name</th>
      <th scope="col">Price</th>
      <th scope="col">Created At</th>
      <th scope="col">Action</th>
    </tr>
  </thead>
  <tbody className="border">
    {
        products.map((product, index) => (
    <tr key={index}>
      <th scope="row">{index + 1}</th>
      <td>{product.name}</td>
      <td>{product.price}</td>
      <td>{product.createdAt}</td>
      <td className="d-flex gap-3">
        <Link to={`/edit/${product.id}`} className="btn btn-success">
            Edit
        </Link>
        <button onClick={() => deleteProduct(product.id)} className="btn btn-danger">
            Delete
        </button>
      </td>
    </tr>
        ))
    }
  </tbody>
</table>
    </div>
    </>
  )
}

export default Table