
import "./page.css"

function Halo() {
    return (
        <>
            <nav className="navbar bg-body-tertiary">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">
                        <img src="./photo/xz1.png" alt="Logo" width="50" height="50" className="d-inline-block " />
                        OY Goethe
                    </a>
                </div>
            </nav>
            <div className="container ">
                <div className="row-g" style={{ width: "75%", marginLeft: "13%", marginTop: "15px" }}>
                    <div className="card col-12">
                        <video id="myVideo" controls style={{ borderTopLeftRadius: "5px", borderTopRightRadius: "5px" }}>
                            <source src="https://cdn.busuu.com/media-resources/video/mp4/fb464cc9-8a5b-4548-9bac-a42fae718f42_small.mp4" type="video/mp4" />
                        </video>
                        <div className="card-body">
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        </div>
                    </div>
                </div>
            </div>
        </>


    )


}

export default Halo;