import PageHeader from '../../components/ui/PageHeader.jsx'
export default function ExamSchedule(){
  return <><PageHeader title="Exam Schedule" trail={["Home","Exams","Schedule"]} />
  <div className="bg-white p-6 rounded-xl shadow">Planner for dates, subjects, rooms.</div></>
}