export default function OverallStats({ isMoneyIn }) {
    return (
        <div className="col-6 d-flex">
            <span className={`hw-3 rounded-3 bg-${isMoneyIn ? "success" : "danger"}-subtle`} />
            <div className="ms-2">
                <span className="small-text text-app-dark">{isMoneyIn ? "Income" : "Expenses"}</span>
                <p>₹35,000</p>
            </div>
        </div>
    );
}