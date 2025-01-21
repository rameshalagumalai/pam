import EditProfileModal from "./EditProfileModal";
import PreferenceItem from "./PreferenceItem";
import SignOutModal from "./SignOutModal";

export default function Profile() {
    return (
        <div className="vh-100 d-flex flex-column px-3 pb-3">
            <h4 className="f-600 mt-3">Profile</h4>
            <div className="d-flex flex-column align-items-center mt-5 mb-3">
                <div className="d-flex align-items-center justify-content-center hw-5 bg-primary-subtle bg-gradient rounded-circle">
                    <i class="fa-solid fa-user fa-2x"></i>
                </div>
                <p className="mt-2">Ramesh Alagumalai</p>
                <p className="text-secondary small-text mt-1">rameshalagumalai23@gmail.com</p>
                <button type="button" className="btn btn-sm btn-primary small-text rounded-circle hw-2 mt-2" data-bs-toggle="modal" data-bs-target="#exampleModalCenter">
                    <i class="fa-solid fa-pen"></i>
                </button>
            </div>
            <PreferenceItem name="Accounts" to="/accounts" color="success" icon="money-bill" />
            <PreferenceItem name="Categories" to="/categories" color="warning" icon="shapes" />
            <PreferenceItem name="QR" to="/qr" color="dark" icon="qrcode" />

            <button className="btn btn-sm btn-outline-danger rounded-3 mt-auto mx-auto" data-bs-toggle="modal" data-bs-target="#signOutModal">Sign out</button>

            <EditProfileModal />
            <SignOutModal />
        </div>
    );
}