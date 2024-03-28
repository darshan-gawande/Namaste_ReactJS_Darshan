import User from "./User";
import UserClass from "./UserClass";
import UserContext from "../utils/UserContext";

const Contact = () => {
    return (
        <div>
            <h3>Contact Us </h3>
            <h3>User Logged :
                <UserContext.Consumer>
                    {({defaultloggedIn}) => <h1 className="font-bold text-xl">{defaultloggedIn}</h1>}

                </UserContext.Consumer>

            </h3>

            
            <UserClass name="Aishwarya-Class" />

        </div>
    )
};

export default Contact;
