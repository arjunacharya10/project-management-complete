import React from 'react';

class StudentSide extends React.Component{

    state={
        active:{
            b1: true,
            b2: false,
            b3: false,
            b4: false,
            b5: false,
            b6: false
        }
    };

    onProjectClick=()=>{
        this.setState({active:{
            b1: true,
            b2: false,
            b3: false,
            b4: false,
            b5: false,
            b6: false
        }});
    }
    onTaskClick=()=>{
        this.setState({active:{
            b1: false,
            b2: true,
            b3: false,
            b4: false,
            b5: false,
            b6: false
        }});
    }
    onBugClick=()=>{
        this.setState({active:{
            b1: false,
            b2: false,
            b3: true,
            b4: false,
            b5: false,
            b6: false
        }});
    }
    onAboutClick=()=>{
        this.setState({active:{
            b1: false,
            b2: false,
            b3: false,
            b4: true,
            b5: false,
            b6: false
        }});
    }
    onContactClick=()=>{
        this.setState({active:{
            b1: false,
            b2: false,
            b3: false,
            b4: false,
            b5: true,
            b6: false
        }});
    }
    onProfileClick=()=>{
        this.setState({active:{
            b1: false,
            b2: false,
            b3: false,
            b4: false,
            b5: false,
            b6: true
        }});
    }
    


    render()
    {
            return(
            <div className="sidenav">
                        <a style={this.state.active.b1?{color: '#ffffff'}:{color:'#818181'}} onClick={()=>{this.onProjectClick();this.props.onRouteChange('projects');}} href="#"><i className="icon file">&nbsp;&nbsp;Projects</i></a><br/>
                        <a style={this.state.active.b2?{color: '#ffffff'}:{color:'#818181'}} onClick={()=>{this.onTaskClick();this.props.onRouteChange('tasks');}} href="#"><i className="icon tasks">&nbsp;&nbsp;Tasks</i></a><br/>
                        <a style={this.state.active.b3?{color: '#ffffff'}:{color:'#818181'}} onClick={()=>{this.onBugClick();this.props.onRouteChange('bugs');}} href="#"><i className="icon bug">&nbsp;&nbsp;Bugs</i></a><br/>
                        
                        <div className="line"></div>
                        <a style={this.state.active.b4?{color: '#67ce63'}:{color:'#818181'}} style={{marginTop: '200px'}} href="#"><i className="icon">&nbsp;&nbsp;About</i></a><br/>
                        <a style={this.state.active.b5?{color: '#67ce63'}:{color:'#818181'}} href="#"><i className="icon">&nbsp;&nbsp;Contact</i></a><br/><br/><br/>
                        <div className="signout" onClick={()=>{
                            var res = window.confirm('Are you sure?');
                            if(res){
                                this.props.mainRoute('login');
                            }
                            }}>Sign Out</div>
                    </div>
        );
    }
}

export default StudentSide;