import "./_side-nav.scss";
import {useDispatch, useSelector} from "react-redux";
import { useEffect, useState } from "react";
import { getCategories } from "../../Redux/Category/actions";
import { filterByPrice, filterProds } from "../../Redux/Product/prodSlice";

const SideNav = () => {
    const categories = useSelector(state => state.categoryReducer.categories);
    const fetchProdData = useSelector(state => state.prodReducer);
    const [products, setProds] = useState();
    const [filterPrice, setFilterPrice] = useState({
        minPrice: 10,
        maxPrice: 130
    });
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getCategories());
    }, [dispatch]);

    useEffect(() => {
        setProds(fetchProdData.prods);
    }, [fetchProdData.status]);

    const filterData = (itemData) => {
        // console.log(products);
        // console.log(itemData);
        const payload = {itemData, products}
        // console.log(payload);
        dispatch(filterProds(payload));
    }

    const priceFilterHandler = (e, flag) => {
        if(flag === "min") {
            // console.log(e.target.value);
            setFilterPrice(prevValue => {
                return (
                    {...prevValue, minPrice: e.target.value}
                )
            })
        } else if(flag === "max") {
            // console.log(e.target.value);
            setFilterPrice(prevValue => {
                return (
                    {...prevValue, maxPrice: e.target.value}
                )
            })
        }
    }

    const applyPriceFilter = () => {
        const payload = {products, filterPrice}
        // console.log(payload);
        dispatch(filterByPrice(payload));
    }   

    // console.log(categories);
    return (
        <div className="side-nav">
            <div className="section-title">
                <h3>Category</h3>
            </div>

            <div className="accordion my-3">
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
                                                            <li key={index} className="list-items">
                                                                <a href="#" onClick={() => filterData(subCat)}>{subCat.category}</a>
                                                            </li>
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
            <div className="price-filter-container">
                <div className="section-title">
                    <h3>Filter By Price</h3>
                </div>
                <div>
                    <label> Min: {filterPrice.minPrice}</label>
                    <input type="range" 
                        className="form-range"
                        min={2}
                        max={130}
                        step={10}
                        onChange={(e) => priceFilterHandler(e, "min")}
                    />
                </div>
                <div>
                    <label> Max: {filterPrice.maxPrice}</label>
                    <input type="range"
                        className="form-range" 
                        min={2}
                        max={130}
                        step={10}
                        onChange={(e) => priceFilterHandler(e, "max")}
                    />
                </div>
                <button onClick={applyPriceFilter} className="btn btn-outline-dark my-3">Apply filter</button>
            </div>
        </div>
    )
}

export default SideNav;