

export default function Accordion(props) {
    return (
        <div className="card">
            <div className="card-body">
                <h5 className="card-title">{props.titolo}</h5>
                <p className="card-text">{props.contenuto}</p>

            </div>
        </div>
    )
}