import "./_side-nav.scss";

const SideNav = () => {
    const items = ["Coats", "Shirts", "Boots", "Jeans"];
    return (
        <div className="side-nav">
            <div className="section-title">
                <h3>Category</h3>
            </div>

            <div className="accordion">
                <div className="accordion-item individual-category">
                    <div className="accordion-header">
                        <button className="accordion-button" data-bs-target="#accordion-heading-one" data-bs-toggle="collapse">
                            <div className="category-title">
                                <a href="">Men</a>
                            </div>
                        </button>
                    </div>
                    <div className="accordion-collapse collapse show" id="accordion-heading-one">
                        <div className="accordion-body">
                            <ul>
                                {items.map((item, index) => {
                                    return (
                                        <li key={index} className="list-items"><a href="#">{item}</a></li>
                                    )
                                })}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SideNav;