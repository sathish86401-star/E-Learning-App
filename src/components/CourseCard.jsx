const CourseCard = ({ course }) => {
  return (
    <div style={{ border: "1px solid #ddd", borderRadius: "8px", padding: "16px", width: "250px", color: "#333", backgroundColor: "#fff" }}>
      <h3>{course.title}</h3>
      <p><strong>Instructor:</strong> {course.instructor}</p>
      <p><strong>Category:</strong> {course.category}</p>
      <p><strong>Duration:</strong> {course.duration}</p>
      <p><strong>Level:</strong> {course.level}</p>
      <p>{course.description}</p>
    </div>
  );
};

export default CourseCard;