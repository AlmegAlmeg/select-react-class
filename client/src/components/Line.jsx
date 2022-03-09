const Line = ({ item:{ line, company, category }}) => {
    return (
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">Line number: { line }</h5>
            <h6 className="card-subtitle mb-2 text-muted">Company: { company }</h6>
            <span>Area: { category }</span>
          </div>
        </div>
    )
}
 
export default Line;