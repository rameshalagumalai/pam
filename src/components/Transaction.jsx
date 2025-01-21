export default function Transaction({ transaction }) {

    const { moneyIn, category, title, account, amount } = transaction;
    // const transactionTypeClassStyle = transaction.moneyIn ? "left text-success" : "right text-danger";

    return (
        <div className="d-flex align-items-center py-2 mt-1" data-bs-toggle="modal" data-bs-target="#transactionModal">
            <div className="d-flex position-relative">
                <div className={`rounded-circle hw-3 bg-${category}-subtle d-flex align-items-center justify-content-center`}>
                    <i class={`fa-solid fa-bowl-food text-${category}`}></i>
                </div>
                {/* <i className={`fa-solid rounded-circle bg-white fa-circle-arrow-${transactionTypeClassStyle} position-absolute bottom-0 end-0`}></i> */}
            </div>
            <div className="ms-2">
                <p>{title}</p>
                <p className="small-text text-secondary">{account}</p>
            </div>
            <h5 className={`ms-auto ${moneyIn && " text-success"}`}><span className="small-text text-secondary">₹</span><span className="f-500">{amount}</span></h5>
        </div>
    );
}