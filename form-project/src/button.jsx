import "./button.css";

export default function Button({ isOutline, icon, text,  }) {
    return (
        <button  className={isOutline ? "outline-btn" : "primary-btn"}>
            {icon}
            {text}
        </button>
    );
}
