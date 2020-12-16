import React from 'react'
import { Link } from 'react-router-dom'
const FilterBar = ({ mod }) => {
  console.log("MOD:" + mod)
  if (mod == "HomeFilter") {
    return (
      <div className="flex-container filter-bar">
        <div className="row">
          <div className="col-1">
            <Link to='/'>
              <a className="nav-link" >Todo <span className="sr-only">(current)</span></a>
            </Link>
          </div>
        </div>
      </div>
    )
  }
  else {
    return (
      <div className="flex-container filter-bar">
        <div className="row">
          <div className="col-1">
            <Link to='/'>
              <a className="nav-link" >Todo <span className="sr-only">(current)</span></a>
            </Link>
          </div>
          <div className="col-1">
            <Link to='/filter/Malta'>
              <a className="nav-link"  >Maltas</a>
            </Link>
          </div>
          <div className="col-1">
            <Link to='/filter/Lupulo'>
              <a className="nav-link" >Lupulos</a>
            </Link>
          </div>
          <div className="col-1">
            <Link to='/filter/Levadura'>
              <a className="nav-link" >Levaduras</a>
            </Link>
          </div>
        </div>
      </div>
    )
  }

}
export default FilterBar







