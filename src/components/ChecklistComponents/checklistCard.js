import React from 'react';
import Checklist from './checklist';
import Card from '../CardComponents/card';
import {Grid,Progress} from 'semantic-ui-react';
export default class ChecklistCard extends React.Component{
  constructor(props){
    super(props);
  }

  render(){
    return(
      <Card
          title="Checklist"
          content={
            <Grid>
              <Grid.Column width={16}>
                <Progress percent={55} size="small" color="yellow"/>
                  <Checklist checkpoints={[{point: 10,status:true,label:"Naber"},{point: 30,status:false,label:"fas"}]}/>
              </Grid.Column>
            </Grid>

          }
      />

    );
  }
}
