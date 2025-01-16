export default function DropDown({ bg, icon, text }) {
    return (
        <div class="btn-group w-100 text-end">
            <button type="button" class={`btn dropdown-toggle bg-${bg}-subtle rounded-pill text-start px-3`} data-bs-toggle="dropdown" aria-expanded="false">
                <i class={`fa-solid fa-${icon} text-${bg}`} /> {text}
            </button>
            <ul class="dropdown-menu dropdown-menu-end">
                <li><a class="dropdown-item" href="/">Action</a></li>
                <li><a class="dropdown-item" href="/">Another action</a></li>
                <li><a class="dropdown-item" href="/">Something else here</a></li>
                <li className="dropdown-item"><button className="btn btn-light w-100 btn-sm small-text">New</button></li>
            </ul>
        </div>
    );
}