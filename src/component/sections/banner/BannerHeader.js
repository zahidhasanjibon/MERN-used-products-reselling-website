/* eslint-disable jsx-a11y/alt-text */
import e3 from "../../../assests/img/e3.jpg";
import e4 from "../../../assests/img/e4.jpg";
import e5 from "../../../assests/img/e5.jpg";
import e6 from "../../../assests/img/e6.jpg";
import e7 from "../../../assests/img/e7.jpg";
import e9 from "../../../assests/img/e9.jpg";
import "./banner.css";

export default function BannerHeader() {
  return (
    <section className="category-section">
      <div className="category-wrapper">
        <div className="left-image">
          <div className="left-first">
            <div className="relative-ji hidden-ji same-size margin">
              <img
                src={e4}
                alt="sale"
                className="width trans"
              />
              <div className="absolute-ji center cate-name-style bal">SALE</div>
            </div>
            <div className="relative-ji hidden-ji same-size margin">
              <img src={e5} className="width trans" />
              <div className="absolute-ji center cate-name-style">NEW</div>
            </div>
          </div>
          <div className="left-second">
            <div className="relative-ji hidden-ji mid-size margin">
              <img src={e7} className="width trans" />
              <div className="absolute-ji center cate-name-style">WOMEN</div>
            </div>
          </div>
        </div>

        <div className="right-image">
          <div className="right-first">
            <div className="relative-ji hidden-ji same-size margin">
              <img src={e9} className="width trans" />
              <div className="absolute-ji center cate-name-style">MEN</div>
            </div>
            <div className="relative-ji hidden-ji same-size margin">
              <img src={e3} className="width trans" />
              <div className="absolute-ji center cate-name-style">ACCeSSORIES</div>
            </div>
          </div>
          <div className="right-second">
            <div className="relative-ji hidden-ji large-size margin">
              <img src={e6} className="width trans" />
              <div className="absolute-ji center cate-name-style">SHOE</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
