import TransactionList from "../../components/TransactionList";

export default function Transactions() {
    return (
        <div className="d-flex flex-column vh-100">
            <h4 className="f-600 px-3 mt-3">Transactions</h4>
            <TransactionList />
        </div>
    );
}