import "./_side-nav.scss";
import {useDispatch, useSelector} from "react-redux";
import { useEffect } from "react";
import { getCategories } from "../../Redux/Category/actions";

const SideNav = () => {
    const categories = useSelector(state => state.categoryReducer.categories);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getCategories());
    }, [dispatch]);

    // console.log(categories);
    return (
        <div className="side-nav">
            <div className="section-title">
                <h3>Category</h3>
            </div>

            <div className="accordion">
                {categories.map((data, index) => {
                    if(data.par_cat_id === null) {
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
                                            {
                                                categories.map((subCat, index) => {
                                                    if(data.id === subCat.par_cat_id) {
                                                        return (
                                                            <li key={index} className="list-items"><a href="#">{subCat.category}</a></li>
                                                        )
                                                    }
                                                    return null;
                                                })
                                            }
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        )
                    }
                    return null;
                })}
            </div>
        </div>
    )
}

export default SideNav;