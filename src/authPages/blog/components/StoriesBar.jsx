export default function StoriesBar({ stories, onAdd }) {
    return (
        <div className="blog-stories">
            {stories.map((src, idx) => (
                <img key={idx} src={src} alt="avatar" className="story-avatar" />
            ))}
            <button className="story-add" onClick={onAdd} type="button">
                +
            </button>
        </div>
    );
}