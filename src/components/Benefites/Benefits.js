

const Benefits = (props) => {
    return (
        <div className="benefits-card">
            <h3 className="benefits-title">{props.title}</h3>
            <ul>
                <li className="benefits-item">{props.b1}</li>
                <li className="benefits-item">{props.b2}</li>
                <li className="benefits-item">{props.b3}</li>
            </ul>
        </div>
    )
}

export default Benefits