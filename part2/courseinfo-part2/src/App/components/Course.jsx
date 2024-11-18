import Header from "./components/Header"
import Content from "./components/Content"

const Course = ({ course }) => {
    console.log("HELLO WORLD");
    
    return (
        <div>
            <Header title={course.name} />
            <Content content={course.parts}/>
        </div>
    )
}

export default Course