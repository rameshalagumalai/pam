export default function EditProfileModal() {
    return (
        <div class="modal fade" id="exampleModalCenter" tabindex="-1" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
            <form class="modal-dialog modal-sm modal-dialog-centered rounded-4">
                <div class="modal-content">
                    <div class="modal-header py-3">
                        <h5 class="modal-title f-600" id="exampleModalCenterTitle">Edit info</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body d-flex flex-column">
                        <input type="text" className="form-control" placeholder="Name" />
                        <input type="text" className="form-control mt-3" placeholder="UPI ID" />
                        <button type="button" class="btn btn-sm btn-primary rounded-3 mx-auto mt-3">Save</button>
                    </div>
                </div>
            </form>
        </div>
    );
}