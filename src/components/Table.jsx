const Table = ({ students, setStudentId }) => {
  const onViewClick = (e) => setStudentId(e.currentTarget.id);

  return (
    <div className="table-container">
      <table style={{ width: "100%" }}>
        <thead>
          <tr>
            <th>First name</th>
            <th>Last name</th>
            <th>Course</th>
            <th>Country</th>
            <th>Profile</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student) => (
            <tr>
              <td>{student.firstName}</td>
              <td>{student.lastName}</td>
              <td>{student.course}</td>
              <td>{student.address.country}</td>
              <td style={{ textAlign: "center" }}>
                <button id={student.studentId} onClick={(e) => onViewClick(e)}>
                  View
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
