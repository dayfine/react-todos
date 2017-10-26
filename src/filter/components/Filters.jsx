import React from 'react'
import Link from './Link'
import { FilterTypes } from '../../constants'

import './Filters.css'

const Filters = () => {
  return (
    <div className='filters'>
      <Link filter={FilterTypes.ALL}>{FilterTypes.ALL}</Link>
      <Link filter={FilterTypes.COMPLETED}>{FilterTypes.COMPLETED}</Link>
      <Link filter={FilterTypes.UNCOMPLETED}>{FilterTypes.UNCOMPLETED}</Link>
    </div>
  )
}

export default Filters
