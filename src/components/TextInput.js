const TextInput = ({ name, label, onChange, value }) => {
    return (
        <div className="form-group">
            <label htmlFor={name}>{label}</label>
            <div className="field">
                <input
                    id={name}
                    type="text"
                    name={name}
                    onChange={onChange}
                    className="form-control"
                    value={value}
                />
            </div>
        </div>
    )
}

export default TextInput;