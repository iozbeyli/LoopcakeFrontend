import React from 'react';
import Checklist from './checklist';
import ChecklistCreator from './checklistCreator';
import Card from '../CardComponents/card';
import PropTypes from 'prop-types';
import {Grid,Progress,Button} from 'semantic-ui-react';
export default class ChecklistCard extends React.Component{
  constructor(props){
    super(props);
    this.state={
      progress:55,
      actions: [],
      editable: {
              icon:"save",
              title: "Save Checklist",
          }
    }
  }

  changeProgress = (checklist) => {
      let points =0 ;
      for(let check of checklist){
        if(check.status){
          points+= check.point;
        }
      }
      this.setState({
        progress: points
      })
  }

  handleActions = (actions) => {
    let editable = this.state.editable;
    editable.actions = actions;
    this.setState({
        editable:editable
    })
  }

  componentWillMount(){
    let editable = true ? {
              icon:"pencil",
              title: "Edit Checklist",
              content: <ChecklistCreator setActions={this.handleActions} checkpoints={[{point: 10,status:true,label:"Naber"},{point: 30,status:false,label:"fas"}]}/>,
              actions: this.state.actions
          } : {
              icon:"save",
              title: "Save Checklist",
          };
    this.setState({
        editable:editable
    })
  }

  render(){
    
    return(
      <Card
          title="Checklist"
          content={
            <Grid>
              <Grid.Column width={16}>
                <Progress percent={this.state.progress} size="small" color="yellow"/>
                <Checklist checkpoints={[{point: 10,status:true,label:"Naber"},{point: 30,status:false,label:"fas"}]} changeChecklist={this.changeProgress} />
              </Grid.Column>
            </Grid>
          }
          //editable={this.state.editable}
          
      />

    );
  }
}

ChecklistCard.propTypes = {
  userType: PropTypes.oneOf(['Student', 'Instructor'])
};
