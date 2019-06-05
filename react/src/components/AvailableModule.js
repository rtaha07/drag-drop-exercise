import React from 'react';

export default class AvailableModule extends React.Component {
    render() {
        const { slug, name } = this.props;
        const classNames = "available-module module-" + slug;
        return (
            <li className={classNames}>
                <span className="name">{name}</span>
                <img src="img/handle.svg" className="available-module-handle" alt="Drag" />
            </li>
        );
    }
}