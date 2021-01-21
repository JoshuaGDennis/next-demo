import React from 'react'
import "../styles/global.css"
import SiteLayout from "../layouts/SiteLayout"
import AccountLayout from "../layouts/AccountLayout"
import NotFoundLayout from "../layouts/NotFoundLayout"


function MyApp({ Component, pageProps, router }) {

    const formatPath = () => {
        const stripped = router.asPath.replace(/[\/]/g, "").replace(/[-]/g, " ")
        return `${stripped.charAt(0).toUpperCase()}${stripped.slice(1)}`
    }

    const pageTitle = pageProps.pageTitle || formatPath()

    if(router.pathname === "/404") {
        return <NotFoundLayout />
    }

    if(router.pathname.startsWith('/account')) {
        return (
            <AccountLayout title={pageTitle}>
                <Component {...pageProps} />
            </AccountLayout>
        )
    }

    return (
        <SiteLayout title={pageTitle}>
            <Component {...pageProps} />
        </SiteLayout>
    )
}

export default MyApp