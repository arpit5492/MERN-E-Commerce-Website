import "./_prod-comp.scss";
import prodSlice from "../../Redux/Product/prodSlice";
import {useSelector} from "react-redux";

const ProdComp = () => {
  const prodData = useSelector(prodSlice.getInitialState);
  return (
    <div className="prod-comp">
      {
        prodData.map((item, index) => {
          return (
            <div key={index} className="mx-4 p-3 prod-card">
              <div className="prod-img">
                <img src={item.img} alt={item.pName} />
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