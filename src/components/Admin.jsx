import React from 'react'
import { withRouter } from "react-router-dom";
import {auth} from '../firebase'

const Admin = (props) => {

    const [user,setUser]= React.useState();

    React.useEffect(() => {
        if(auth.currentUser){
            console.log('existe')
            setUser(auth.currentUser)
        }else{
            console.log('no existe')
            props.history.push('/login')
        }
    }, [props.history])




    return (
        <div>
             <h3 className="text-center">Ruta protegida</h3>
             {
                user && (
                    <p>{user.email}</p>
                )
            }
        </div>
    )
}

export default withRouter(Admin)
