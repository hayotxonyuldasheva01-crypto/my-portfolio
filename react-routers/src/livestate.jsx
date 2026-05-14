// LiveInput.jsx
import { useState } from 'react';

function LiveInput() {
  const [matn, setMatn] = useState('');

  return (
    <div style={{ padding: '20px', marginTop: '20px', border: '1px solid blue',backgroundColor:'#fff' }}>
      <h3>Bu mening birinchi websahifam</h3>
     <h2 style={{ color: '#0f33aa' }}>Salom, tanishganimizdan hursandman, {matn}!</h2>
      <input 
        type="text" 
        placeholder="Ismingizni yozing..."
        value={matn}
        onChange={(e) => setMatn(e.target.value)} 
        // Har bir harf yozilganda state o'zgaradi
        style={{ padding: '10px', fontSize: '16px', width: '250px' }}
      />
    </div>
  );
}

export default LiveInput;