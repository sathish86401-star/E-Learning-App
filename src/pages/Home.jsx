import { useContext } from "react";
import { UserContext } from "../context/UserContext";
import CourseCard from "../components/CourseCard";

const coursesData = [
  { id: 1, title: "React Basics", instructor: "John Doe", category: "Web Dev", duration: "4 Hours", level: "Beginner", description: "Learn fundamentals of React." },
  { id: 2, title: "Advanced Context & Hooks", instructor: "Jane Smith", category: "Web Dev", duration: "6 Hours", level: "Intermediate", description: "Master state management." },
  { id: 3, title: "Node.js Essentials", instructor: "Alex Johnson", category: "Backend", duration: "5 Hours", level: "Beginner", description: "Build scalable servers." }
];

const Home = () => {
  const { user, isLoggedIn } = useContext(UserContext);

  return (
    <div style={{ padding: "20px" }}>
      <h1>Welcome {isLoggedIn ? user.name : "Guest"} to E-Learning Platform!</h1>
      <h2>Featured Courses</h2>
      <div style={{ display: "flex", gap: "20px", flexWrap: "wrap", marginTop: "20px" }}>
        {coursesData.map((course) => (
          <CourseCard key={course.id} course={course} />
        ))}
      </div>
    </div>
  );
};

export default Home;