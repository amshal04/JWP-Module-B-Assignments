import { useState, useEffect } from 'react'
import { Card, CardContent, Grid } from '@mui/material'
import PageHeader from '../../components/ui/PageHeader.jsx'
import AppInput from '../../components/ui/AppInput.jsx'
import AppSelect from '../../components/ui/AppSelect.jsx'
import AppButton from '../../components/ui/AppButton.jsx'
import { useDispatch, useSelector } from 'react-redux'
import { addStudent, updateStudent } from '../../store/slices/studentsSlice.js'
import { useNavigate, useParams } from 'react-router-dom'

export default function StudentForm(){
  const nav = useNavigate(); const params = useParams();
  const editingId = params.id
  const dispatch = useDispatch();
  const { list } = useSelector(s=>s.students)
  const editing = list.find(x=>x.id===editingId)

  const [form,setForm] = useState(editing || { rollNo:'', name:'', className:'', section:'', phone:'', dob:'', address:'' })

  useEffect(()=>{ if(editing) setForm(editing) }, [editing])

  const submit= (e)=>{
    e.preventDefault()
    if(editingId){ dispatch(updateStudent(form)) } else { dispatch(addStudent(form)) }
    nav('/students')
  }

  return (
    <>
      <PageHeader title={editingId? 'Edit Student':'Add Student'} trail={["Home","Students",editingId? 'Edit':'Add']} />
      <Card>
        <CardContent>
          <form onSubmit={submit}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}><AppInput label="Roll #" value={form.rollNo} onChange={e=>setForm({...form,rollNo:e.target.value})} /></Grid>
              <Grid item xs={12} sm={6}><AppInput label="Name" value={form.name} onChange={e=>setForm({...form,name:e.target.value})} /></Grid>
              <Grid item xs={12} sm={6}><AppSelect label="Class" value={form.className} onChange={e=>setForm({...form,className:e.target.value})} options={[{value:'10',label:'10'},{value:'9',label:'9'},{value:'8',label:'8'}]} /></Grid>
              <Grid item xs={12} sm={6}><AppSelect label="Section" value={form.section} onChange={e=>setForm({...form,section:e.target.value})} options={[{value:'A',label:'A'},{value:'B',label:'B'}]} /></Grid>
              <Grid item xs={12} sm={6}><AppInput label="Phone" value={form.phone} onChange={e=>setForm({...form,phone:e.target.value})} /></Grid>
              <Grid item xs={12} sm={6}><AppInput label="DOB" type="date" InputLabelProps={{shrink:true}} value={form.dob} onChange={e=>setForm({...form,dob:e.target.value})} /></Grid>
              <Grid item xs={12}><AppInput label="Address" value={form.address} onChange={e=>setForm({...form,address:e.target.value})} /></Grid>
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