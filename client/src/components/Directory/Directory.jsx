import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import './Directory.scss';
import MenuItem from '../MenuItem/MenuItem';
import { selectDirectorySections } from '../../redux/directory/directorySelectors';

const Directory = ({ sections }) => {
    return (
        <div className="directory-menu">
            {sections.map(({ id, ...props }) => (
                <MenuItem key={id} {...props} />
            ))}
        </div>
    );
};

const mapStateToProps = createStructuredSelector({
    sections: selectDirectorySections
});

export default connect(mapStateToProps)(Directory);