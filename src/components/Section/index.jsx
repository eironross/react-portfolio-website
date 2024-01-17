// React 17 does not need importing module anymore
import "./style.css"


export default function Section(props) {
    const {title, id, children} = props
    return (
        <section className="container" id={id}>
            <div className="sub-header">
                <h2>{title}</h2>
            </div>
            <div className="wrapper">
                {children}
            </div>
        </section>
       
    )
}

