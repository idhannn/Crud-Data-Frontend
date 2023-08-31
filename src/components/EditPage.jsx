import axios from "axios"
import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"

const EditPage = () => {

    const [name, setName] = useState('')
    const [price, setPrice] = useState('')

    const navigate = useNavigate();
    const { id } = useParams();
    const LINK_PRODUCT_BY_ID = 'http://localhost:5500/products/' + id;

    // FETCH PRODUCT BY ID
    const getProductById = async () => {
        const response = await axios.get(LINK_PRODUCT_BY_ID)
        setName(response.data.name)
        setPrice(response.data.price)
    }

    useEffect(() => {
        getProductById();
    }, [])

    // UPDATE PRODUCT
    const updateProduct = async (e) => {
        e.preventDefault();
        try {
            await axios.patch(LINK_PRODUCT_BY_ID, {
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
            <form onSubmit={updateProduct}>
                <div className="mb-3">
                    <label className="form-label">Products</label>
                    <input type="text" value={name} onChange={(e) => setName(e.target.value)} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div className="mb-3">
                    <label className="form-label">Price</label>
                    <input type="number" value={price} onChange={(e) => setPrice(e.target.value)} className="form-control" id="exampleInputPassword1" />
                </div>

                <button type="submit" className="btn btn-primary">Submit</button>
            </form>

        </div>
    </div>
  )
}

export default EditPage