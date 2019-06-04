import React from 'react';

export default function IncludedModule(props) {
    const { name, slug, position, exercises } = props;
    const classNames = "included-module module-" + slug;

    return (
        <li className={classNames}>
            <p className="module-number">Module {position}</p>
            <h2 className="module-name">{name}</h2>
            <div className="exercises">
                <img src="img/decrement.svg" className="decrement" alt="Decrement" />
                <span className="exercise-count">{exercises}</span>
                <img src="img/increment.svg" className="increment" alt="Increment" />
                exercises
            </div>
            <img src="img/handle.svg" className="included-module-handle" alt="Drag" />
        </li>
    )
}