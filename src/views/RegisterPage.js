import React from 'react';
import {Form} from '../components/FormComponents';
import {Grid,Card,Image,Header} from 'semantic-ui-react';
import {Authentication} from '../database';
const RegisterPage = () => {
    const formFieldData=[
        {
            label: "Email",
            name: "email",
            type: "text",
            placeholder: "abc@loopcake.com"
        },
        {
            label: "Name",
            name: "name",
            type: "text"
        },
        {
            label: "Surname",
            name: "surname",
            type: "text"
        },
        {
            label: "Password",
            name:"password",
            type:"password",
            withMeter:true
        },
        {
            label:  "Repeat",
            name:   "repeat",
            type:   "password"
        }
    ];
    let handleSubmit = (formData) => {
        console.log(formData);
        let handleResponse = (err,resp) => {
            if(err){

            }else{
                console.log(resp);
            }
        };
        Authentication.Register(formData,handleResponse);
    };
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
                                    Register
                                </Header>
                                <Form onSubmit={handleSubmit} formData={formFieldData}/>
                            </Card.Content>
                        </Card>
                    </Grid.Column>
                </Grid.Row>
            </Grid>


    );
};
export default RegisterPage;