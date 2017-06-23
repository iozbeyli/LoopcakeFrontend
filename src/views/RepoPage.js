import React from 'react';
import CodeEditor from '../components/RepoComponents/codeEditor';
export default class RepoPage extends React.Component{


    render(){

        return(
             <CodeEditor code="void fas(){}" fileName="app.java"/>


        );
    };

}