import React from 'react';

const Link = ({route}) => {
    return (
        <div>
            <li key={route.id}><a href={route.path}>{route.name}</a></li>
        </div>
    );
};

export default Link;