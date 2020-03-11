import React from 'react';
import TopNavbar from '../components/TopNavbar';

function signIn() {
    return (
        <div className="background">
            <TopNavbar
                nextPage="/signup"
                pageName="Signup"
            />

            {/* Signin form should be implemented in here */}


        </div>

    )
}

export default signIn;
