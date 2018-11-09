import { injectGlobal } from 'styled-components'
import '@atlaskit/css-reset'
import 'bootstrap/dist/css/bootstrap.css'

import theme from 'theme'

injectGlobal`
  body,
  * {
    font-family: 'Arsenal', 'Hiragino Kaku Gothic Pro', 'Hiragino Kaku Gothic ProN', 'ヒラギノ角ゴ Pro W3', メイリオ, 'MS Pゴシック', 'ＭＳ ゴシック', 'YuGothic', Meiryo, sans-serif;
  }

  #app {
    background-color: #fafafa;
    min-height: 100%;
    min-width: 100%;
  }


  /* Blog Button's styles */
  .btn-blog {
    background-color: ${theme.orangePrimary};
    border-color: ${theme.orangePrimary};
    color: white;
    min-width: 140px;
    border-radius: 999px;

    &:hover,
    &:focus,
    &:active {
      background-color: ${theme.orangeDark} !important;
      border-color: ${theme.orangeDark} !important;
    }
  }
`
