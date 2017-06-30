import React from 'react';
import CodeEditor from '../components/RepoComponents/codeEditor';
import CommitGraph from '../components/RepoComponents/commitGraph';
export default class RepoPage extends React.Component{


    render(){

        return(
          <div>
            <CodeEditor code="void fas(){}" fileName="app.java"/>
            <CommitGraph/>
          </div>

        );
    };

}
