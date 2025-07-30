import React from 'react';
import { Link } from 'react-router-dom';

const chapterData = [
  { id: 1, title: '小数除法', pages: 'P5-P25' },
  { id: 2, title: '轴对称和平移', pages: 'P26-P35' },
  { id: 3, title: '倍数与因数', pages: 'P36-P45' },
  { id: 4, title: '多边形面积', pages: 'P46-P65' },
  { id: 5, title: '分数的意义', pages: 'P66-P85' },
  { id: 6, title: '组合图形面积', pages: 'P86-P95' }
];

function ChapterList() {
  return (
    <div className="chapter-list">
      <h2>目录</h2>
      {chapterData.map(chapter => (
        <div key={chapter.id} className="chapter-card">
          <Link to={`/chapter/${chapter.id}`}>
            <h3>第{chapter.id}章：{chapter.title}</h3>
            <p>页码范围：{chapter.pages}</p>
          </Link>
        </div>
      ))}
    </div>
  );
}

export default ChapterList;