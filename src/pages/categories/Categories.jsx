import Category from "./Category";

export default function Categories() {
    return (
        <div className="d-flex flex-column vh-100">
            <div className="d-flex align-items-center px-3 mt-3">
                <h4 className="f-600">Categories</h4>
                <button className="btn btn-sm btn-primary small-text hw-2 rounded-circle ms-auto"><i className="fa-solid fa-plus" /></button>
            </div>
            <div className="h-100 px-3 overflow-y-auto pb-1">
                <Category color="secondary" icon="up-down-left-right" name="General" isPrimary={true} type="both" />
                <Category color="warning" icon="bowl-food" name="Food" type="expense" />
                <Category color="success" icon="house" name="Home" type="both" />
                <Category color="primary" icon="bus" name="Travel" type="expense" />
                <Category color="danger" icon="people-group" name="Split" type="income" />
            </div>
        </div>
    );
}