import './benefits.css'


const Benefits = (props) => {
    return (
        <div>
            <h3 className="header">{props.title}</h3>
            <ul>
                <li className="benefits">{props.b1}</li>
                <li className="benefits">{props.b2}</li>
                <li className="benefits">{props.b3}</li>
            </ul>
        </div>
    )
}

export default Benefits