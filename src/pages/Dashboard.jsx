import Navbar from "../components/Navbar";
import "./Dashboard.css";

const Dashboard = () => {
  return (
    <div>
      <Navbar />
      <div className="dashboard">
        <div className="card green">Total Students: 120</div>
        <div className="card blue">Total Courses: 15</div>
        <div className="card yellow">Results Uploaded: 350</div>
      </div>
    </div>
  );
};

export default Dashboard;
