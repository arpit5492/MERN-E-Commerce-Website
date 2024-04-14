import "./_prod-comp.scss";
import {useDispatch, useSelector} from "react-redux";
import { useEffect } from "react";
import { getProds } from "../../Redux/Product/actions";
import { addCartItem } from "../../Redux/Cart/cartSlice";
import { Link } from "react-router-dom";

const ProdComp = () => {
  const prodData = useSelector(state => state.prodReducer.prods);
  const cart = useSelector(state => state.cr);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProds());
  }, [dispatch]);

  // console.log(cart);

  const addToCart = (itemData) => {
    // console.log(itemData);
    dispatch(addCartItem(itemData));
  }

  // console.log(cart);

  // console.log(prodData);
  return (
    <div className="prod-comp">
      {
        prodData.map((item, index) => {
          return (
            <div key={index} className="mx-4 p-3 prod-card">
              <Link to={`/prodDet/${item.id}`} state={item}>
                <div className="prod-img">
                  <img src={item.prod_img} alt={item.pName} />
                </div>
              </Link>
              <div className="prod-text">
                <h5><Link to={`/prodDet/${item.id}`} state={item}>{item.pName}</Link></h5>
                <p> ${item.price} </p>
                <div className="prod-rating">
                  <a href=""><i className="bi bi-star-fill"></i></a>
                  <a href=""><i className="bi bi-star-fill"></i></a>
                  <a href=""><i className="bi bi-star-fill"></i></a>
                  <a href=""><i className="bi bi-star-fill"></i></a>
                  <a href=""><i className="bi bi-star-fill"></i></a>
                </div>
              </div>
              <div className="my-2" onClick={() => addToCart(item)}>
                <div className="cart-button">
                  <div className="icon-container">
                      <i className="bi bi-cart-fill mx-4"></i>
                  </div>
                  <div className="mx-3 cart-text-container">
                    <p className="">Add to Cart</p>
                  </div>
                </div>
              </div>
            </div>
          )
        })
      }
    </div>
  )
}

export default ProdComp;