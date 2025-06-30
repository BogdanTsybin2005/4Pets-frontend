export default function SearchBar({ value, onChange, placeholder }) {
    return (
        <div className="blog-search-wrapper">
            <input
                type="text"
                className="blog-search"
                placeholder={placeholder}
                value={value}
                onChange={e => onChange(e.target.value)}
            />
        </div>
    );
}