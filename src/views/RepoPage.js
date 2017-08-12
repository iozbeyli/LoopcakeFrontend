import React from 'react';
import CodeEditor from '../components/RepoComponents/codeEditor';
import CommitGraph from '../components/RepoComponents/commitGraph';
import RepoCard from '../components/RepoComponents/repoCard';
import {Grid, Tab, Header} from 'semantic-ui-react'

export default class RepoPage extends React.Component{

    static dummyCode = `(lambda (*<8-]= *<8-[= ) (or *<8-]= *<8-[= ))
(defun :-] (<) (= < 2))

(defun !(!)(if(and(funcall(lambda(!)(if(and '(< 0)(< ! 2))1 nil))(1+ !))
(not(null '(lambda(!)(if(< 1 !)t nil)))))1(* !(!(1- !)))))`

    static dummyFilename = "scheme.lisp"

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
    
    static tabs = [
        {
            menuItem: { key: 'edit', icon: 'code', content: 'Editor' },
            render: () => (
                <Tab.Pane>
                    <Grid>
                        <Grid.Column width={3}>
                            <RepoCard hidable={false} attachments={RepoPage.attachments} folders={RepoPage.folders}/>
                        </Grid.Column>
                        <Grid.Column width={13} style={{paddingLeft:0}}>
                            <Header as='h4'>{RepoPage.dummyFilename}</Header>
                            <CodeEditor code={RepoPage.dummyCode} fileName="app.java"/>
                        </Grid.Column>
                    </Grid>
                </Tab.Pane>
            )
        },
        { 
            menuItem: {key: 'graph', icon: 'space shuttle', content: 'Git Graph'},
            render: () => <Tab.Pane><CommitGraph/></Tab.Pane> 
        }
    ]
    render(){

        return(
          <div>
            <Tab panes={RepoPage.tabs}/>
          </div>
        );
    };

}
