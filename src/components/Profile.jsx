const Profile = ({ student }) => {
  console.log(student);
  return (
    <div className="profile-container">
      <div className="img-container">
        {student.studentId && (
          <img src={require("../asserts/imgs/" + student.profilePic)} alt="" />
        )}
      </div>
      <div className="details-container">
        <p>
          <span className="label">ID </span>: {student.studentId}
        </p>
        <p>
          <span className="label">Full name </span>:{" "}
          {student.firstName + student.lastName}
        </p>
        <p>
          <span className="label">Age </span>: {student.age}
        </p>
        <p>
          <span className="label">Course </span>: {student.course}
        </p>
        <p>
          <span className="label">Gender </span>: {student.gender}
        </p>
        {/* <p>
          Address : {student.address.city},{student.address.country}
        </p> */}
        {/* <p>Skills : {student.skills.join(",")}</p> */}
      </div>
    </div>
  );
};

export default Profile;
