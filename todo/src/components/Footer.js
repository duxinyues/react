import React from 'react';

import FilterLink from '../containers/FilterLink';
import { VisibilityFilter } from '../actions';

const Footer =()=>(
    <div>
        <span>show:</span>
        <FilterLink filter={VisibilityFilter.SHOW_ALL}>
            ALL
        </FilterLink>
        <FilterLink filter={VisibilityFilter.SHOW_ACTIVE}>
            ACTIVE
        </FilterLink>
        <FilterLink filter={VisibilityFilter.SHOW_COMPLETED}>
            COMPLETED
        </FilterLink>
    </div>
)

export default Footer
