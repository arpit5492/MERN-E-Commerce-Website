import "./_cat-nav.scss";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getCategories } from "../../Redux/Category/actions";
import { Link } from "react-router-dom";

const CatNav = () => {
    const data = useSelector(state => state.categoryReducer.categories);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getCategories());
    }, [dispatch]);

    // console.log(data);
    return (
        <>
            <div>
                <ul className="cat-nav-container container">
                    <li className="list-items"><Link to="/">Home</Link></li>
                    {data.map((singData, index) => {
                        if(singData.par_cat_id === null){
                            return (
                                <li key={index} className="list-items"><a href="#">{singData.category}</a></li>
                            )
                        }
                        return null;
                    })}
                </ul>
            </div>
        </>
    )
}

export default CatNav;