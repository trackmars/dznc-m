import React from 'react';



const Section = (props) => {
    return (
        <div className="section" style={{minHeight: '500px', verticalAlign: 'mid'}}>
            {props.children}
        </div>
    )
}

export default Section;