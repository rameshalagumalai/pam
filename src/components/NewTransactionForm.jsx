import DropDown from "./DropDown";

export default function NewTransactionForm({ isManual, payeeName }) {
    return (
        <form className="offcanvas-body small text-center bg-light">
                <div className="d-flex gap-2">
                    <input type="datetime-local" className="form-control rounded-3 w-50" />
                    <div className="border rounded-3 w-50">
                        <input type="radio" class="btn-check" name="options-base" id="option5" autocomplete="off" />
                        <label class="btn w-50 rounded-3 text-center px-0" for="option5"><i className="fa-solid fa-circle-arrow-right text-danger"></i></label>

                        <input type="radio" class="btn-check" name="options-base" id="option6" autocomplete="off" disabled={!isManual} />
                        <label class="btn w-50 rounded-3 text-center px-0" for="option6"><i className="fa-solid fa-circle-arrow-left text-success"></i></label>
                    </div>
                </div>
                <div className="mt-5 d-flex flex-column align-items-center">
                    {/* <span className="text-secondary f-400">₹</span> */}
                    <h6 className="text-secondary small-text">{isManual ? "Manual expense" : <><i class="fa-solid fa-qrcode"></i> {payeeName}</>}</h6>
                    <input type="number" className="amount-input border-0 display-1 f-600 text-center w-50 bg-light" placeholder="0" />
                    <input type="text" className="form-control rounded-pill small-text text-center py-1 w-25" placeholder="Notes" />
                </div>
                <div className="d-flex gap-2 mt-5">
                    <DropDown bg="success" icon="money-bill" text="Cash" />
                    <DropDown bg="warning" icon="shapes" text="General" />
                </div>
                <div className="d-flex">
                    {
                        isManual ?
                            <button className="btn btn-primary btn-lg rounded-4 m-auto mt-5"><i class="fa-solid fa-check"></i></button>
                            :
                            <button className="btn btn-primary rounded-3 ms-auto mt-5">Proceed <i class="fa-solid fa-arrow-right"></i></button>
                    }
                </div>
            </form>
    );
}