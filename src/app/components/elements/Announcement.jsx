import PropTypes from 'prop-types';

export const Announcement = ({ onClose }) => (
    <div className="annoucement-banner">
        <p className="announcement-banner__text">
            {/* #NewSteem is live. More{' '} */}
            {/* <a */}
            {/*    className="announcement-banner__link" */}
            {/*    href="https://blurt.world/hf22/@steemitblog/hardfork-22-live" */}
            {/* > */}
            {/*    here. */}
            {/* </a> */}
        </p>
        <button className="close-button" type="button" onClick={onClose}>
            &times;
        </button>
    </div>
);

Announcement.propTypes = {
    onClose: PropTypes.func.isRequired,
};

export default Announcement;
