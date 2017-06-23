import React from 'react';
import Card from '../CardComponents/card';
import PropTypes from 'prop-types';
import {Header,Grid,Label} from 'semantic-ui-react'
import List from "../ListComponents/list";
import {UserList} from '../UserComponents/userList';
const _Header = ({title}) => (
    <Grid.Column textAlign="center" width={16}>
        <Header as="h3">
            {title}
        </Header>
    </Grid.Column>
    );

export const DetailsCard = (props) => (
    <Card
        title="Details"
        content={
        <Grid>
            <Grid.Column width={16}>
                <Grid.Row textAlign="center">
                    <Header>
                        {props.name}
                        <Header.Subheader>
                            {props.abbreviation}
                        </Header.Subheader>
                        <Header.Subheader>
                            {props.term} {props.year}
                        </Header.Subheader>
                    </Header>
                </Grid.Row>
                <br/>
                <Grid.Row>
                        <_Header title="Programming Languages"/>
                        {props.programmingLanguages.map((lang) => (
                                <Label color="yellow" key={lang}>{lang}</Label>
                            )
                        )}
                </Grid.Row>
                <br/>
                <Grid.Row>
                    <_Header title="Assistants"/>
                    <UserList items={props.assistants}/>
                </Grid.Row>
            </Grid.Column>
        </Grid>
    }/>
);

DetailsCard.propTypes = {
    programmingLanguages: PropTypes.arrayOf(PropTypes.string),
    year: PropTypes.number,
    term: PropTypes.string,
    name: PropTypes.string.isRequired,
    abbreviation: PropTypes.string.isRequired,
    department: PropTypes.string,
    assistants: PropTypes.arrayOf(PropTypes.shape({
            image: PropTypes.string.isRequired,
            header: PropTypes.string.isRequired
    }
    )),
    syllabus: PropTypes.string
};

