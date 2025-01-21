export default function SignOutModal() {
    return (
        <div class="modal fade" id="signOutModal" tabindex="-1" aria-labelledby="signOutModalTitle" aria-hidden="true">
            <form class="modal-dialog modal-sm modal-dialog-centered rounded-4">
                <div class="modal-content">
                    <div class="modal-body d-flex flex-column mb-">
                        <div class="d-flex align-items-center">
                            <h5 class="modal-title f-600" id="signOutModalTitle">Sign out</h5>
                            <button type="button" class="btn-close ms-auto" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <p className="mt-3">Are you sure you want to sign out?</p>
                        <div class="form-check mt-2">
                            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" che />
                            <label class="form-check-label" for="flexCheckDefault">
                                Remember me
                            </label>
                        </div>
                        <button type="button" class="btn btn-sm btn-danger rounded-3 mx-auto mt-4">Yes</button>
                    </div>
                </div>
            </form>
        </div>
    );
}