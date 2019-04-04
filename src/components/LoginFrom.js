import React from 'react';
import Signin from './Signin';
import Register from './Register';

class LoginForm extends React.Component{

    state={
        currentRoute: 'signin'
    }

    onRouteChange=(route)=>{
        this.setState({currentRoute:route});
    }


    render(){
        return(

                this.state.currentRoute==='signin'?
                    <Signin onRouteChange={this.onRouteChange} mainRoute={this.props.onRouteChange}/>:
                <Register onRouteChange={this.onRouteChange}/>

        );
    }
}

export default LoginForm;