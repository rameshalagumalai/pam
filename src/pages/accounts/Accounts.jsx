import { useState } from "react";
import Account from "./Account";
import AccountFormModal from "./AccountFormModal";
import DeleteModal from "../../components/DeleteModal";

export default function Accounts() {

    const [isEditModal, setIsEditModal] = useState(false);

    return (
        <div className="d-flex flex-column vh-100">
            <div className="d-flex align-items-center px-3 mt-3">
                <h4 className="f-600">Accounts</h4>
                <button className="btn btn-sm btn-primary small-text hw-2 rounded-circle ms-auto" data-bs-toggle="modal" data-bs-target="#accountFormModal" onClick={()=>isEditModal && setIsEditModal(false)}>
                    <i className="fa-solid fa-plus" />
                </button>
            </div>
            <div className="h-100 px-3 overflow-y-auto pb-1">
                <Account type="bank" name="HDFC" isPrimary={true} isEditModal={isEditModal} setIsEditModal={setIsEditModal} />
                <Account type="cash" name="Cash" isPrimary={false} isEditModal={isEditModal} setIsEditModal={setIsEditModal} />
                <Account type="bank" name="SBI" isPrimary={false} isEditModal={isEditModal} setIsEditModal={setIsEditModal} />
                <Account type="credits" name="Amazon" isPrimary={false} isEditModal={isEditModal} setIsEditModal={setIsEditModal} />
            </div>

            <AccountFormModal isEdit={isEditModal} />
            <DeleteModal type="account" />
        </div>
    );
}