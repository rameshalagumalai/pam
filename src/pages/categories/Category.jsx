export default function Category({ color, icon, name, isPrimary, type }) {
    return (
        <div className="d-flex align-items-center bg-white rounded-4 p-3 mt-3">
            <div className={`hw-3 rounded-4 d-flex align-items-center justify-content-center bg-${color}-subtle text-${color}`}>
                <i class={`fa-solid fa-${icon}`}></i>
            </div>
            <div className="ms-2">
                <p>{name} {isPrimary && <i class="fa-solid fa-star text-warning"></i>}</p>
                {
                    type === "income" ?
                    <i className="fa-solid rounded-circle bg-white fa-circle-arrow-left text-success" />
                    :
                    (
                        type === "expense" ?
                        <i className="fa-solid rounded-circle bg-white fa-circle-arrow-right text-danger" />
                        :
                        <>
                            <i className="fa-solid rounded-circle bg-white fa-circle-arrow-left text-success" />
                            <i className="fa-solid rounded-circle bg-white fa-circle-arrow-right text-danger ms-2" />
                        </>
                    )
                }
            </div>
            <button className="btn btn-outline-secondary btn-sm rounded-3 ms-auto"><i class="fa-solid fa-pen"></i></button>
        </div>
    );
}