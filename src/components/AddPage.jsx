import axios from "axios"
import { useState } from "react"
import { useNavigate } from "react-router-dom"

const AddPage = () => {

    const [name, setName] = useState('')
    const [price, setPrice] = useState('')
    const navigate = useNavigate();

    const createProduct = async (e) => {
        e.preventDefault();
        try {
            await axios.post('http://localhost:5500/products', {
                name: name,
                price: Number(price)
            });
            navigate('/')
        } catch (error) {
            console.log(error.message);
        }
    }

  return (
    <div className="container pt-5">
        <div className="w-50 mx-auto">
            <form onSubmit={createProduct}>
                <div className="mb-3">
                    <label for="exampleInputEmail1" className="form-label">Products</label>
                    <input type="text" value={name} onChange={(e) => setName(e.target.value)} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div className="mb-3">
                    <label for="exampleInputPassword1" className="form-label">Price</label>
                    <input type="number" value={price} onChange={(e) => setPrice(e.target.value)} className="form-control" id="exampleInputPassword1" />
                </div>

                <button type="submit" className="btn btn-primary">Submit</button>
            </form>

        </div>
    </div>
  )
}

export default AddPage