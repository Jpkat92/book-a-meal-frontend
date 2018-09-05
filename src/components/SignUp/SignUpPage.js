import React, { Component } from 'react';
import { Tabs , Tab } from 'react-bootstrap';
import { CatererSignUp } from './CatererSignUp'
import { CustomerSignUp } from './CustomerSignUp'

class SignUpPage extends Component {
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
                    <div className="col-md-offset-3 col-md-6">
                        <div id="signup">
                            <div className="formBox"> 
                                <Tabs activeKey={this.state.key}
                                        onSelect={this.handleSelect}
                                        id="sign-up-tabs">
                                    <Tab eventKey={1} title="Customer">
                                        <CustomerSignUp />
                                    </Tab>
                                    <Tab eventKey={2} title="Caterer">
                                        <CatererSignUp />
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
  
  export default SignUpPage;
