import { AppBar, Toolbar, Typography, IconButton, Drawer, List, ListItemButton, ListItemText } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'
import SchoolIcon from '@mui/icons-material/School'
import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

const links = [
  { to:'/dashboard', label:'Dashboard' },
  { to:'/students', label:'Students' },
  { to:'/teachers', label:'Teachers' },
  { to:'/subjects', label:'Subjects' },
  { to:'/classes', label:'Classes' },
  { to:'/syllabus', label:'Syllabus' },
  { to:'/fees', label:'Fees' },
  { to:'/admissions', label:'Admission' },
  { to:'/exams', label:'Exams' },
]

export default function DashboardLayout({ children }){
  const [open,setOpen] = useState(false)
  const { pathname } = useLocation()
  return (
    <div className="min-h-screen bg-gray-50">
      <AppBar position="sticky" color="primary">
        <Toolbar>
          <IconButton color="inherit" edge="start" onClick={()=>setOpen(true)}><MenuIcon/></IconButton>
          <SchoolIcon className="ml-2"/>
          <Typography variant="h6" className="ml-3">LMS</Typography>
        </Toolbar>
      </AppBar>

      <Drawer open={open} onClose={()=>setOpen(false)}>
        <div className="w-64">
          <List>
            {links.map(l=> (
              <ListItemButton key={l.to} component={Link} to={l.to} selected={pathname===l.to} onClick={()=>setOpen(false)}>
                <ListItemText primary={l.label} />
              </ListItemButton>
            ))}
          </List>
        </div>
      </Drawer>

      <main className="max-w-6xl mx-auto p-4 md:p-6">{children}</main>
    </div>
  )
}