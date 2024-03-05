import React, { Component } from 'react';
import style from "../timer/Timer.module.css"

class Timer extends Component {
    // 1. it is used to intiive to state value  or binding methods
    constructor(props) {
        super(props);
        
        this.state={
            time:new Date()
        }
    }

    tick=()=>{

        this.setState({
            time:new Date()
        })

    }

    //3. it is called after mouting, it is mostley used to get data from fetch server
    componentDidMount(){
        this.timrref=setInterval(this.tick, 1000);
    }

    componentDidUpdate(prevProps,prevState){
        if(this.state.time !==  prevState.time){

        }
    }

    componentWillUnmount(){

    }

    
    render() {
        return (
            <body>
            <div className={style.clock}>
                <h2>Timer Clock</h2>


                <h3>{this.state.time.toLocaleTimeString()}</h3>
                
            </div>
            </body>
        );
    }
}

export default Timer;