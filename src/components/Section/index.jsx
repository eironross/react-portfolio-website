// React 17 does not need importing module anymore
import "./style.css"


export default function Section(props) {
    const {title, id, children} = props
    return (
        <section id={id}>
            <div className="wrapper">
                {children}
            </div>
        </section>
       
    )
}

