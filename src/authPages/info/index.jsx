import Header from '../../authComponents/header';
import Footer from '../../components/footer';
import { Input } from '../../components/input';
import axios from 'axios';
import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import './style.scss';

export default function Info() {
  const token = useSelector(state => state.authorization.token);
  const [user, setUser] = useState(null);
  const [edit, setEdit] = useState(false);
  const [form, setForm] = useState({ username: '', city: '', email: '', contact: '', avatar: '' });

  useEffect(() => {
    const fetchUser = async () => {
      if (!token) return;
      try {
        const res = await axios.get('http://localhost:5000/auth/me', {
          headers: { Authorization: `Bearer ${token}` },
        });
        const u = res.data?.data;
        setUser(u);
        setForm({
          username: u?.username || '',
          city: u?.city || '',
          email: u?.email || '',
          contact: u?.contact || '',
          avatar: u?.avatar || '',
        });
      } catch (err) {
        console.error('Failed to load user', err);
      }
    };
    fetchUser();
  }, [token]);

  if (!user) return <div>Загрузка...</div>;

  const handleChange = (key, value) => {
    setForm(prev => ({ ...prev, [key]: value }));
  };

  const handleSave = () => {
    setUser(form);
    setEdit(false);
  };

  const avatarStyle = form.avatar ? { backgroundImage: `url(${form.avatar})` } : {};

  return (
    <>
      <Header />
      <main className="profile-page">
        <div className="profile-card">
          <div className="profile-card__avatar" style={avatarStyle} />
          {edit ? (
            <>
              <Input label="Имя" value={form.username} onChange={e => handleChange('username', e.target.value)} />
              <Input label="Город" value={form.city} onChange={e => handleChange('city', e.target.value)} />
              <Input label="Email" value={form.email} onChange={e => handleChange('email', e.target.value)} />
              <Input label="Контакты" value={form.contact} onChange={e => handleChange('contact', e.target.value)} />
              <div className="profile-card__actions">
                <button className="link-to-page-button" onClick={() => setEdit(false)}>Отмена</button>
                <button className="link-to-page-button primary" onClick={handleSave}>Сохранить</button>
              </div>
            </>
          ) : (
            <>
              <div className="profile-card__name">{user.username}</div>
              {user.city && <div className="profile-card__info">{user.city}</div>}
              {user.email && <div className="profile-card__info">{user.email}</div>}
              {user.contact && <div className="profile-card__info">{user.contact}</div>}
              <button className="link-to-page-button primary" onClick={() => setEdit(true)}>
                Редактировать
              </button>
            </>
          )}
        </div>
      </main>
      <Footer />
    </>
  );
}
