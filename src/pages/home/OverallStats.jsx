export default function OverallStats({ isMoneyIn }) {

    const transactionTypeClassStyle = isMoneyIn ? "left text-success" : "right text-danger";

    return (
        <div className="col-6 d-flex align-items-center">
            <div className={`d-flex align-items-center justify-content-center hw-3 rounded-4 bg-${isMoneyIn ? "success" : "danger"}-subtle`}>
                <i className={`fa-solid rounded-circle bg-white fa-circle-arrow-${transactionTypeClassStyle}`} />
            </div>
            <div className="ms-2">
                <p className="small-text text-secondary">{isMoneyIn ? "Income" : "Expenses"}</p>
                <p className="f-500">₹35,000</p>
            </div>
        </div>
    );
}