const Profile = ({ student }) => {
  return (
    <div className="profile-container">
      <div className="img-container">
        <img src={require("../asserts/" + props.student.profilePic)} alt="" />
      </div>
      <div className="details-container">
        <p>ID : {student.studentId}</p>
        <p>Full name : {student.firstName + student.lastName}</p>
        <p>Age : {student.age}</p>
        <p>Course : {student.course}</p>
        <p>Gender : {student.gender}</p>
        {/* <p>
          Address : {student.address.city},{student.address.country}
        </p> */}
        {/* <p>Skills : {student.skills.join(",")}</p> */}
      </div>
    </div>
  );
};

export default Profile;
