import { transactions } from "../sampleData/testData";
import Transaction from "./Transaction";
import TransactionModal from "./TransactionModal";

export default function TransactionList() {
    return (
        <div className="h-100 px-3 overflow-y-auto pb-1">
            {
                transactions.map((transaction, i) => {
                    return (
                        <Transaction key={i} transaction={transaction} />
                    )
                })
            }
            <TransactionModal />
        </div>
    );
}