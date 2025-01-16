import { useState } from "react";
import Category from "./Category";
import CategoryFormModal from "./CategoryFormModal";
import DeleteModal from "../../components/DeleteModal";

export default function Categories() {

    const [isEditModal, setIsEditModal] = useState(false);

    return (
        <div className="d-flex flex-column vh-100">
            <div className="d-flex align-items-center px-3 mt-3">
                <h4 className="f-600">Categories</h4>
                <button className="btn btn-sm btn-primary small-text hw-2 rounded-circle ms-auto" data-bs-toggle="modal" data-bs-target="#categoryFormModal" onClick={()=>isEditModal && setIsEditModal(false)}>
                    <i className="fa-solid fa-plus" />
                </button>
            </div>
            <div className="h-100 px-3 overflow-y-auto pb-1">
                <Category color="secondary" icon="up-down-left-right" name="General" isPrimary={true} type="both" isEditModal={isEditModal} setIsEditModal={setIsEditModal} />
                <Category color="warning" icon="bowl-food" name="Food" type="expense" isEditModal={isEditModal} setIsEditModal={setIsEditModal} />
                <Category color="success" icon="house" name="Home" type="both" isEditModal={isEditModal} setIsEditModal={setIsEditModal} />
                <Category color="primary" icon="bus" name="Travel" type="expense" isEditModal={isEditModal} setIsEditModal={setIsEditModal} />
                <Category color="danger" icon="people-group" name="Split" type="income" isEditModal={isEditModal} setIsEditModal={setIsEditModal} />
            </div>

            <CategoryFormModal isEdit={isEditModal} />
            <DeleteModal type="category" />
        </div>
    );
}