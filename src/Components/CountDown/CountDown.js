import React from "react";
import {useState, useEffect } from 'react';

class CountDown extends React.Component {
    state = {
        second : 10,
    }
    componentWillUnmount() {
        if (this.timer) {
            clearInterval(this.timer);
        }
    }
    componentDidMount() {
       this.timer =  setInterval( () => {
            this.setState({second : this.state.second - 1})
        }, 1000)

    }

    componentDidUpdate(prevProps, prevState )  {
        //console.log('check props: ', prevProps, 'check state: ', prevState);
        if (prevState.second !== this.setState.second && this.state.second === 0) {
            if (this.timer) {
                clearInterval(this.timer);
            }
        }

    }
 render() {
     return (
         <div>
             {this.state.second}
         </div>
     );
 }
}

const NewCountDown = ({timeUp}) => {
    const [count, setCount] = useState(10);

    useEffect(() => {
        if (count === 0) {
            timeUp();
            return;
        }

        let timer = setInterval(() => {
            setCount((prev) => prev - 1);
        }, 1000)

        return () => {
            clearInterval(timer);
        }
    }, [count]);
    return (
        <div>{count} hooks</div>
    )
}

export  { CountDown, NewCountDown };