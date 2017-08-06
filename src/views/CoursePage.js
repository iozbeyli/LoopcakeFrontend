import React from 'react';
import {StudentCard} from "../components/CourseComponents/StudentCard";
import {Link} from 'react-router-dom';
import {Progress,Grid} from 'semantic-ui-react';
import {ProjectCard} from "../components/CourseComponents/ProjectCard";
import {DetailsCard} from "../components/CourseComponents/detailsCard";
import ProfileCard from '../components/CourseComponents/profileCard';
import AnnouncementCard from "../components/AnnouncementComponents/announcementCard";
import {AttachmentCard} from "../components/AttachmentComponents/attachmentCard";
import ChecklistCard from '../components/ChecklistComponents/checklistCard';
import PropTypes from 'prop-types';

class CoursePage extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        const studentList = [
            {
                image:'',
                header: 'İsmet Melih Özbeyli',
            },
            {
                image:'',
                header: 'Mehmet Berk Gürçay'
            }
        ];
        const projectList = [
            {
                name: 'Rubic Cube',
                progressPercent: 25
            },
            {
                name: 'Texture Mapping',
               progressPercent: 12
            }
        ];
        const announcementList = [
            {title: "Loopcake",date:"Yesterday",content:"Awesome"},
            {title: "Loopcak",date:"Yesterday",content:"Awesome"},
            {title: "Loopca",date:"Yesterday",content:"Awesome"}
        ];

        const details = {
            programmingLanguages: ['C++','C','C#'],
            year: 2012,
            term: 'Fall',
            name: 'Computer Graphics',
            abbreviation: 'Comp 410',
            department: 'Computer Engineering',
            assistants: [
                {
                    image:'',
                    name: 'Yahya',
                    surname:' Hassanzadeh'
                },
                {
                    image:'',
                    name: 'Leila',
                    surname:' Basri'
                },
                ],



        };
        const attachments = [
            {
                fileType: 'pdf',
                name: 'Lecture 1'
            },
            {
                fileType: '',
                name: 'Lectures'
            }
        ];

        const folders = [
            {
                name: 'Lecture Slides',
                attachments: attachments
            },
            {
                name: 'Slides',
                attachments: attachments
            }
            ];
        return(
        <Grid>
            <Grid.Column width={12}>
                <AnnouncementCard announcements={this.props.data.announcements} editable/>
                <ProjectCard items={this.props.data.projects}/>
                <AttachmentCard hidable attachments={attachments} folders={folders} />
            </Grid.Column>
            <Grid.Column width={4}>
                <ProfileCard course={this.props.data.course}/>
                <DetailsCard {...details}/>
                <StudentCard hidable students={this.props.data.course.students}/>
            </Grid.Column>
        </Grid>


        );
    }
}

CoursePage.propTypes={
	data: PropTypes.shape({
		announcements: PropTypes.array,
		calender: PropTypes.array,
		course: PropTypes.object,
		grades: PropTypes.array,
		myGroups: PropTypes.array,
		projects: PropTypes.array
	})
};

export default CoursePage;

