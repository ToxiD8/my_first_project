import GetUser from "./GetUser"
import ListUser from "./ListUser"

import {useState} from "react"

function GenerateUser() {

    const [userData, setUserData] = useState()

    const handleUserData = (data) => {
        setUserData(data)
    }

    return (
        <div className="container" id="generate_user">

            <GetUser onSubmitData={handleUserData} />
            <ListUser userData={userData} />

        </div>
    );
}

export default GenerateUser;
