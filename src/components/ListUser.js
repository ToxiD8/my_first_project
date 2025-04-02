import {Link} from 'react-router-dom'

function GenerateUser(props) {
    const {userData} = props

    return (
        <div id="user_details">
        {userData != undefined && userData.map((item, index) => (
            <div key={index}>
                <div className="user_photo horizontal_center" id="user_photo">
                    <img src={item.picture} />
                </div>
                <p className="user_title">Full Name</p>
                <p className="user_value">{item.name + ' ' + item.surname}</p>
                <p className="user_title">E-Mail Address</p>
                <Link to='#' onClick={() => window.location = 'mailto:'+item.email}>{item.email}</Link>
                <p className="user_title">Phone Number</p>
                <Link to='#' onClick={() => window.location = 'callto:'+item.phone}>{item.phone}</Link>
            </div>
        ))}
        </div>
    );
}

export default GenerateUser;
