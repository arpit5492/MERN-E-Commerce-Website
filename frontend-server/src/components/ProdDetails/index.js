import { Link, useLocation } from "react-router-dom";
import "./_prod-details.scss";
import { useDispatch } from "react-redux";
import { addCartItem } from "../../Redux/Cart/cartSlice";

const ProdDetails = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  // console.log(location.state);
  const data = location.state;

  const addToCart = () => {
    dispatch(addCartItem(data));
  }
  return (
    <div className="">
      <div className="row container my-5 prodDet-container">
        <div className="col-5 prod-image-container">
          <img className="shadow-lg" src={data.prod_img} alt={data.pName} />
        </div>
        <div className="col-7 prod-info">
          <span id="prod-name">{data.pName}</span>

          <div className="prod-rating">
            <a href=""><i className="bi bi-star-fill"></i></a>
            <a href=""><i className="bi bi-star-fill"></i></a>
            <a href=""><i className="bi bi-star-fill"></i></a>
            <a href=""><i className="bi bi-star-fill"></i></a>
            <a href=""><i className="bi bi-star-fill"></i></a>
          </div>
          <hr />
          <div className="prod-price">
            Price: <span className="price-text">${data.price}</span>
            <div style={{fontSize: "0.8em"}}>Inclusive of all taxes</div>
          </div>
          <div className="my-3 prod-desc">
            <span>Product Description</span>
          </div>

          <div className="my-5" onClick={addToCart}>
            <div className="btn btn-warning cart-button">
              <div className="cart-icon">
                <i className="bi bi-cart-fill" />
              </div>
              <div className="cart-text">
                <p>Add to Cart</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProdDetails;