import React from 'react'

const Settings = () => (
    <div className="p-4 shadow-md rounded bg-white">
        <p>This is where you could change your account settings!</p>
    </div>
)

Settings.getInitialProps = () => ({
    pageTitle: 'My Account settings'
})

export default Settings