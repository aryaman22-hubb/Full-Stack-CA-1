import React from 'react' ;

const TestimonialCard = ({name,Review_text}) => {

    return (
        <div>
            <h3>Customer name : {name}</h3>
            <h4>Reiview Text : {Review_text}</h4>
        </div>
    )
}

export default TestimonialCard;
