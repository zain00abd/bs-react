
import './card.css'

function Cardstat() {
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
                            <h5>Piyush Bansal</h5>
                        </div>
                        <div className="user_profile_userID">
                            <h5>User ID:<span> Piyush96</span></h5>
                        </div>
                        <div className="user_profile_mail">
                            <h5>piyush@yourmail.com</h5>
                        </div>
                        <div className="user_designation">
                            <button className='btn btn-primary'>ADMIN</button>
                        </div>
                    </div>
                    <div className="circle_decor1"></div>
                    <div className="circle_decor2"></div>
                    <div className="circle_decor3"></div>
                </div>
            </div>
   
        </div>
    </div>

  );
}

export default Cardstat;
