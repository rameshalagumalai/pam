export default function Page({ children }) {

    const isDark = true;
    const style = isDark ? "bg-app text-light" : "bg-light text-dark";

    return (
        <div className={`${style} vh-100 d-flex flex-column`}>
            { children }
        </div>
    );
}