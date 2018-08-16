import React, { Component } from 'react';
import { Tabs , Tab } from 'react-bootstrap';
import { CatererSignIn } from '../CatererSignIn'
import { CustomerSignIn } from '../CustomerSignIn'

class SignInPage extends Component {
    constructor(props, context) {
        super(props, context);
    
        this.handleSelect = this.handleSelect.bind(this);
    
        this.state = {
          key: 1
        };
      }
    
      handleSelect(key) {
        this.setState({ key });
      }
      
    render() {
        return (
            <div className="wrapper">
                <div className="row">
                    <div className="col-md-10">
                        <div id="signin">
                            <div className="formBox"> 
                                <Tabs activeKey={this.state.key}
                                        onSelect={this.handleSelect}
                                        id="sign-in-tabs">
                                    <Tab eventKey={1} title="Customer">
                                        <CustomerSignIn />
                                    </Tab>
                                    <Tab eventKey={2} title="Caterer">
                                        <CatererSignIn />
                                    </Tab>
                                </Tabs>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
  }

export default SignInPage;
