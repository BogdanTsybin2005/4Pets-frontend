export default function SearchBar({ value, onChange }) {
    return (
        <div className="blog-search-wrapper">
            <input
                type="text"
                className="blog-search"
                placeholder="Вы ищите на платформе 4Pets..."
                value={value}
                onChange={e => onChange(e.target.value)}
            />
        </div>
    );
}