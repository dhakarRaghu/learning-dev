import React from 'react';

export default function({children}: {
    children: React.ReactNode;
}){
    return (
        <div>
            <div className="border-b p-4">
                signin page 
            </div>
            {children}
        </div>
    );
}