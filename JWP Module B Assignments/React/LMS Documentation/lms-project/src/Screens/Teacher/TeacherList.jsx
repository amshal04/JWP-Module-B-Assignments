import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import PageHeader from '../../components/ui/PageHeader.jsx'
import AppButton from '../../components/ui/AppButton.jsx'
import AppDataGrid from '../../components/ui/AppDataGrid.jsx'
import { fetchTeachers, deleteTeacher } from '../../store/slices/teachersSlice.js'
import { useNavigate } from 'react-router-dom'

export default function TeacherList(){
  const dispatch = useDispatch()
  const nav = useNavigate()
  const { list, loading } = useSelector(s=>s.teachers)
  useEffect(()=>{ dispatch(fetchTeachers()) },[dispatch])

  const columns = [
    { field:'name', headerName:'Name', flex:1.4 },
    { field:'email', headerName:'Email', flex:1.6 },
    { field:'phone', headerName:'Phone', flex:1 },
    { field:'subjectSpecialty', headerName:'Specialty', flex:1 },
    { field:'joiningDate', headerName:'Joining', flex:1 },
    { field:'actions', headerName:'Actions', sortable:false, filterable:false, renderCell:(p)=> (
      <div className="space-x-2">
        <AppButton size="small" onClick={()=> nav(`/teachers/edit/${p.row.id}`)}>Edit</AppButton>
        <AppButton size="small" color="error" onClick={()=> dispatch(deleteTeacher(p.row.id))}>Delete</AppButton>
      </div>
    )}
  ]

  return (
    <>
      <PageHeader title="Teachers" trail={["Home","Teachers","List"]} />
      <div className="flex justify-end mb-3 space-x-2">
        <AppButton onClick={()=>nav('/teachers/allocate')} variant="outlined">Allocation</AppButton>
        <AppButton onClick={()=>nav('/teachers/add')}>Add Teacher</AppButton>
      </div>
      <AppDataGrid rows={list} columns={columns} loading={loading} getRowId={(r)=>r.id} />
    </>
  )
}
