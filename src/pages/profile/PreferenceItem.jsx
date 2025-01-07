import { Link } from "react-router-dom";

export default function PreferenceItem({ name, to, color, icon }) {
    return (
        <Link className="bg-white rounded-4 d-flex align-items-center text-dark p-3 mt-3" to={to}>
            <div className={`rounded-4 hw-3 bg-${color}-subtle d-flex align-items-center justify-content-center`}>
                <i class={`fa-solid fa-${icon} text-${color}`}></i>
            </div>
            <p className="ms-2">{name}</p>
            <i class="fa-solid fa-chevron-right text-secondary ms-auto"></i>
        </Link>
    );
}