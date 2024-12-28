import Page from "../../components/Page";
import Transaction from "../../components/Transaction";
import { transactions } from "../../sampleData/testData";
import OverallStats from "./OverallStats";

export default function Home() {
    return (
        <Page>
            <div className="px-3 py-2">
                <div className="d-flex align-items-center">
                    <div>
                        <span className="small-text">Good morning</span>
                        <p>Ramesh A</p>
                    </div>
                    <div className="hw-2-5 rounded-circle bg-primary-subtle ms-auto" />
                </div>
                <p className="small-text text-secondary mt-3">This month</p>
                <div className="bg-app-light rounded-4 p-3">
                    <span className="text-app-dark">Total Balance</span>
                    <h1 className="mb-0">₹5750.5</h1>
                    <div className="d-flex mt-3">
                        <OverallStats isMoneyIn={true} />
                        <OverallStats isMoneyIn={false} />
                    </div>
                </div>
            </div>
            <div className="h-100 my-2 px-3 overflow-y-auto">
                {
                    transactions.map((transaction, i) => {
                        return (
                            <Transaction key={i} transaction={transaction} />
                        )
                    })
                }
            </div>
        </Page>
    );
}