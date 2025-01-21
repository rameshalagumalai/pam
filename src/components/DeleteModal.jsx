export default function DeleteModal({ type }) {
    return (
        <div class="modal fade" id={`${type}DeleteModal`} tabindex="-1" aria-labelledby={`${type}DeleteModalTitle`} aria-hidden="true">
            <form class="modal-dialog modal-sm modal-dialog-centered rounded-4">
                <div class="modal-content">
                    <div class="modal-body d-flex flex-column mb-">
                        <div class="d-flex align-items-center">
                            <h5 class="modal-title f-600" id={`${type}DeleteModalTitle`}>Delete {type === "account" ? "Account" : "Category"}</h5>
                            <button type="button" class="btn-close ms-auto" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <p className="mt-3">Are you sure you want to delete the {type}?</p>
                        <button type="button" class="btn btn-sm btn-danger rounded-3 mx-auto mt-4">Delete</button>
                    </div>
                </div>
            </form>
        </div>
    );
}