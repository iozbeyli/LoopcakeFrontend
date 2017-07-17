import React from 'react';
import {Checkbox,Icon,Grid,List,Label} from 'semantic-ui-react'
import PropTypes from 'prop-types';

export default class Checklist extends React.Component{
  constructor(props){
      super(props);
      this.state = {
        checkpoints:props.checkpoints
      }
      props.changeChecklist(this.props.checkpoints);
  }

  checkpointsToState = (checkpoints) => {
    let stateCheck={};

    checkpoints.map((check)=>{
      stateCheck[check.label] = check;
    });
    this.setState({
      checkpoints: stateCheck
    });

  };

  toggle = (e,numer,fa) => {
    let stateCheck = this.state.checkpoints;
    for(let value of stateCheck){
      if(value.label === numer.label){
          value.status = !value.status;
          break;
      }
    }
    this.setState({
      checkpoints:stateCheck
    });
    this.props.changeChecklist(stateCheck);
  }

  render(){
    return(
      <Grid>
        <Grid.Row>
          <Grid.Column width={16}>
            <List>
                {this.state.checkpoints.map(checkpoint=>(
                  <List.Item key={checkpoint.label}>
                    <List.Content floated="right">
                      <Label color='blue'>
                        {checkpoint.point} Points
                      </Label>
                    </List.Content>
                    <List.Content>
                      <Checkbox checked={checkpoint.status} onChange={this.toggle} toggle label={checkpoint.label} />
                    </List.Content>
                  </List.Item>
                ))}

            </List>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    );
  }
}

Checklist.propTypes={
    checkpoints: PropTypes.arrayOf(PropTypes.shape({
      point: PropTypes.number,
      status: PropTypes.bool,
      label: PropTypes.string
    })),
    changeChecklist: PropTypes.func.isRequired
}
