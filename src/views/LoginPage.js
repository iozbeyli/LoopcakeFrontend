import React from 'react';
import {Form} from '../components/FormComponents';
import {Grid,Card,Image,Header} from 'semantic-ui-react';
import {Authentication} from '../database';
import { withCookies, Cookies } from 'react-cookie';
import PropTypes,{instanceOf} from 'prop-types';
import {connect} from 'react-redux';
import {loginAction} from '../actions/authentication';



class LoginPage extends React.Component {
    static propTypes = {
        cookies: instanceOf(Cookies).isRequired
    };

    constructor(props){
        super(props);
        console.log("Login Props");
        console.log(props);
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
                this.props.cookies.set('user',resp.body.data.user,{path: '/'});
                this.props.loginAction(resp.body.data.user.email,resp.body.data.token);
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
            <Grid style={{
                            position: 'fixed',
                            top: 0,
                            left: 0,
                            bottom: 0,
                            right: 0,
                            overflow: 'auto',
                            background: '#2c3e50', 
                            }}>
                <Grid.Row></Grid.Row>
                <Grid.Row centered>
                    <Grid.Column width={5}>
                        <Image centered height={50} size="small" src={require('../../static/images/loopcakeWhiteLogoWithText.svg')}></Image>
                        <br/>
                        <Card fluid>
                            <Card.Content>
                                <Header as="h1" textAlign="center">
                                    Log In
                                </Header>
                                <Form extra={<a>Forgot My Password</a>} onSubmit={this.handleSubmit} formData={formFieldData}/>
                            </Card.Content>
                        </Card>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        );
    }



};

export default LoginPage;
