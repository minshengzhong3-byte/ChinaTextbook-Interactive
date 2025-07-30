import React from 'react';
import { useParams } from 'react-router-dom';

const chapterDetails = {
  1: {
    title: "小数除法",
    content: "通过实际生活场景理解小数除法概念，掌握竖式计算方法，学会解决购物找零、物品分配等实际问题。",
    examples: [
      "例1：3.6元买6支铅笔，每支多少钱？",
      "例2：7.5米布料做3件衣服，每件用布多少米？"
    ],
    images: [
      "https://via.placeholder.com/300x150?text=小数除法示例1",
      "https://via.placeholder.com/300x150?text=小数除法示例2"
    ]
  },
  2: {
    title: "轴对称和平移",
    content: "认识轴对称图形特征，掌握平移规律，能在方格纸上画出简单图形的对称轴和平移后的图形。",
    examples: [
      "例1：画出等腰三角形的对称轴",
      "例2：将长方形向右平移5格"
    ],
    images: [
      "https://via.placeholder.com/300x150?text=轴对称示例",
      "https://via.placeholder.com/300x150?text=平移示例"
    ]
  }
};

function ChapterContent() {
  const { id } = useParams();
  const chapter = chapterDetails[id];

  return (
    <div className="chapter-content">
      <h2>第{id}章：{chapter.title}</h2>
      <p className="chapter-description">{chapter.content}</p>
      
      <div className="examples">
        <h3>示例解析</h3>
        {chapter.examples.map((example, index) => (
          <div key={index} className="example">
            <p>{example}</p>
            <img src={chapter.images[index]} alt={`示例${index+1}`} />
          </div>
        ))}
      </div>
      
      <div className="navigation">
        <button onClick={() => window.history.back()}>返回目录</button>
        <button><a href={`/exercise/${id}`}>开始练习</a></button>
      </div>
    </div>
  );
}

export default ChapterContent;