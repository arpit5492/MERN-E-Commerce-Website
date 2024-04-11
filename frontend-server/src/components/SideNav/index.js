import "./_side-nav.scss";
import sideNavSlice from "../../store/slices/sideNav";
import {useSelector} from "react-redux";

const SideNav = () => {
    const categories = useSelector(sideNavSlice.getInitialState);
    return (
        <div className="side-nav">
            <div className="section-title">
                <h3>Category</h3>
            </div>

            <div className="accordion">
                {categories.map((data, index) => {
                    return (
                        <div key={index} className="accordion-item individual-category">
                            <div className="accordion-header">
                                <button className="accordion-button" data-bs-target={"#collapse"+index} data-bs-toggle="collapse">
                                    <div className="category-title">
                                        <a href="">{data.category}</a>
                                    </div>
                                </button>
                            </div>
                            <div className="accordion-collapse collapse show" id={"collapse"+index}>
                                <div className="accordion-body">
                                    <ul>
                                        {data.items.map((item, index) => {
                                            return (
                                                <li key={index} className="list-items"><a href="#">{item}</a></li>
                                            )
                                        })}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default SideNav;