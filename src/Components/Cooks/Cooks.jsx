import React from 'react';

const Cooks = ({cooks}) => {
    return (
        <div className="md:w-1/3">
            <h2 className="text-center text-2xl text-slate-950 font-bold">Want To Cook: {cooks}</h2>
        </div>
    );
};

export default Cooks;