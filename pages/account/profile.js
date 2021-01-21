import React from 'react'

const Profile = () => (
    <div className="p-4 shadow-md rounded bg-white">
        <p>This is where you could see your profile!</p>
    </div>
)

Profile.getInitialProps = () => ({
    pageTitle: 'My Profile'
})

export default Profile