import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

const App = () => {
  // 클릭된 링크의 인덱스를 상태로 관리
  const [activeIndex, setActiveIndex] = useState(null);

  // 클릭 핸들러
  const handleClick = (index) => {
    setActiveIndex(index);
  };

  // 링크 데이터 (예시)
  const links = [
    { id: 1, text: 'Link 1', content: 'This is the content for Link 1.' },
    { id: 2, text: 'Link 2', content: 'This is the content for Link 2.' },
    { id: 3, text: 'Link 3', content: 'This is the content for Link 3.' },
  ];

  return (
    <div>
      {links.map((link, index) => (
        <a
          key={link.id}
          href="#"
          onClick={(e) => {
            e.preventDefault(); // 기본 링크 동작 방지
            handleClick(index);
          }}
          className={activeIndex === index ? 'show' : ''}
        >
          {link.text}
        </a>
      ))}
    </div>
  );
};

export default App;
