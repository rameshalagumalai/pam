export default function AccountFormModal({ isEdit }) {
    return (
        <div class="modal fade" id="accountFormModal" tabindex="-1" aria-labelledby="accountFormModalTitle" aria-hidden="true">
            <form class="modal-dialog modal-sm modal-dialog-centered rounded-4">
                <div class="modal-content">
                    <div class="modal-body d-flex flex-column">
                        <div class="d-flex align-items-center">
                            <h5 class="modal-title f-600" id="accountFormModalTitle">{isEdit ? "Edit" : "New"} Account</h5>
                            <button type="button" class="btn-close ms-auto" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <input type="text" className="form-control mt-3" placeholder="Name" />
                        <div className="d-flex justify-content-around mt-3">
                            <input type="radio" class="btn-check" name="options-base" id="option1" autocomplete="off" />
                            <label class="btn rounded-3 text-center" for="option1"><i class="fa-solid fa-building-columns" /> Bank</label>

                            <input type="radio" class="btn-check" name="options-base" id="option2" autocomplete="off" />
                            <label class="btn rounded-3 text-center" for="option2"><i class="fa-solid fa-money-bill" /> Cash</label>

                            <input type="radio" class="btn-check" name="options-base" id="option3" autocomplete="off" />
                            <label class="btn rounded-3 text-center" for="option3"><i class="fa-solid fa-star-of-life"></i> Credits</label>
                        </div>
                        <input type="number" className="form-control mt-3" placeholder="Opening balance" />
                        <button type="button" class="btn btn-sm btn-primary rounded-3 mx-auto mt-3">{isEdit ? "Save" : "Create"}</button>
                    </div>
                </div>
            </form>
        </div>
    );
}