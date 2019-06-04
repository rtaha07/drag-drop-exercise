import React from 'react';

export default function AvailableModule(props) {
    const { name, slug } = props;
    
    const classNames = "available-module module-" + slug;

    return (
        <li className={classNames}>
            <span className="name">{name}</span>
            <img src="img/handle.svg" className="available-module-handle" alt="Drag" />
        </li>
    );
}