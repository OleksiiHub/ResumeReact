import { useState } from 'react';

export function Counter() {
    const [count, setCount] = useState(0);

    return (
        <div className = 'center'>
            <button onClick={() => setCount(count - 1)}>-1</button>
            <p> ~~~ {count} ~~~ </p>
            <button onClick={() => setCount(count + 1)}>+1</button>
        </div>
    );
}