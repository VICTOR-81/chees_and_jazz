import React from "react";
import './gastronomy-box.scss'
import Btnbayticket from "../../menu/btnbayticket/Btnbayticket";
import GastronomyItem from "../gastronomy_item/GastronomyItem";
import itemlogo1 from "../../../assets/images/partners/gastronomyitem-logo-1.png";
import itemlogo2 from "../../../assets/images/partners/gastronomyitem-logo-2.png";
import itemlogo3 from "../../../assets/images/partners/gastronomyitem-logo-3.png";
import itemlogo4 from "../../../assets/images/partners/gastronomyitem-logo-4.png";
import itemlogo5 from "../../../assets/images/partners/gastronomyitem-logo-5.png";
import itemlogo6 from "../../../assets/images/partners/gastronomyitem-logo-6.png";
import itemlogo7 from "../../../assets/images/partners/gastronomyitem-logo-7.png";
import vector10 from '../../../assets/images/icons/Vector 10.svg'

function GastronomyBox() {

  return (

    <div className="gastronomybox">
      <div className="gastronomybox__title-wrapper">
        <div className="gastronomybox__title-inner">
          <div className="gastronomybox__title">
            Гастрономия Гастрономия&nbsp;
          </div>
        </div>
        <div className="">
          <Btnbayticket />
        </div>
      </div>
      <div className="gastronomybox__grid">
        <GastronomyItem title="EPICA" text="Йогурты с высоким содержанием белка и 100% натуральным составом." img={itemlogo1} />
        <GastronomyItem title="brisket bbq" text="Проект с техасским барбекю от Аркадия Новикова." img={itemlogo3} />
        <GastronomyItem title="acai family" text="Боулы и смузи с настоящими бразильскими ягодами асаи." img={itemlogo4} />
        <GastronomyItem title="porsche cafe" text="Тонкие ароматы, насыщенные вкусы и сбалансированные блюда." img={itemlogo5} />
        <GastronomyItem title="Gastromarket by Sysoev" text="Фуд-корт с замысловатой уличной едой лучших проектов Москвы." img={itemlogo2} />
        <GastronomyItem title="Веранда 32.05" text="Жизнерадостные беспечные завтраки и гастрономические ужины." img={itemlogo6} />
        <GastronomyItem title="Stella Artois Non Alcohol" text="Безалкогольный сорт бельгийского пива." img={itemlogo7} />
        <GastronomyItem title="Beefeater Pink" text="Освежающие коктейли на лондонском розовом джине." img={itemlogo1} />
        <GastronomyItem title="Кафе Jardin" text="Ароматный кофе и кофейные коктейли." img={itemlogo1} />
        <GastronomyItem title="San Benedetto" text="Вода и освежающие безалкогольные коктейли." img={itemlogo1} />
        <GastronomyItem title="No Name Dog" text="Хот-доги с беконовым джемом." img={itemlogo1} />
        <GastronomyItem title="Чешско место" text="Чешские колбаски и стритфуд." img={itemlogo1} />
      </div>
      <div className="gastronomybox__next">
        <span>прошедшие события</span>
        <img src={vector10} alt="" />
        <span>прошедшие события</span>
        <img src={vector10} alt="" />
        <span>прошедшие события</span>
        <img src={vector10} alt="" />
        <span>прошедшие события</span>
        <img src={vector10} alt="" />
        <span>прошедшие события</span>
        <img src={vector10} alt="" />
        <span>прошедшие события</span>
        <img src={vector10} alt="" />
        <span>прошедшие события</span>
        <img src={vector10} alt="" />
        <span>прошедшие события</span>
        <img src={vector10} alt="" />
        <span>прошедшие события</span>
        <img src={vector10} alt="" />
      </div>
    </div>

  );

};

export default GastronomyBox;