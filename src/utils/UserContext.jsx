import { createContext } from "react";

const UserContext = createContext({
    defaultloggedIn: "default User"
});

export default UserContext;
