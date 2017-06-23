import React from 'react';
import {Form} from '../components/FormComponents';
import {Grid,Card} from 'semantic-ui-react';
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
        <Grid centered>
            <Grid.Column width={5}>
                <Card>
                    <Card.Content>
                        <Form onSubmit={handleSubmit} formData={formFieldData}/>
                    </Card.Content>
                </Card>
            </Grid.Column>
        </Grid>

    );
};
export default RegisterPage;