/* eslint react/prop-types: 0 */
import { Component } from 'react';
import { FormattedRelative, injectIntl } from 'react-intl';
import Tooltip from 'app/components/elements/Tooltip';

class ContentEditedWrapper extends Component {
    render() {
        let { createDate, updateDate, className } = this.props;
        if (createDate === updateDate) return null;

        if (updateDate && /^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d$/.test(updateDate)) {
            updateDate = updateDate + 'Z'; // Firefox really wants this Z (Zulu)
        }
        const dt = new Date(updateDate);
        const date_time = `${this.props.intl.formatDate(
            dt
        )} ${this.props.intl.formatTime(dt)}`;
        return (
            <Tooltip t={date_time} className={className}>
                (edited)
            </Tooltip>
        );
    }
}

export default injectIntl(ContentEditedWrapper);
