import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import PageHeader from '../../components/ui/PageHeader.jsx'
import AppButton from '../../components/ui/AppButton.jsx'
import AppDataGrid from '../../components/ui/AppDataGrid.jsx'
import { fetchStudents, deleteStudent } from '../../store/slices/studentsSlice.js'
import { useNavigate } from 'react-router-dom'

export default function StudentList(){
  const dispatch = useDispatch()
  const nav = useNavigate()
  const { list, loading } = useSelector(s=>s.students)
  useEffect(()=>{ dispatch(fetchStudents()) }, [dispatch])

  const columns = [
    { field:'rollNo', headerName:'Roll #', flex: 1 },
    { field:'name', headerName:'Name', flex: 1.5 },
    { field:'className', headerName:'Class', flex: 1 },
    { field:'section', headerName:'Section', flex: 1 },
    { field:'phone', headerName:'Phone', flex: 1 },
    { field:'actions', headerName:'Actions', sortable:false, filterable:false, renderCell:(p)=> (
      <div className="space-x-2">
        <AppButton size="small" onClick={()=> nav(`/students/edit/${p.row.id}`)}>Edit</AppButton>
        <AppButton size="small" color="error" onClick={()=> dispatch(deleteStudent(p.row.id))}>Delete</AppButton>
      </div>
    )}
  ]

  return (
    <>
      <PageHeader title="Students" trail={["Home","Students","List"]} />
      <div className="flex justify-end mb-3"><AppButton onClick={()=>nav('/students/add')}>Add Student</AppButton></div>
      <AppDataGrid rows={list} columns={columns} loading={loading} getRowId={(r)=>r.id} />
    </>
  )
}
