export default function Transaction({ transaction }) {

    const transactionTypeClassStyle = transaction.moneyIn ? "left text-success" : "right text-danger";

    return (
        <div className="d-flex align-items-center py-2">
            <div className="d-flex position-relative">
                <div className={`rounded-4 hw-3 bg-${transaction.category}-subtle d-flex align-items-center justify-content-center`}>
                    <i class={`fa-solid fa-bowl-food text-${transaction.category}`}></i>
                </div>
                <i className={`fa-solid rounded-circle bg-white fa-circle-arrow-${transactionTypeClassStyle} position-absolute bottom-0 end-0`}></i>
            </div>
            <div className="ms-2">
                <p>{transaction.title}</p>
                <p className="small-text text-secondary">{transaction.account}</p>
            </div>
            <h5 className="ms-auto"><span className="small-text text-secondary">₹</span><span className="f-500">{transaction.amount}</span></h5>
        </div>
    );
}