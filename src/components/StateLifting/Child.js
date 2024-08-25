import React from 'react';

const Child = (props) => {
    const data = 'I am from child components';
    props.onChildData(data);
    return (
        <div>
            <h1>i am child</h1>
        </div>
    );
};

export default Child;