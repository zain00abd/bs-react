


function Cardstat() {
  return (
<div className="row card mb-4 border-secondary" style={{borderWidth: "1px;"}}>
  <div className="row g-0" >
    <div className="col-4">
      <img src="photo/ggg.png" style={{height: "176px;"}}  className="img-fluid rounded-start" alt="..."/>
    </div>
    <div className="col ">
      <div className="card-body">
        <h5 className="card-title card-header text-center">Card title</h5>
        <p className="card-text ">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
      </div>
    </div>
  </div>
    <a href="#" className="btn btn-success h-2" style={{height: "45px;"}}>
      <div className="row">
      <i className="fa-solid fa-forward fa-fade fa-2xl col-4 mt-3" style={{color: "#ffffff;"}}>
          </i>
          <h4 className="col-4">
            Start
          </h4>
          <i className="fa-solid fa-forward fa-fade fa-2xl col-4 mt-3" style={{color: "#ffffff;"}}>
          </i>
      </div>
    </a>
</div>

  );
}

export default Cardstat;
