import React from 'react';
import SudentSide from './StudentSide';
import StudentSide from './StudentSide';
import Projects from './Projects';
import Bugs from './Bugs';
import Tasks from './Tasks';
import '../MainMenu.css';


class StudentLanding extends React.Component{

    state={
        currentRoute:'projects'
    }


    onRouteChange=(route)=>{
        this.setState({currentRoute:route});
    }


    render(){
        if(this.state.currentRoute==='projects')
        {return(
          <div>
              <StudentSide mainRoute={this.props.onRouteChange} onRouteChange={this.onRouteChange}/>
              <div className="main" style={{marginLeft:'200px'}}>
                 <Projects />
                </div>
            </div>  
        )}
        else if(this.state.currentRoute==='bugs'){
            return(
                <div>
              <StudentSide mainRoute={this.props.onRouteChange} onRouteChange={this.onRouteChange}/>
              <div className="main" style={{marginLeft:'200px'}}>
                 <Bugs onRouteChange={this.onRouteChange}/>
                </div>
            </div> 
            )
        }
        else if(this.state.currentRoute==='tasks'){
            return(
                <div>
                <StudentSide mainRoute={this.props.onRouteChange} onRouteChange={this.onRouteChange}/>
                <div className="main" style={{marginLeft:'200px'}}>
                 <Tasks onRouteChange={this.onRouteChange}/>
                </div>
            </div> 
            );
        }
        else{
            return(
                <div></div>
            )
        }
    }
}

export default StudentLanding;