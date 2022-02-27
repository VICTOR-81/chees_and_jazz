import React from "react";
import GastronomyItem from "../gastronomy/gastronomy_item/GastronomyItem";
import MobileHeader from "../mobile_artist_page/mobile_header/MobileHeader";
import itemlogo1 from "../../assets/images/partners/gastronomyitem-logo-1.png";
import itemlogo2 from "../../assets/images/partners/gastronomyitem-logo-2.png";
import itemlogo3 from "../../assets/images/partners/gastronomyitem-logo-3.png";
import itemlogo4 from "../../assets/images/partners/gastronomyitem-logo-4.png";
import itemlogo5 from "../../assets/images/partners/gastronomyitem-logo-5.png";
import itemlogo6 from "../../assets/images/partners/gastronomyitem-logo-6.png";
import itemlogo7 from "../../assets/images/partners/gastronomyitem-logo-7.png";
import './mobile_gastronomy.scss'

function MobileGastronomy() {

  return (

    <div className="mobilegastronomy">
      <MobileHeader />
      <div className="gastronomybox__title-inner">
        <div className="gastronomybox__title">
          Гастрономия Гастрономия&nbsp;
        </div>
      </div>
      <div className="gastronomybox__grid">
        <GastronomyItem title="EPICA" text="Йогурты с высоким содержанием белка и 100% натуральным составом." img={itemlogo1} />
        <GastronomyItem title="brisket bbq" text="Проект с техасским барбекю от Аркадия Новикова." img={itemlogo3} />
        <GastronomyItem title="acai family" text="Боулы и смузи с настоящими бразильскими ягодами асаи." img={itemlogo4} />
        <GastronomyItem title="porsche cafe" text="Тонкие ароматы, насыщенные вкусы и сбалансированные блюда." img={itemlogo5} />
        {/* <GastronomyItem title="Gastromarket by Sysoev" text="Фуд-корт с замысловатой уличной едой лучших проектов Москвы." img={itemlogo2} />
        <GastronomyItem title="Веранда 32.05" text="Жизнерадостные беспечные завтраки и гастрономические ужины." img={itemlogo6} />
        <GastronomyItem title="Stella Artois Non Alcohol" text="Безалкогольный сорт бельгийского пива." img={itemlogo7} />
        <GastronomyItem title="Beefeater Pink" text="Освежающие коктейли на лондонском розовом джине." img={itemlogo1} />
        <GastronomyItem title="Кафе Jardin" text="Ароматный кофе и кофейные коктейли." img={itemlogo1} />
        <GastronomyItem title="San Benedetto" text="Вода и освежающие безалкогольные коктейли." img={itemlogo1} />
        <GastronomyItem title="No Name Dog" text="Хот-доги с беконовым джемом." img={itemlogo1} />
        <GastronomyItem title="Чешско место" text="Чешские колбаски и стритфуд." img={itemlogo1} /> */}
      </div>
      <div className="mobilegastronomy__btn">
      <button>все точки (12)</button>
      </div>
    </div>


  );

};

export default MobileGastronomy;