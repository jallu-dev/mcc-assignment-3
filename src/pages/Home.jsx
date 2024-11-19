import "../asserts/css/compo.css";
import Table from "../components/Table.jsx";
import { students } from "../asserts/db/StudentsDb.js";
import Profile from "../components/Profile.jsx";
import { useEffect, useState } from "react";

const Home = () => {
  const [studentId, setStudentId] = useState({});
  const [student, setStudent] = useState({});
  useEffect(() => {
    console.log(studentId);
    let stu = students.filter((student) => student.studentId == studentId);
    setStudent(stu[0]);
    console.log(stu[0]);
  }, [studentId]);

  return (
    <div style={{ display: "flex", padding: "20px" }}>
      <Table students={students} setStudentId={setStudentId} />
      {student && <Profile student={student} />}
    </div>
  );
};

export default Home;
