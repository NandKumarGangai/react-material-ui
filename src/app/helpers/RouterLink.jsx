import React from 'react';
import { Link } from 'react-router-dom';

const defaultStyles = {
    'text-decoration': "none"
}
export default ({ href, styles = defaultStyles, children, ...rest}) => (
    <Link to={href} style={{...styles}} { ...rest }>
        { children }
    </Link>
)