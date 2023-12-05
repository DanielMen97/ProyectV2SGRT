import './row.css'

export const Row = ({elements}) => {

    return (
        <div className="row-container">
            {
                elements.map((data) => {
                    return (
                        <div className="data-container">
                            <p className="data-name">{data.nombre}</p>
                            <p>{data.apellido}</p>
                            <p>{data.correo}</p>
                            <p>{data.celular}</p>
                        </div>
                    )
                })
            }
        </div>
    )
}