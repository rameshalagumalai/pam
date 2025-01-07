import { Link } from "react-router-dom";

export default function Graph() {
    return (
        <div className="bg-dark text-light d-flex flex-column rounded-4 py-2 px-3" style={{height: "11rem"}}>
            <div className="d-flex align-items-center">
                <p className="f-500"><span className="small-text text-secondary">Total</span> ₹35,000</p>
                <Link to="/stats" className="btn btn-sm btn-outline-light ms-auto small-text py-0 px-1">View stats</Link>
            </div>
            <div className="h-100 d-flex justify-content-between mt-2">
                <Bar height={25} color="info" />
                <Bar height={78} color="warning" />
                <Bar height={10} color="primary" />
                <Bar height={57} color="danger" />
                <Bar height={100} color="dark" />
                <Bar height={92} color="success" />
                <Bar height={15} color="secondary" />
            </div>
        </div>
    );
}

function Bar({ height, color }) {
    return (
        <div className="h-100 d-flex flex-column justify-content-end small-text text-center">
            <div style={{height: `${height}%`}} className={`bg-${color}-subtle rounded-4 p-3`} data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="Tooltip on top" />
        </div>
    );
}