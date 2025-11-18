import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import PageHeader from '../../components/ui/PageHeader.jsx'
import AppSelect from '../../components/ui/AppSelect.jsx'
import AppButton from '../../components/ui/AppButton.jsx'
import AppDataGrid from '../../components/ui/AppDataGrid.jsx'
import { fetchTeachers, fetchAllocations, addAllocation, deleteAllocation } from '../../store/slices/teachersSlice.js'

export default function TeacherAllocation(){
  const dispatch = useDispatch()
  const { list:teachers, allocations, allocLoading } = useSelector(s=>s.teachers)
  const [form, setForm] = useState({ teacherId:'', className:'', section:'', subject:'' })

  useEffect(()=>{ dispatch(fetchTeachers()); dispatch(fetchAllocations()) },[dispatch])

  const teacherOptions = teachers.map(t=>({ value:t.id, label:t.name }))
  const classOptions = ['10','9','8','7','6'].map(x=>({value:x,label:x}))
  const sectionOptions = ['A','B','C'].map(x=>({value:x,label:x}))
  const subjectOptions = ['Math','English','Physics','Chemistry','Biology','Computer'].map(x=>({value:x,label:x}))

  const submit=(e)=>{ e.preventDefault(); if(!form.teacherId) return; dispatch(addAllocation(form)) }

  const rows = allocations.map(a=> ({...a, teacherName: teachers.find(t=>t.id===a.teacherId)?.name || '—'}))
  const columns = [
    { field:'teacherName', headerName:'Teacher', flex:1.4 },
    { field:'className', headerName:'Class', flex:1 },
    { field:'section', headerName:'Section', flex:1 },
    { field:'subject', headerName:'Subject', flex:1 },
    { field:'actions', headerName:'Actions', sortable:false, filterable:false, renderCell:(p)=> (
      <AppButton size="small" color="error" onClick={()=>dispatch(deleteAllocation(p.row.id))}>Delete</AppButton>
    )}
  ]

  return (
    <>
      <PageHeader title="Teacher Allocation" trail={["Home","Teachers","Allocation"]} />
      <form onSubmit={submit} className="bg-white p-4 rounded-xl shadow mb-4 grid gap-3 md:grid-cols-4">
        <AppSelect label="Teacher" value={form.teacherId} onChange={e=>setForm({...form,teacherId:e.target.value})} options={teacherOptions} />
        <AppSelect label="Class" value={form.className} onChange={e=>setForm({...form,className:e.target.value})} options={classOptions} />
        <AppSelect label="Section" value={form.section} onChange={e=>setForm({...form,section:e.target.value})} options={sectionOptions} />
        <AppSelect label="Subject" value={form.subject} onChange={e=>setForm({...form,subject:e.target.value})} options={subjectOptions} />
        <div className="md:col-span-4 flex justify-end"><AppButton type="submit">Assign</AppButton></div>
      </form>

      <AppDataGrid rows={rows} columns={columns} loading={allocLoading} getRowId={(r)=>r.id} />
    </>
  )
}