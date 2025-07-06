import React, { useEffect, useState } from 'react';

export default function Recipients() {
  const [recipients, setRecipients] = useState([]);
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');

  const fetchRecipients = async () => {
    const res = await fetch('/api/recipients');
    const data = await res.json();
    setRecipients(data);
  };

  useEffect(() => {
    fetchRecipients();
  }, []);

  const handleAdd = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage('');
    try {
      const res = await fetch('/api/recipients', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });
      if (res.ok) {
        setEmail('');
        fetchRecipients();
        setMessage('Destinatario agregado');
      } else {
        const data = await res.json();
        setMessage(data.error || 'Error al agregar destinatario');
      }
    } catch {
      setMessage('Error al agregar destinatario');
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id) => {
    setLoading(true);
    setMessage('');
    try {
      const res = await fetch(`/api/recipients/${id}`, {
        method: 'DELETE',
      });
      if (res.ok) {
        fetchRecipients();
        setMessage('Destinatario eliminado');
      } else {
        setMessage('Error al eliminar destinatario');
      }
    } catch {
      setMessage('Error al eliminar destinatario');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ maxWidth: 600, margin: '2rem auto', padding: '1rem' }}>
      <h1>Gestión de Destinatarios</h1>
      <form onSubmit={handleAdd} style={{ marginBottom: '1rem' }}>
        <input
          type="email"
          placeholder="Correo electrónico"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          style={{ padding: '0.5rem', width: '70%', marginRight: '1rem' }}
          disabled={loading}
        />
        <button type="submit" disabled={loading} style={{ padding: '0.5rem 1rem' }}>
          Agregar
        </button>
      </form>
      {message && <p>{message}</p>}
      <ul>
        {recipients.map((r) => (
          <li key={r.id} style={{ marginBottom: '0.5rem' }}>
            {r.email}{' '}
            <button onClick={() => handleDelete(r.id)} disabled={loading} style={{ marginLeft: '1rem' }}>
              Eliminar
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
