import React from 'react';

/**
 * @author
 * @function Layout
 **/

const Layout = (props) => {
    return (
        <div>
            Header
            {props.children}
        </div>
    );
};

export default Layout;
