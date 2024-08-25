import React, { useState } from 'react';

const EventBinding = () => {
    // const [count, setCount] = useState(0)
    // const handelIncrement = () => {
    //     setCount(coun => coun + 1);
    // }

    const handelChild = (event) => {
        console.log('child event: ', event);
    }

    return (
        <div>
            <h1>Welcome everyone</h1>
            <button onClick={handelChild}>Incerement</button>
        </div>
    );
};

export default EventBinding;