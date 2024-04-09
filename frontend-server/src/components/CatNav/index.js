import "./_cat-nav.scss";

const CatNav = () => {
    const data = [
        "Men", "Women", "Kids", "Best Offers"
    ]
    return (
        <>
            <div>
                <ul className="cat-nav-container container">
                    {data.map((singData, index) => {
                        return (
                            <li key={index} className="list-items"><a href="#">{singData}</a></li>
                        )
                    })}
                </ul>
            </div>
        </>
    )
}

export default CatNav;