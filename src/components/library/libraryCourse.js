import React, { Component } from 'react';

class LibraryCourse extends Component {
    render() {
        return(
            <div className="library-course">
                <label className="library-course__title">Problem Solving</label>
                {/* icon component */}
                {/* arrow component */}
                {/* action button component */}
                <div className="library-course__description">
                    <label>Course Description</label>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam yo no se y todo se que te bote. Cuando yo estoy haciendo el desarrollo de software yo estoy muy feliz.</p>
                </div>
            </div>
        )
    }
}
export default LibraryCourse;