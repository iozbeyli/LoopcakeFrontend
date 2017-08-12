import React from 'react';
import CodeMirror from 'react-codemirror';
import PropTypes from 'prop-types';



class CodeEditor extends React.Component{

constructor(props) {
    super(props);
    this.state = {
        code: "// Code",
        mode: 'clike',
        readOnly: false,
        theme: 'rubyblue',
        initialized: false,
        fullscreen:false,
        spec: 'x-java',
        codemirror: undefined
    };
}

componentDidMount(){
    initCodemirror(window);
    window.CodeMirror.modeURL = "codemirror/mode/%N/%N.js";
    this.setState({
        codemirror: window.CodeMirror
    });
    this.forceUpdate();
}

    initialize(){
        let m,mode,spec;
        if (m = /.+\.([^.]+)$/.exec(this.props.fileName)) {
            let info = this.state.codemirror.findModeByExtension(m[1]);
            if (info) {
                mode = info.mode;
                spec = info.mime;
            }
        } else if (/\//.test(this.props.fileName)) {
            let info = this.state.codemirror.findModeByMIME(this.props.fileName);
            if (info) {
                mode = info.mode;
                spec = this.props.fileName;
            }
        } else {
            mode = spec = this.props.fileName;
        }
        if (mode) {
            this.setState({
                initialized: true,
                mode:spec,
                code: this.props.code
            })
        } else {
            this.setState({
                initialized: true,
                mode: 'clike',
                code: this.props.code
            })
        }
        
}

render(){
    let options = {
        lineNumbers: true,
        styleActiveLine:true,
        autoCloseBrackets: true,
        autoCloseTags: true,
        lineWrapping: true,
        foldGutter: true,
        height: 'auto',
        readOnly: this.props.readOnly,
        mode: this.state.spec,
        theme: 'rubyblue',
        extraKeys: {"Ctrl-Space": "autocomplete",
            "Alt-F": "findPersistent",
            "Ctrl-Q": function(cm){ cm.foldCode(cm.getCursor()); },
            "Ctrl-X": cm =>{ this.saveCode()},
        },
        gutters: ["CodeMirror-linenumbers", "CodeMirror-foldgutter"]
    };
    this.state.codemirror && !this.state.initialized && this.initialize();
    return(
        this.state.codemirror ? <CodeMirror
            ref={(editor) => { this.editor = editor; }}
            codeMirrorInstance={this.state.codemirror}
            value={this.props.code}
            options={options}
        /> : <a>No Server Side CodeMirror</a>

    );
};

}

function initCodemirror(window) {
    if(!window.CodeMirror){
        require('codemirror/lib/codemirror.css');
        window.CodeMirror = require('codemirror');
        //require ('node_modules/codemirror/addon/mode/loadmode.js');
        require ('codemirror/mode/meta.js');
        require('codemirror/theme/rubyblue.css');
        require('./codeEditorStyle.css');
    }

}

CodeEditor.propTypes = {
    readOnly: PropTypes.bool,
    code: PropTypes.string.isRequired,
    fileName : PropTypes.string.isRequired
};

export default CodeEditor;