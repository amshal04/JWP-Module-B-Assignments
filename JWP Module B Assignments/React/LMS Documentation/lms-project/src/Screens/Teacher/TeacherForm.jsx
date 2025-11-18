import { useState, useEffect } from 'react'
import { Card, CardContent, Grid } from '@mui/material'
import PageHeader from '../../components/ui/PageHeader.jsx'
import AppInput from '../../components/ui/AppInput.jsx'
import AppSelect from '../../components/ui/AppSelect.jsx'
import AppButton from '../../components/ui/AppButton.jsx'
import { useDispatch, useSelector } from 'react-redux'
import { addTeacher, updateTeacher } from '../../store/slices/teachersSlice.js'
import { useNavigate, useParams } from 'react-router-dom'

export default function TeacherForm(){
  const nav = useNavigate(); const params = useParams();
  const editingId = params.id
  const dispatch = useDispatch();
  const { list } = useSelector(s=>s.teachers)
  const editing = list.find(x=>x.id===editingId)

  const [form,setForm] = useState(editing || { name:'', email:'', phone:'', subjectSpecialty:'', joiningDate:'' })
  useEffect(()=>{ if(editing) setForm(editing) }, [editing])

  const submit=(e)=>{
    e.preventDefault()
    if(editingId){ dispatch(updateTeacher(form)) } else { dispatch(addTeacher(form)) }
    nav('/teachers')
  }

  return (
    <>
      <PageHeader title={editingId? 'Edit Teacher':'Add Teacher'} trail={["Home","Teachers",editingId? 'Edit':'Add']} />
      <Card>
        <CardContent>
          <form onSubmit={submit}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}><AppInput label="Full Name" value={form.name} onChange={e=>setForm({...form,name:e.target.value})} /></Grid>
              <Grid item xs={12} sm={6}><AppInput label="Email" value={form.email} onChange={e=>setForm({...form,email:e.target.value})} /></Grid>
              <Grid item xs={12} sm={6}><AppInput label="Phone" value={form.phone} onChange={e=>setForm({...form,phone:e.target.value})} /></Grid>
              <Grid item xs={12} sm={6}><AppSelect label="Subject Specialty" value={form.subjectSpecialty} onChange={e=>setForm({...form,subjectSpecialty:e.target.value})} options={["Math","English","Physics","Chemistry","Biology","Computer"].map(x=>({value:x,label:x}))} /></Grid>
              <Grid item xs={12} sm={6}><AppInput label="Joining Date" type="date" InputLabelProps={{shrink:true}} value={form.joiningDate} onChange={e=>setForm({...form,joiningDate:e.target.value})} /></Grid>
            </Grid>
            <div className="flex justify-end mt-4 space-x-2">
              <AppButton type="button" color="inherit" onClick={()=>nav(-1)}>Cancel</AppButton>
              <AppButton type="submit">{editingId? 'Update':'Create'}</AppButton>
            </div>
          </form>
        </CardContent>
      </Card>
    </>
  )
}
