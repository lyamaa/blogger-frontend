import React from 'react';
import Header from './header'

const Layout = ({children}) => {
    return (
        <React.Fragment>
            <Header />
            {children}
            <p>Footer</p>
        </React.Fragment>
    )
}

export default Layout