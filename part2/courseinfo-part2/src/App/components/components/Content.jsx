import Part from "./Part"
import Total from "./Total";

const Content = ({ content }) => {

    return (
        <div>
            {content.map(part => 
            <Part parts={part} key={part.id}/>
            )}
            <Total parts={content}/>
        </div>
    )
}

export default Content