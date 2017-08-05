import React from 'react';
import {Card,Grid,Image} from 'semantic-ui-react';
import {placeholders} from '../../constants';
import PropTypes from 'prop-types';


export default class CourseHeader extends React.Component{

    _getHeader() {
		console.log("Props ", this.props);
		if (this.props.course) {
			console.log("Datum: ", this.props.course.name);
			const course = this.props.course
			return course.name
		}
    }

    _getDetail() {
		if (this.props.course) {
            const course = this.props.course
            console.log("C ", course);
            let str = "";
            for (let i = 0; i < course.instructors.length; ++i) {
                let ins = course.instructors[i];
                str += ins.name + " " + ins.surname;
                if (i!=course.instructors.length) {
                    str += "\n";
                }
            }
			return str;
		}
    }

    _getAbv() {
		if (this.props.course) {
			const course = this.props.course;
			return course.abbreviation + " " + course.code;
		}
    }

    
    render() {
        return (<Grid>
        			<Grid.Column width={5}>
          				<Image shape="circular" src={placeholders.instructorPhoto} />
        			</Grid.Column>
        			<Grid.Column width={11}>
          				<Card.Header>
        					{this._getHeader()}
      					</Card.Header>
      					<Card.Meta>
        					<span className='date'>
          						{this._getAbv()}
        					</span>
      					</Card.Meta>
      					<Card.Description>
        					{this._getDetail()}
      					</Card.Description>
        			</Grid.Column>
      			</Grid>);
    }
}

CourseHeader.propTypes = {
    course: PropTypes.shape({
			_id: PropTypes.string,
			name: PropTypes.string,
			abbreviation: PropTypes.string,
			code: PropTypes.string,
			details: PropTypes.shape({
				year: PropTypes.string,
				_id: PropTypes.string,
				relatedCourses: PropTypes.array,
				programmingLanguages: PropTypes.array,
				sections: PropTypes.array
			}),
			attachments: PropTypes.array,
			instructors: PropTypes.arrayOf(PropTypes.shape(
				{
					_id: PropTypes.string,
					email: PropTypes.string,
					name: PropTypes.string,
					surname: PropTypes.string,
					photo: PropTypes.string
				}
			))
		}),
    }