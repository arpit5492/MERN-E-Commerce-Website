import "./_prod-comp.scss";

const ProdComp = () => {
  return (
    <div className="prod-comp">
      <div className="mx-5 p-3 col-lg-3 col-md-6 prod">
        <div className="prod-img">
          <img src="https://m.media-amazon.com/images/I/81iOSL3bIfL._AC_SX679_.jpg" alt="" />
        </div>
        <div>
          <h5><a href="#">Jacket</a></h5>
          <p> $45 </p>
        </div>
      </div>
    </div>
  )
}

export default ProdComp;