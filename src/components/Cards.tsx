import React, { useState } from 'react';
import './Cards.css'
import Card from './Card'

const cardData = [
  {
    thumbnail: "https://rea1i2e.github.io/sample-images/images/picture01.jpg",
    alt: "ボルネオゾウ - 世界で最も小さなゾウ",
    title: "ボルネオゾウについて",
    description: "ボルネオゾウは、ボルネオ島に生息する小型のゾウで、穏やかな性格が特徴です。",
    category: "動物"
  },
  {
    thumbnail: "https://rea1i2e.github.io/sample-images/images/picture02.jpg",
    alt: "オランウータン - 森の賢者",
    title: "オランウータンについて",
    description: "オランウータンは、知能が高く、道具を使うことでも知られています。",
    category: "動物"
  },
  {
    thumbnail: "https://rea1i2e.github.io/sample-images/images/picture03.jpg",
    alt: "テングザル - 長い鼻が特徴",
    title: "テングザルについて",
    description: "テングザルは、そのユニークな長い鼻で知られ、主にボルネオ島に生息しています。",
    category: "動物"
  },
  {
    thumbnail: "https://rea1i2e.github.io/sample-images/images/picture04.jpg",
    alt: "ラフレシアン - 世界最大の花",
    title: "ラフレシアンについて",
    description: "ラフレシアンは、直径1メートルを超えることもある巨大な花で、強烈な匂いを放ちます。",
    category: "植物"
  },
  {
    thumbnail: "https://rea1i2e.github.io/sample-images/images/picture05.jpg",
    alt: "クラン川 - クアラルンプールを流れる川",
    title: "クラン川について",
    description: "マレーシアのクラン川は、首都クアラルンプールを流れる重要な水路です。",
  },
];

export default function Cards() {
  const [selectedCategory, setSelectedCategory] = useState('すべて');

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  return (
    <section className="p-cards l-cards">
      <div className="p-cards__inner l-inner">
        <h2 className="p-cards__heading">Reactでブログカードを作る</h2>
        <select onChange={handleCategoryChange} value={selectedCategory}>
          <option value="すべて">すべて</option>
          <option value="動物">動物</option>
          <option value="植物">植物</option>
        </select>
        <ul className="p-cards__list">
          {cardData
          .filter(card => selectedCategory === 'すべて' || card.category === selectedCategory)
          .map((card, index) => (
            <Card
              key={index}
              thumbnail={card.thumbnail}
              alt={card.alt}
              title={card.title}
              description={card.description}
              category={card.category}
            />
          ))}
        </ul>
      </div>
      <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
    </section>
  );
}