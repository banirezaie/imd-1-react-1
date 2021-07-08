const TextInput = ({ name, label, onChange, value, errors }) => {
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
                    errors={errors}
                />
            </div>
            {errors && <div className="alert alert-danger">{name} is required</div>}
        </div>
    )
}

export default TextInput;