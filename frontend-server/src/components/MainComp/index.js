import "./_main-comp.scss";
import SideNav from "../SideNav";
import ProdComp from "../ProdComp";

const MainComp = () => {
    return (
        <div>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-3 col-md-3 col-sm-4">
                        <SideNav />
                    </div>
                    <div className="col-lg-9 col-md-9 col-sm-8">
                        <ProdComp />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MainComp;