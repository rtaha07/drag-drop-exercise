import React from 'react';

function App() {
  return (
    <div className="container">
        <div className="left-column">
            <hgroup>
                <h1 className="course-setup-header">Course Setup</h1>
                <h2>Select modules to build your new course.</h2>
            </hgroup>
            <div className="available-modules">
                <h3 className="available-modules-header">Available Modules</h3>
                <ul className="available-modules-list">
                    <li className="available-module module-figure-drawing">
                        <span className="name">Figure Drawing</span>
                        <img src="img/handle.svg" className="available-module-handle" />
                    </li>
                    <li className="available-module module-3d-rendering">
                        <span className="name">3D Rendering</span>
                        <img src="img/handle.svg" className="available-module-handle" />
                    </li>
                    <li className="available-module module-art-education">
                        <span className="name">Art Education</span>
                        <img src="img/handle.svg" className="available-module-handle" />
                    </li>
                    <li className="available-module module-art-history">
                        <span className="name">Art History</span>
                        <img src="img/handle.svg" className="available-module-handle" />
                    </li>
                </ul>
            </div>
        </div>
        <div className="right-column">
            <button className="btn btn-save-course">Save Course</button>
            <div className="field field-course-name">
                <label for="field-course-name">Course Name</label>
                <input type="text" id="field-course-name" placeholder="Add Course Name Here" />
            </div>
            <ul className="included-modules">
                <li className="included-module module-basics-of-pottery">
                    <p className="module-number">Module 1</p>
                    <h2 className="module-name">Learning the basics of pottery</h2>
                    <div className="exercises">
                        <img src="img/decrement.svg" className="decrement" />
                        <span className="exercise-count">4</span>
                        <img src="img/increment.svg" className="increment" />
                        exercises
                    </div>
                    <img src="img/handle.svg" className="included-module-handle" />
                </li>

                <li className="included-module module-still-life-drawing">
                    <p className="module-number">Module 2</p>
                    <h2 className="module-name">Still-life Drawing</h2>
                    <div className="exercises">
                        <img src="img/decrement.svg" className="decrement" />
                        <span className="exercise-count">2</span>
                        <img src="img/increment.svg" className="increment" />
                        exercises
                    </div>
                    <img src="img/handle.svg" className="included-module-handle" />
                </li>

                <li className="included-module module-painting-101">
                    <p className="module-number">Module 3</p>
                    <h2 className="module-name">Painting 101</h2>
                    <div className="exercises">
                        <img src="img/decrement.svg" className="decrement" />
                        <span className="exercise-count">4</span>
                        <img src="img/increment.svg" className="increment" />
                        exercises
                    </div>
                    <img src="img/handle.svg" className="included-module-handle" />
                </li>
            </ul>
        </div>

        <div className="overlay" style={{display: 'none'}}>
            <img src="img/check.svg" className="overlay-checkmark" />
            <span className="overlay-text">Course Saved</span>
        </div>
    </div>
  );
}

export default App;
