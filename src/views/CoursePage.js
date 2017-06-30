import React from 'react';
import {StudentCard} from "../components/CourseComponents/StudentCard";
import {Link} from 'react-router-dom';
import {Progress} from 'semantic-ui-react';
import {ProjectCard} from "../components/CourseComponents/ProjectCard";
import {DetailsCard} from "../components/CourseComponents/detailsCard";
import AnnouncementCard from "../components/AnnouncementComponents/announcementCard";
import {AttachmentCard} from "../components/AttachmentComponents/attachmentCard";
import ChecklistCard from '../components/ChecklistComponents/checklistCard';
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
                header: 'Rubic Cube',
                progressPercent: 25
            },
            {
                header: 'Texture Mapping',
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
                    header: 'Yahya Hassanzadeh'
                },
                {
                    image:'',
                    header: 'Leila Basri'
                }
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
        <div>
            <ChecklistCard/>
            <AttachmentCard attachments={attachments} folders={folders} />
            <DetailsCard {...details}/>
            <AnnouncementCard announcements={announcementList} editable/>
            <ProjectCard items={projectList}/>
            <StudentCard items={studentList}/>

        </div>


        );
    }
}

export default CoursePage;
