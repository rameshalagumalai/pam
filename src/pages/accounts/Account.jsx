import OptionDropDown from "../../components/OptionDropDown";

export default function Account({ type, name, isPrimary, isEditModal, setIsEditModal }) {
    return (
        <div className="d-flex align-items-center bg-white rounded-4 p-3 mt-3">
            <div className="hw-3 rounded-4 d-flex align-items-center justify-content-center border border-1">
                {getAccountTypeIcon(type)}
            </div>
            <div className="ms-2">
                <p>{name} {isPrimary && <i class="fa-solid fa-star text-warning"></i>}</p>
                <p className="small-text text-secondary">₹3000</p>
            </div>
            <OptionDropDown isPrimary={isPrimary} type="account" isEditModal={isEditModal} setIsEditModal={setIsEditModal} />
        </div>
    );
}

function getAccountTypeIcon(type) {
    switch (type) {
        case "bank":
            return (
                <i class="fa-solid fa-building-columns"></i>
            );
        case "cash":
            return (
                <i class="fa-solid fa-money-bill"></i>
            );
        case "credits":
            return (
                <i class="fa-solid fa-star-of-life"></i>
            );
    }
}