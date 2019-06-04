import React from 'react';

export default function CourseSavedOverlay(props) {
    const { visible } = props;
    const classNames = visible ? "overlay" : "overlay hidden";

    return (
        <div className={classNames}>
            <img src="img/check.svg" className="overlay-checkmark" alt="Check mark" />
            <span className="overlay-text">Course Saved</span>
        </div>
    );
}