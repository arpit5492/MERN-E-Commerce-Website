import "./_prod-comp.scss";

const ProdComp = () => {
  const prodData = [
    {
      pName: "Jacket",
      price: 45,
      img: "https://m.media-amazon.com/images/I/81iOSL3bIfL._AC_SX679_.jpg"
    },
    {
      pName: "Shirt",
      price: 29,
      img: "https://m.media-amazon.com/images/I/61JELqH2RvL._AC_SX679_.jpg"
    },
    {
      pName: "Jeans",
      price: 38,
      img: "https://i.insider.com/64493a3790523900196ff87d?width=1005&format=jpeg&auto=webp"
    },
    {
      pName: "Boots",
      price: 70,
      img: "https://m.media-amazon.com/images/I/717LvSTNqQL._AC_SY695_.jpg"
    },
    {
      pName: "Top",
      price: 43.99,
      img: "https://m.media-amazon.com/images/I/51CFDAxtC3L._AC_SY879_.jpg"
    },
    {
      pName: "Top",
      price: 43.99,
      img: "https://m.media-amazon.com/images/I/51CFDAxtC3L._AC_SY879_.jpg"
    }
  ]
  return (
    <div className="prod-comp">
      {
        prodData.map(item => {
          return (
            <div className="mx-4 my-3 p-3 prod-card">
              <div className="prod-img">
                <img src={item.img} alt={item.pName} />
              </div>
              <div className="prod-text">
                <h5><a href="#">{item.pName}</a></h5>
                <p> ${item.price} </p>
                <div className="prod-rating">
                  <a href=""><i class="bi bi-star-fill"></i></a>
                  <a href=""><i class="bi bi-star-fill"></i></a>
                  <a href=""><i class="bi bi-star-fill"></i></a>
                  <a href=""><i class="bi bi-star-fill"></i></a>
                  <a href=""><i class="bi bi-star-fill"></i></a>
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