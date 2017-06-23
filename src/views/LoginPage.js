import React from 'react';
import {Form} from '../components/FormComponents';
import {Grid,Card} from 'semantic-ui-react';
import {Authentication} from '../database';
import { withCookies, Cookies } from 'react-cookie';
import PropTypes,{instanceOf} from 'prop-types';

class LoginPage extends React.Component {
    static propTypes = {
        cookies: instanceOf(Cookies).isRequired
    };

    constructor(props){
        super(props);
        this.state={

        };
    }

    handleSubmit = (formData) => {
        let data = {...formData};
        let handleResponse = (err,resp) => {
            if(err){

            }else{
                console.log(resp);
                this.props.cookies.set('token', resp.body.data.token, { path: '/' });
            }
        };
        Authentication.Login(data,handleResponse);
    };

    render(){
        const formFieldData=[
            {
                label: "Email",
                name: "email",
                type: "text",
                placeholder: "abc@loopcake.com"
            },
            {
                label: "Password",
                name:"password",
                type:"password",
            }
        ];
        return(
            <Grid centered >
                <Grid.Row stretched>
                    <Grid.Column width={5}>
                        <Card>
                            <Card.Content>
                                <Form onSubmit={this.handleSubmit} formData={formFieldData}/>
                            </Card.Content>
                        </Card>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        );
    }



};

export default withCookies(LoginPage);