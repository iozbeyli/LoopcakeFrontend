import {Types} from '../actions';

const INITIAL_STATE = {};

export default (state=INITIAL_STATE, action) => {
	console.log("course reducer");
	console.log(action);
    switch (action.type) {

        case Types.COURSE_SUMMARY:
            return {...state, [action.course.course._id]: action.course};
        default:
            return state;
    }
}
