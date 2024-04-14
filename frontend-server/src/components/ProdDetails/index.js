import { useLocation } from "react-router-dom";
import "./_prod-details.scss";

const ProdDetails = () => {
  const location = useLocation();
  // console.log(location.state);
  const data = location.state;
  return (
    <div className="prodDet">
      <div>
        <div>
          <img src={data.prod_img} alt={data.pName} />
        </div>
        <div>
          <span>{data.pName}</span>

          <div className="prod-rating">
            <a href=""><i className="bi bi-star-fill"></i></a>
            <a href=""><i className="bi bi-star-fill"></i></a>
            <a href=""><i className="bi bi-star-fill"></i></a>
            <a href=""><i className="bi bi-star-fill"></i></a>
            <a href=""><i className="bi bi-star-fill"></i></a>
          </div>
          <div>
            Price: <span>${data.price}</span>
            <div>Inclusive of all taxes</div>
          </div>
          <div>
            <span>Product Description</span>
          </div>

          <div>
            <div>
              <div>
                <i className="bi bi-cart-fill" />
              </div>
              <div>
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