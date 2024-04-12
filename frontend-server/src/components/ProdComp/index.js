import "./_prod-comp.scss";
import prodSlice from "../../Redux/Product/prodSlice";
import {useDispatch, useSelector} from "react-redux";
import { useEffect } from "react";
import { getProds } from "../../Redux/Product/actions";

const ProdComp = () => {
  const prodData = useSelector(state => state.prodReducer.prods);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProds());
  }, [dispatch]);

  // console.log(prodData);
  return (
    <div className="prod-comp">
      {
        prodData.map((item, index) => {
          return (
            <div key={index} className="mx-4 p-3 prod-card">
              <div className="prod-img">
                <img src={item.prod_img} alt={item.pName} />
              </div>
              <div className="prod-text">
                <h5><a href="#">{item.pName}</a></h5>
                <p> ${item.price} </p>
                <div className="prod-rating">
                  <a href=""><i className="bi bi-star-fill"></i></a>
                  <a href=""><i className="bi bi-star-fill"></i></a>
                  <a href=""><i className="bi bi-star-fill"></i></a>
                  <a href=""><i className="bi bi-star-fill"></i></a>
                  <a href=""><i className="bi bi-star-fill"></i></a>
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