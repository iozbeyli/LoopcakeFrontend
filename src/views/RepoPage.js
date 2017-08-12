import React from 'react';
import CodeEditor from '../components/RepoComponents/codeEditor';
import CommitGraph from '../components/RepoComponents/commitGraph';
import RepoCard from '../components/RepoComponents/repoCard';
import {Grid} from 'semantic-ui-react'

export default class RepoPage extends React.Component{

    static dummyCode = `(lambda (*<8-]= *<8-[= ) (or *<8-]= *<8-[= ))
(defun :-] (<) (= < 2))

(defun !(!)(if(and(funcall(lambda(!)(if(and '(< 0)(< ! 2))1 nil))(1+ !))
(not(null '(lambda(!)(if(< 1 !)t nil)))))1(* !(!(1- !)))))`

    static attachments = [
            {
                fileType: '',
                name: 'index.js'
            },
            {
                fileType: '',
                name: 'controllers.js'
            }
        ];

    static folders = [
            {
                name: 'User',
                attachments: RepoPage.attachments
            },
            {
                name: 'Seller',
                attachments: RepoPage.attachments
            }
            ];

    render(){

        return(
          <div>
            <Grid>
              <Grid.Column width={3}>
                <RepoCard hidable={false} attachments={RepoPage.attachments} folders={RepoPage.folders}/>
              </Grid.Column>
              <Grid.Column width={13}>
                <CodeEditor code={RepoPage.dummyCode} fileName="app.java"/>
                <CommitGraph/>
              </Grid.Column>
            </Grid>
          </div>

        );
    };

}
