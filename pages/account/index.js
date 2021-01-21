import React from 'react'

const Account = () => (
    <div className="p-4 shadow-md rounded bg-white">
        <p>This is the account area! Notice the different navbar layout!</p>
    </div>
)

Account.getInitialProps = () => ({
    pageTitle: 'My Account'
})

export default Account