import React from 'react';
import {List,Image,Label,Grid} from 'semantic-ui-react';
import PropTypes from 'prop-types';
export const ListItem = ({icon,image,header,description,buttons,extra}) => (
    <List.Item>
        <List.Content>
            <Grid>
                <Grid.Column width={buttons ? 8 : 16}>
                    <List.Header>
                        {icon ? <List.Icon name={icon}/> : image && <Image avatar src={image} />}{header}
                    </List.Header>
                    {
                        description
                        &&
                        <List.Description>
                            {description}
                        </List.Description>
                    }
                </Grid.Column>
                {
                    buttons
                    &&
                    <Grid.Column textAlign="right" width={8}>
                        {buttons.map(button=>(
                                <Label key={button.title} color="teal" onClick={button.onClick}>
                                    {button.title}
                                </Label>
                        )
                        )
                        }
                    </Grid.Column>
                }
                {extra && <Grid.Column width={16}>
                    {extra}
                </Grid.Column>}
            </Grid>
        </List.Content>
    </List.Item>
);

ListItem.propTypes = {
    icon: PropTypes.string,
    image: PropTypes.string,
    header: PropTypes.string.isRequired,
    description: PropTypes.string,
    buttons: PropTypes.arrayOf(PropTypes.shape({
        title: PropTypes.oneOfType([
            PropTypes.string,
            PropTypes.element
        ]).isRequired,
        onClick: PropTypes.func.isRequired
    })),
    extra: PropTypes.element
};


