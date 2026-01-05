function Button ({label, handleFunction}){
    return <button onClick={handleFunction}>{label}</button>
}

export default Button;