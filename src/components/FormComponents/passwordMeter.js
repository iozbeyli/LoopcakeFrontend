import React from 'react';
import {Progress} from 'semantic-ui-react';
import zxcvbn from 'zxcvbn';
import {colors,strings} from '../../constants';
import PropTypes from 'prop-types';

const PasswordMeter = ({password}) => {
    console.log(password);
    let results = zxcvbn(password);
    return (
        <Progress size="tiny" percent={results.score*25} color={colors.passwordColors[results.score]}>
            {strings.passwordStrings[results.score]}
        </Progress>
    );
};

PasswordMeter.propTypes = {
    password: PropTypes.string.isRequired
};

export default PasswordMeter;