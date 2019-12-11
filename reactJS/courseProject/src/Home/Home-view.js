import React, {Component} from 'react'
import styles from './Home-style';
import {BigHeading} from '../ui';
export default class Home extends Component{
    constructor(){
        super();
    }
    render(){
        return (
            <div>
                <BigHeading>
                    Keep it simple silly
                </BigHeading>>
            </div>
        )
    }
}