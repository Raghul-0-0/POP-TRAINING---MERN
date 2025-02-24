import Exam from "./Exam";

const StudentResults = (res) => {
    return (
        <div>
            <h1>Result:</h1>
            <h2>SGPA:{res.sgpa}</h2>
            <h3>CGPA:{res.cgpa}</h3>
        </div>
    )
}
export default StudentResults;