import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

const BreadCrumb = ({items}) =>
    <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
            {
                items.map((item, cnt) =>
                    <li className={`breadcrumb-item ${item.active && 'active'}`} key={cnt}>
                        { item.link ?
                            <NavLink to={item.link}>{item.name}</NavLink> :
                            item.name
                        }
                    </li>
                )
            }
        </ol>
    </nav>
;

BreadCrumb.propTypes = {
    items : PropTypes.arrayOf(
        PropTypes.shape({
            name : PropTypes.string.isRequired,
            link : PropTypes.string,
            active : PropTypes.bool
        })
    ).isRequired
};

export default BreadCrumb;