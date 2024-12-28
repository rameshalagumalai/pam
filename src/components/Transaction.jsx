export default function Transaction({ transaction }) {

    const transactionTypeClassStyle = transaction.moneyIn ? "left text-success" : "right text-danger";

    return (
        <div className="d-flex align-items-center py-2">
            <div className="d-flex position-relative">
                <div className={`rounded-circle hw-3 bg-${transaction.category}-subtle`}></div>
                <i className={`fa-solid rounded-circle bg-white fa-circle-arrow-${transactionTypeClassStyle} position-absolute bottom-0 end-0`}></i>
            </div>
            <div className="ms-2">
                <p>{transaction.title}</p>
                <span className="small-text text-secondary">{transaction.account}</span>
            </div>
            <h5 className="f-600 ms-auto"><span className="small-text text-secondary">₹</span><span className="f-700">{transaction.amount}</span></h5>
        </div>
    );
}