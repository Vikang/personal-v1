//color too light

// export const BeigeTheme = {
//     body:"#e1d8ce",
//     text:"#FFFFFF",
//     fontFamily:"'Playfair Display', serif",
//     bodyRgba : "225, 216, 206, 255",
//     textRgba:"255,255,255",
// }

//maybe
import { css } from 'styled-components';

export const BeigeTheme = {
    body:"#D4cbc1",
    text:"#FFFFFF",
    fontFamily:"'Playfair Display', serif",
    bodyRgba : "225, 216, 206, 255",
    textRgba:"255,255,255",

    navHeight: '5rem',
    boxShadow: css`
    box-shadow: 0 10px 30px -15px #b7b7b7;
    transition: transform 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);
    &:hover,
    &:focus {
        box-shadow: 0 20px 30px -15px #b7b7b7;
        }
    `,
    flexCenter: css`
    display: flex;
    justify-content: center;
    align-items: center;
  `,
  inlineLink: css`
    display: inline-block;
    text-decoration: none;
    text-decoration-skip-ink: auto;
    position: relative;
    transition: transform 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);
    color: #a87f6e;
    &:hover,
    &:focus,
    &:active {
      color: #a87f6e;
      outline: 0;
      &:after {
        width: 100%;
      }
      & > * {
        color: #a87f6e !important;
        transition: var(--transition);
      }
    }
    &:after {
      content: '';
      display: block;
      width: 0;
      height: 1px;
      position: relative;
      bottom: 0.37em;
      background-color: #a87f6e;
      transition: var(--transition);
      opacity: 0.5;
    }
  `,
  smallButton: css`
  color: #a87f6e;
  background-color: transparent;
  border: 1px solid #a87f6e;
  border-radius: 4px;
  padding: 0.75rem 1rem;
  font-size: 13px;
  font-family: 'Playfair Display', serif;;
  line-height: 1;
  text-decoration: none;
  cursor: pointer;
  transition: var(--transition);
  &:hover,
  &:focus,
  &:active {
    background-color: var(--green-tint);
    outline: none;
  }
  &:after {
    display: none !important;
  }
 `,
    resetList: css`
    list-style: none;
    padding: 0;
    margin: 0;
    `,
}


export const DarkTheme = {
    body:"#D4cbc1",
    text:"#FFFFFF",
    fontFamily:"'Playfair Display', serif",
    bodyRgba : "225, 216, 206, 255",
    textRgba:"255,255,255",
}

// export const BeigeTheme = {
//     body:"#C6c1b5",
//     text:"#FFFFFF",
//     fontFamily:"'Playfair Display', serif",
//     bodyRgba : "198, 193, 181, 1",
//     textRgba:"255,255,255",
// }