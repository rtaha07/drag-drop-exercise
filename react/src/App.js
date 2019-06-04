import React from 'react';
import AvailableModule from './components/AvailableModule';
import CourseSavedOverlay from './components/CourseSavedOverlay';
import IncludedModule from './components/IncludedModule';

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
                    <AvailableModule slug="figure-drawing" name="Figure Drawing" />
                    <AvailableModule slug="3d-rendering" name="3D Rendering" />
                    <AvailableModule slug="art-education" name="Art Education" />
                    <AvailableModule slug="art-history" name="Art History" />
                </ul>
            </div>
        </div>
        <div className="right-column">
            <button className="btn btn-save-course">Save Course</button>
            <div className="field field-course-name">
                <label htmlFor="field-course-name">Course Name</label>
                <input type="text" id="field-course-name" placeholder="Add Course Name Here" />
            </div>
            <ul className="included-modules">
                <IncludedModule 
                  slug="basics-of-pottery" 
                  name="Learning the basics of pottery" 
                  position={1} 
                  exercises={4} 
                />

                <IncludedModule 
                  slug="still-life-drawing" 
                  name="Still-life Drawing" 
                  position={2} 
                  exercises={2} 
                />

                <IncludedModule 
                  slug="painting-101" 
                  name="Painting 101" 
                  position={3} 
                  exercises={4} 
                />
            </ul>
        </div>

        <CourseSavedOverlay visible={false} />
    </div>
  );
}

export default App;
