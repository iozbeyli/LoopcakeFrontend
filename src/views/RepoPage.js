import React from 'react';
import CodeEditor from '../components/RepoComponents/codeEditor';
import CommitGraph from '../components/RepoComponents/commitGraph';
import RepoCard from '../components/RepoComponents/repoCard';
import {Grid, Tab, Header} from 'semantic-ui-react'
/*import FineUploaderTraditional from 'fine-uploader-wrappers'
import Gallery from 'react-fine-uploader'
import 'react-fine-uploader/gallery/gallery.css'*/
import 'react-fine-uploader/gallery/gallery.css';
import {asyncLoad} from '../functions/file-upload';

export default class RepoPage extends React.Component{

    static dummyCode = `(lambda (*<8-]= *<8-[= ) (or *<8-]= *<8-[= ))
(defun :-] (<) (= < 2))

;;;The code below
;;;does some other stuff
(defun !(!)(if(and(funcall(lambda(!)(if(and '(< 0)(< ! 2))1 nil))(1+ !))

;;;The code below
;;;does some stuff
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
    

    
    /*static uploader = new FineUploaderTraditional({
        options: {
            chunking: {
                enabled: true
            },
            deleteFile: {
                enabled: true,
                endpoint: '/uploads'
            },
            request: {
                endpoint: '/uploads'
            },
            retry: {
                enableAuto: true
            }
        }
    });*/

    constructor(props) {
        super(props);
        this.state = {};
    }

    //https://github.com/FineUploader/react-fine-uploader/issues/49
    /*componentWillMount() {
        asyncLoad().then(({ FineUploaderTraditional, Gallery }) => {
            console.log("Objects", FineUploaderTraditional, Gallery);
            const uploader = new FineUploaderTraditional({
                options: {
                    chunking: {
                        enabled: true
                    },
                    deleteFile: {
                        enabled: true,
                        endpoint: '/uploads'
                    },
                    request: {
                        endpoint: '/uploads'
                    },
                    retry: {
                        enableAuto: true
                    }
                }
            });
            this.setState({...this.state, Gallery, uploader});
        });
    }*/

    _renderGallery(){
        if(this.state.Gallery && this.state.uploader) {
            const {Gallery, uploader} = this.state;
            return (<Gallery uploader={uploader}/>);
        }
    }

    _getTabs() {
        return [
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
                render: () => (
                    <Tab.Pane>
                       <CommitGraph/>
                        {this._renderGallery()}
                    </Tab.Pane> 
                )
            },
    
        ];
    }

    render(){
        console.log("State: ", this.state);
        return(
          <div>
            <Tab panes={this._getTabs()}/>
          </div>
        );
    };

}
