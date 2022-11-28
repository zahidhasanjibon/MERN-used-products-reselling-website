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
    <section class="category-section">
      <div class="category-wrapper">
        <div class="left-image">
          <div class="left-first">
            <div class="relative-ji hidden-ji same-size margin">
              <img
                src={e4}
                alt="sale"
                class="width trans"
              />
              <div class="absolute-ji center cate-name-style bal">SALE</div>
            </div>
            <div class="relative-ji hidden-ji same-size margin">
              <img src={e5} class="width trans" />
              <div class="absolute-ji center cate-name-style">NEW</div>
            </div>
          </div>
          <div class="left-second">
            <div class="relative-ji hidden-ji mid-size margin">
              <img src={e7} class="width trans" />
              <div class="absolute-ji center cate-name-style">WOMEN</div>
            </div>
          </div>
        </div>

        <div class="right-image">
          <div class="right-first">
            <div class="relative-ji hidden-ji same-size margin">
              <img src={e9} class="width trans" />
              <div class="absolute-ji center cate-name-style">MEN</div>
            </div>
            <div class="relative-ji hidden-ji same-size margin">
              <img src={e3} class="width trans" />
              <div class="absolute-ji center cate-name-style">ACCeSSORIES</div>
            </div>
          </div>
          <div class="right-second">
            <div class="relative-ji hidden-ji large-size margin">
              <img src={e6} class="width trans" />
              <div class="absolute-ji center cate-name-style">SHOE</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
