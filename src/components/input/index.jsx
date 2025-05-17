import './style.scss';



export function Input({
  label,
  placeholder,
  type = 'text',
  value,
  onChange,
  onBlur,
  error,
  success
}) {
  return (
    <div className="input__block">
      <label className="input__label">{label}</label>

      <input
        className={`input__field ${error ? 'input-error' : success ? 'input-success' : ''}`}
        type={type}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
        onBlur={onBlur}
      />

      {(error || success) && (
        <div className={`input__helper-text ${error ? 'input-error' : 'input-success'}`}>
          {error || success}
        </div>
      )}
    </div>
  );
}
