const NavBar = () => {
    const selData = [
        "Men", "Women", "Kids"
    ]
    return (
        <div className='header bg-dark'>
            <div className='row'>
                <div className='brand'>
                    <h3 className="">Market Verse</h3>
                </div>
                <div className='inp-container p-0 my-4 w-50 h-25 bg-white'>
                    <div className='dropdown m-0 p-0'>
                        <select className='select-btn w-100 p-0 m-0'>
                            {selData.map((data, index) => {
                                return (
                                    <option key={index}>{data}</option>
                                )
                            })}
                        </select>
                    </div>
                    <input className='form-control ' placeholder='Search...'/>
                    <button> <i className='bi bi-search'/> </button>
                </div>
            </div>
        </div>
    )
}

export default NavBar;