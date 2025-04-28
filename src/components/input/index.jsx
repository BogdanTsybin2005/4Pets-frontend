import './style.scss';


export function Input({label, placeholder, type='text', inputFunction}) {
    return (
        <div className='input__block'>
            <p>{label}</p>
            <input onChange={inputFunction} type={type} placeholder={placeholder} />
        </div>
    )
}