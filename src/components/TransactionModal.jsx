export default function TransactionModal() {
    return (
        <div class="modal fade" id="transactionModal" tabindex="-1" aria-labelledby="transactionModalTitle" aria-hidden="true">
            <form class="modal-dialog modal-sm modal-dialog-centered rounded-4">
                <div class="modal-content">
                    <div class="modal-body d-flex flex-column mb-">
                        <div className="d-flex flex-column align-items-center">
                            <button type="button" class="btn-close ms-auto" data-bs-dismiss="modal" aria-label="Close"></button>
                            <div className={`d-flex align-items-center justify-content-center hw-3 rounded-4 bg-danger-subtle`}>
                                <i className={`fa-solid rounded-circle bg-white fa-circle-arrow-right text-danger`} />
                            </div>
                            <p class="modal-title mt-1 f-400" id="transactionModalTitle">Lunch</p>
                            <h1 className="display-2 f-500 mt-3"><span className="h1 text-secondary h2">₹</span>800</h1>
                            <div className="d-flex gap-4 mt-4 small-text">
                                <div className="d-flex align-items-center">
                                    <div className="hw-2 rounded-3 d-flex align-items-center justify-content-center bg-warning-subtle text-warning">
                                        <i class="fa-solid fa-bowl-food small-text"></i>
                                    </div>
                                    <p className="ms-1">Miscellaneous</p>
                                </div>
                                <div className="d-flex align-items-center">
                                    <div className="hw-2 rounded-3 d-flex align-items-center justify-content-center border border-1">
                                        <i class="fa-solid fa-building-columns small-text"></i>
                                    </div>
                                    <p className="ms-1">Hand Cash</p>
                                </div>
                            </div>
                            <p className="small-text text-secondary mt-4">21 Jan 2025, 10:30 pm</p>
                        </div>
                        <div className="d-flex justify-content-between gap-3 mt-5">
                            <button className="btn btn-secondary w-100 btn-sm">Edit</button>
                            <button className="btn btn-danger w-100 btn-sm">Delete</button>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    );
}