import { Link, useNavigate } from "react-router-dom";
import Transaction from "../../components/Transaction";
import { transactions } from "../../sampleData/testData";
import OverallStats from "./OverallStats";
import Graph from "./Graph";

export default function Home({ setIsManual }) {

    const navigate = useNavigate();

    return (
        <div className="vh-100 d-flex flex-column">
            <div className="px-3 pt-2">
                <div className="d-flex align-items-center">
                    <div>
                        <p>Hello,</p>
                        <h4 className="f-600">Ramesh A</h4>
                    </div>
                    <div className="d-flex align-items-center justify-content-center hw-2-5 rounded-circle bg-primary-subtle ms-auto" onClick={()=>navigate("/profile")}>
                        <i class="fa-solid fa-user"></i>
                    </div>
                </div>
                <div className="rounded-5 mt-3">
                    {/* <p className="text-app-dark">Total Balance</p>
                    <h1 className="mb-3">₹5750.5</h1> */}
                    <Graph />
                    <div className="d-flex mt-3">
                        <OverallStats isMoneyIn={true} />
                        <OverallStats isMoneyIn={false} />
                    </div>
                </div>
                <div className="d-flex align-items-center mt-3">
                <p className="f-500">Transactions</p>
                <Link to="/transactions" className="btn btn-sm btn-secondary rounded-pill ms-auto small-text py-0">View all <i class="fa-solid fa-arrow-right-long"></i></Link>
                </div>
            </div>
            <div className="h-100 px-3 overflow-y-auto">
                {
                    transactions.map((transaction, i) => {
                        return (
                            <Transaction key={i} transaction={transaction} />
                        )
                    })
                }
            </div>
            <div class="btn-group-vertical btn-group-float rounded-3 shadow" role="group" aria-label="Vertical button group">
                <Link to="/scan-qr" type="button" class="btn btn-lg btn-dark opacity-25"><i class="fa-solid fa-qrcode"></i></Link>
                <button type="button" class="btn btn-lg btn-dark opacity-25" data-bs-toggle="offcanvas" data-bs-target="#offcanvasBottom" aria-controls="offcanvasBottom"><i className="fas fa-plus m-0"></i></button>
            </div>
        </div>
    );
}