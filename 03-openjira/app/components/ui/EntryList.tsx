import { List, Paper } from '@mui/material'
import EntryCard from './EntryCard'

const EntryList = () => {
  return (
    // TODO: aqui haremos drop
    <div>
      <Paper sx={{ height: 'calc(100vh - 150px)', overflowY: 'auto', backgroundColor: 'transparent', padding: '1px 5px' }}>
        <List sx={{ opacity: 1 }}>
         <EntryCard />
         <EntryCard />
         <EntryCard />
         <EntryCard />
         <EntryCard />
        </List>
      </Paper>
    </div>
  )
}

export default EntryList