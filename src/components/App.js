import React from 'react';
import Signin from './Signin';
import StudentLanding from './student/StudentLanding';

import LoginFrom from './LoginFrom';

class App extends React.Component{

    state={
        currentRoute: 'login'
    }

    onRouteChange=(route)=>{
        console.log(route);
        this.setState({currentRoute:route});
    }



    render(){
        return(
            <div>
                {
                    this.state.currentRoute==='login'?
                        <LoginFrom onRouteChange={this.onRouteChange}/>:
                    <StudentLanding onRouteChange={this.onRouteChange}/>
                }
            </div>
        );
    }
}

export default App;

