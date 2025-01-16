export default function OptionDropDown({ isPrimary, type, isEditModal, setIsEditModal }) {
    return (
        <div class="dropdown ms-auto">
            <button class="btn" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                <i class="fa-solid fa-ellipsis-vertical"></i>
            </button>
            <ul class="dropdown-menu">
                {!isPrimary && <li><a class="dropdown-item">Mark as primary</a></li>}
                <li data-bs-toggle="modal" data-bs-target={`#${type}FormModal`} onClick={()=>!isEditModal && setIsEditModal(true)}>
                    <a class="dropdown-item">Edit</a>
                </li>
                <li data-bs-toggle="modal" data-bs-target={`#${type}DeleteModal`}>
                    <a class="dropdown-item">Delete</a>
                </li>
            </ul>
        </div>
    );
}