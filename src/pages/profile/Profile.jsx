import PreferenceItem from "./PreferenceItem";

export default function Profile() {
    return (
        <div className="vh-100 d-flex flex-column px-3 pb-3">
            <h4 className="f-600 mt-3">Profile</h4>
            <div className="d-flex flex-column align-items-center mt-5 mb-3">
                <div className="d-flex align-items-center justify-content-center hw-5 bg-primary-subtle bg-gradient rounded-circle">
                    <i class="fa-solid fa-user fa-2x"></i>
                </div>
                <p className="mt-2">Ramesh Alagumalai</p>
                <p className="text-secondary small-text">rameshalagumalai23@gmail.com</p>
                <button type="button" className="btn btn-sm btn-primary small-text rounded-circle hw-2 mt-2" data-bs-toggle="modal" data-bs-target="#exampleModalCenter">
                    <i class="fa-solid fa-pen"></i>
                </button>
            </div>
            <PreferenceItem name="Accounts" to="/accounts" color="success" icon="money-bill" />
            <PreferenceItem name="Categories" to="/categories" color="warning" icon="shapes" />
            <PreferenceItem name="QR" to="/qr" color="dark" icon="qrcode" />

            <button className="btn btn-sm btn-outline-danger rounded-3 mt-auto mx-auto">Sign out</button>

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
        </div>
    );
}