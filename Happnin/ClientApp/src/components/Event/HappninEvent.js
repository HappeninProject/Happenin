﻿import React, { Component } from 'react';
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import "../../styles/UserCreation.css";
import logo from '../../images/happninHLogoThumb.png';
import { Row, Col} from 'react-bootstrap';

export class HappninEvent extends Component {
    render() {
        const e = this.props;
        return (
           
            <div class="card" >
            
                    <Row around="xs">
                    <Col xs={2} >
                        <Card.Img variant="left" src={logo} rounded style={{padding: 20}}/>
                    </Col>
                    <Col xs={10} horizontal='right'>
                        <div class="card-body" className='happninevent'>
                            
                            <div className='eventinfo'>
                                <h5 class="card-title">{e.name}</h5>
                                <p class="card-text" >
                                    Description: <b>{e.description}</b> <br/> 
                                    Cost: <b>{e.cost}</b> <br/> 
                                    Host ID: <b>{e.hostId}</b> <br/>
                                    Category: <b>{e.categoryId}</b> <br/>
                                    Age Restriction: <b>{e.ageRestriction}</b> <br/>
                                    Start Time: {e.eventTime}<br/>
                                    End Time: {e.endTime}  <br/></p>
                                    <button id="buyTicketsButton" className="btn btn-primary" >Buy Tickets</button>
                            </div>
                        </div> 
                    </Col>
                    </Row>
             
                
            </div>
            

                )
    }
}