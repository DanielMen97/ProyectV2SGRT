import './menu.css'
import { Link } from "react-router-dom"
import { MenuOptions } from "./mock"

export const Menu = () => {
  return (
    <nav className="navegator-conteiner">
      {
        MenuOptions.map((options, index) => {
          const path = options.nombre === "SGRT" ? "" : options.nombre
          return (
            <div className='option-item' key={index}>
              <Link to={`/${path}`}>
                <p className='option-name'>{options.nombre}</p>
              </Link>
            </div>
          )
        })
      }
    </nav>
  )
}