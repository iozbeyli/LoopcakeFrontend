import React from 'react';
import {Checkbox,Icon,Grid,List,Label} from 'semantic-ui-react'
import PropTypes from 'prop-types';

export default class Checklist extends React.Component{
  constructor(props){
      super(props);
      this.state = {
        checkpoints: this.props.checkpoints
      }
  }

  toggle = (e,numer,fa) => {
    console.log(e);
    console.log(numer);
    console.log(fa);
  }

  render(){
    return(
      <Grid>
        <Grid.Row>
          <Grid.Column width={16}>
            <List>
                {this.props.checkpoints.map(checkpoint=>(
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
    checkpoints: PropTypes.arrayOf({
      point: PropTypes.number,
      status: PropTypes.bool,
      label: PropTypes.string
    })
}
