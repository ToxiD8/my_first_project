import {useRef, useEffect} from "react"
import axios from "axios"
import Button from "react-bootstrap/Button"
import 'bootstrap/dist/css/bootstrap.min.css';
import {LuRefreshCw} from "react-icons/lu";


function GenerateUser(props) {
    const {onSubmitData} = props

    const getData = () => {
        let url = "https://randomuser.me/api/"

        axios.get(url).then(response => {
            let data =[]
            let users = response.data.results[0]

            data.push({
                name: users.name.first,
                surname: users.name.last,
                email: users.email,
                phone: users.phone,
                picture: users.picture.large
            })
            onSubmitData(data)
        })
    }

    useEffect(() => {
        getData()
    }, []);

    return (
        <div>
            <Button className="btn" variant="dark" onClick={getData} >
                <LuRefreshCw />
            </Button>
        </div>
    );
}

export default GenerateUser;
