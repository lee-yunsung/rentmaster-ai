import React, { useState } from 'react';

export default function App() {
  const [car, setCar] = useState('');
  const [term, setTerm] = useState('');
  const [deposit, setDeposit] = useState('');
  const [recommendations, setRecommendations] = useState([]);

  const handleSubmit = () => {
    const data = [
      { name: '쏘렌토 하이브리드', price: '월 530,000원', company: '롯데렌터카' },
      { name: '싼타페 디젤', price: '월 498,000원', company: 'SK렌터카' },
      { name: '스포티지 가솔린', price: '월 465,000원', company: '현대캐피탈' }
    ];
    setRecommendations(data);
  };

  return (
    <div style={{ padding: 20, fontFamily: 'sans-serif' }}>
      <h1>🚗 렌트마스터 AI 견적 추천</h1>
      <input placeholder="원하는 차량" value={car} onChange={(e) => setCar(e.target.value)} /><br/><br/>
      <input placeholder="계약 기간 (ex. 48개월)" value={term} onChange={(e) => setTerm(e.target.value)} /><br/><br/>
      <input placeholder="보증금 (만원 단위)" value={deposit} onChange={(e) => setDeposit(e.target.value)} /><br/><br/>
      <button onClick={handleSubmit}>AI 견적 추천 보기</button>

      {recommendations.length > 0 && (
        <div style={{ marginTop: 30 }}>
          <h3>🧠 추천 견적 결과</h3>
          <ul>
            {recommendations.map((r, i) => (
              <li key={i}>{r.name} - {r.price} ({r.company})</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
