import css from 'styled-jsx/css'

export const TopSliderStyle = css`

@media (min-width: 90em) {
    .top-slider {
      width: 1114px; } }
  .top-slider__item {
    height: 100%; }
    .top-slider__item img {
      width: 100%; }
  .top-slider .slick-slider {
    position: relative; }
  .top-slider .slick-arrow {
    background-color: transparent;
    border: none;
    border-radius: 0px;
    position: absolute;
    bottom: 20px;
    z-index: 1;
    height: 46px;
    width: 46px;
    line-height: 0;
    font-size: 0;
    cursor: pointer;
    outline: none; }
    .top-slider .slick-arrow.slick-prev {
      background-image: url("./svg/slider-left-arrow.svg");
      left: 20px; }
    .top-slider .slick-arrow.slick-next {
      background-image: url("./svg/slider-right-arrow.svg");
      left: 78px; }
  .top-slider .slick-dots {
    position: absolute;
    bottom: 7px;
    list-style: none;
    padding: 0;
    display: flex !important;
    justify-content: center;
    margin: 0 auto;
    width: 100%; }
    .top-slider .slick-dots li {
      margin-right: 6px; }
      .top-slider .slick-dots li button {
        display: block;
        height: 6px;
        width: 6px;
        border: 0;
        padding: 0;
        border-radius: 50%;
        font-size: 0;
        line-height: 0;
        background-color: #ffffff;
        opacity: 0.6; }
      .top-slider .slick-dots li.slick-active button {
        opacity: 1; }      
        
        
`

export const TopSliderSass = css`
@import 'styles/_core.scss';

.top-slider {
    width: 100%;

    @include mq($from: wide) {
        width: 1114px;
    }

    &__item {
        height: 100%;

        img {
            width: 100%;
        }
    }

    .slick-slider {
        position: relative;
    }

    .slick-arrow {
        background-color: transparent;
        border: none;
        border-radius: 0px;
        position: absolute;
        bottom: 20px;
        z-index: 1;
        height: 46px;
        width: 46px;
        line-height: 0;
        font-size: 0;
        cursor: pointer;
        outline: none;

        &.slick-prev {
            background-image: url('./svg/slider-left-arrow.svg');
            left: 20px;
        }

        &.slick-next {
            background-image: url('./svg/slider-right-arrow.svg');
            left: 78px;
        }
    }

    .slick-dots {
        position: absolute;
        bottom: 7px;
        list-style: none;
        padding: 0;
        display: flex !important;
        justify-content: center;
        margin: 0 auto;
        width: 100%;

        li {
            margin-right: 6px;

            button {
                display: block;
                height: 6px;
                width: 6px;
                border: 0;
                padding: 0;
                border-radius: 50%;
                font-size: 0;
                line-height: 0;
                background-color: $white;
                opacity: 0.6;
            }

            &.slick-active {
                button {
                    opacity: 1;
                }
            }
        }
    }
}


`