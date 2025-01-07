import Transaction from "../../components/Transaction";
import { transactions } from "../../sampleData/testData";

export default function Transactions() {
    return (
        <div className="d-flex flex-column vh-100">
            <h4 className="f-600 px-3 pt-3">Transactions</h4>
            <div className="h-100 overflow-y-auto px-3 mt-2">
                {
                    transactions.map((transaction, i) => {
                        return (
                            <Transaction key={i} transaction={transaction} />
                        )
                    })
                }
            </div>
        </div>
    );
}