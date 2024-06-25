import CardFunc from "./CardFunc"

export default function Cardlistfunc(props) {
    const { funcionarios } = props
    console.log(props)

    return (
        <div className="container my-5">
            <div className="row g-5">
                {funcionarios && funcionarios.length > 0 ? (
                    funcionarios.map((funcionario, index) => (
                        <div className="col-12 col-sm-6 col-md-4 col-lg-3" key={index}>
                        
                        <CardFunc key={index} {...funcionario} />
                        </div>
                    ))
                ) : 
                (
                    <p>No employees found</p>
                )}
            </div>
        </div>
    )
}
