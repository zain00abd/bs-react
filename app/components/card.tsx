
import { type } from 'os';
import './card.css'
import Link from 'next/link';

type disimal = {
    title:String,
    parag?:String,
}

function Cardstat( {title,parag}:disimal ) {
  return (

<div className="container-fluid">
        <div className="row">
            <div className="col-md-12 side_bar">
                <div className="user_profile_card">
                    <div className="user_profile_img">
                        <img src="https://cdn.discordapp.com/attachments/948596391855394826/1108367985539817512/user_avtaar.png" alt="user_image" className="user_profile_avtaar" width="60"/>
                    </div>
                    <div className="user_details">
                        <div className="user_profile_name">
                            <h5>{title}</h5>
                        </div>
                        <div className="user_profile_mail">
                            <h3>{parag}</h3>
                        </div>
                    </div>
                </div>
                <div className="progress" style={{height:"3px"}}>          
                <div className="progress-bar progress-bar-striped bg-success" style={{ width:"50%"}}></div>
                </div>
                    <Link href="/Haloo">
                    <button id='btn_go' className='btn btn-success'>
                    <p className='m-1'>
                    <i className="fa-solid fa-forward fa-fade fa-xl col-4" style={{color: "#ffffff;"}}></i>
                        START
                    <i className="fa-solid fa-forward fa-fade fa-xl col-4" style={{color: "#ffffff;"}}></i>
                    </p>
                </button>  
                    </Link>

            </div>
        </div>
    </div>

  );
}

export default Cardstat;
