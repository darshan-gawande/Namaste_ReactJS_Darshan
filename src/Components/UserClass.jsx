import React from "react"

class UserClass extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            User: {
                name: "Dummy",
                location:"Anywhere"
            }
        }
    };

    async componentDidMount() {
        const data = await fetch("https://api.github.com/users/darshan-gawande");
        const json = await data.json();

        console.log(json);

        this.setState({
            User : json
        });
    }

    render() {
        const {name, location, avatar_url} = this.state.User;
        return (
              <div className="user-card">   
              <img src= {avatar_url} width={100} height={100}/>
            <h1>  {name} </h1>
            <h3> {location}</h3>

            <h5>twitter: darshan_Ga_ </h5>
        </div>
        )
    }
}

export default UserClass;
