import React, {Component} from 'React'
import Card from '../CardComponents/card';
import List from '../ListComponents/list';

export default class GradeCard extends Component{
    
    static placeholder = [
        {header: 'Midterm 2', description: '90.0/200.0', icon: 'student'}
    ]
    _renderList() {
        return (
            <List items={GradeCard.placeholder}/>
        )
    }

    render() {
        return (
            <Card
                hidable={this.props.hidable}
                title="Grades"
                content={this._renderList()}
            />
        )
    }
}