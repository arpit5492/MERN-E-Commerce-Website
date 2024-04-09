const NavBar = () => {
    return (
        <div className='header bg-dark'>
        <div className='row'>
          <div className='brand my-1'>
            <h1> Market Verse </h1>
          </div>
          <div className='inp-container p-0 my-4 w-50 h-25 bg-white'>
            <div className='dropdown m-0 p-0'>
              <select className='select-btn w-100 p-0 m-0'>
                <option> Men </option>
                <option> Women </option>
                <option> Kids </option>
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