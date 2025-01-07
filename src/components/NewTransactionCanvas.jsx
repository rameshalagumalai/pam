import NewTransactionForm from "./NewTransactionForm";

export default function NewTransactionCanvas({ isManual, payeeName }) {

    return (
        <div>
            <button id="new-transaction-button" className="d-none" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasBottom" aria-controls="offcanvasBottom" />
            <div className="offcanvas offcanvas-bottom h-90 rounded-top-4" tabindex="-1" id="offcanvasBottom" aria-labelledby="offcanvasBottomLabel">
                <div className="offcanvas-header border-bottom">
                    <h5 className="offcanvas-title f-600" id="offcanvasBottomLabel">New transaction</h5>
                    <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <NewTransactionForm isManual={isManual} payeeName={payeeName} />
            </div>
        </div>
    );
}