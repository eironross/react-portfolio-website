import "./style.css"


export default function Arrow({ref, className}) {

    return (
        <>
            <div ref={ref} className={className}>
                <span className="arrow-item"></span>
                <span className="arrow-item"></span>
            </div>
        </>
    )
}

