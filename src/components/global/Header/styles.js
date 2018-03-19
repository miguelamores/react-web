import css from 'styled-jsx/css'

export const myStyle = css`
$color: #AC1D3A;
$search-field-color: #ffffff;


.header {
    background-color: $color
}
@media (max-width: 47.99em) {
    .header {
        position: fixed;
        top: 0px;
        width: 100vw;
        height: 112px;
        z-index: 99; }
        .header + * {
        margin-top: 112px; } }
.header .container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 12px 28px;
    position: relative; }
    @media (max-width: 47.99em) {
        .header .container {
        padding: 12px 14px 57px; } }
.header__left {
    display: flex;
    align-items: center;
    flex-grow: 1
    }
    @media (max-width: 477.99em) {
        .header-left {
            justify-content: space-between;}}
.header__search {
    display: flex;
    height: 36px;
    width: 400px;
    border-radius: 100px;
    background-color: $search-field-color;
    align-items: center;
    position: relative;}
.header__search__field {
    flex-grow: 1;
    font-family: arial;
    font-size: 14px;
    line-height: 17px;
    padding: 10px 14px 9px 24px;
    border: none;
    outline: none;
    background: transparent;}
.header__icon {
    display: flex;
    align-items: center;
    margin: 0px; }
.header__icon img {
    width: 63px; }
        
        
        
`





export default css`div { color: green; }`