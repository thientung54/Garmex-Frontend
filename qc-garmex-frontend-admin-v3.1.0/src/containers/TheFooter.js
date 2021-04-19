import React from 'react'
import { CFooter } from '@coreui/react'

const TheFooter = () => {
  return (
    <CFooter fixed={false}>
      <div>
        <a href="https://coreui.io" target="_blank" rel="noopener noreferrer">CoreUI</a>
        <span className="ml-1">&copy; 2020</span>
      </div>
      <div className="mfs-auto">
        <span className="mr-1">Made by</span>
        <a href="https://wetech-global.com/" target="_blank" rel="noopener noreferrer">WeTech Global</a>
      </div>
    </CFooter>
  )
}

export default React.memo(TheFooter)
