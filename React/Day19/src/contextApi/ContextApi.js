import React from 'react'
import { ExpenseProvider } from '../expense-context'
import AddEntry from './AddEntry'
import Entries from './Entries'
import Progress from './Progress'
import Summary from './Summary'
import TotalBalance from './TotalBalance'

const ContextApi = () => {
  return (
    <ExpenseProvider>
    <div className='container'>
        <TotalBalance />
        <Summary />
        <Progress />
        <AddEntry/>
        <Entries/>
    </div>
    </ExpenseProvider>

  )
}

export default ContextApi