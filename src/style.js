import { createGlobalStyle } from 'styled-components'

export const Globalstyle = createGlobalStyle`　
html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed, 
figure, figcaption, footer, header, hgroup, 
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
	margin: 0;
	padding: 0;
	border: 0;
	font-size: 100%;
	font: inherit;
	vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure, 
footer, header, hgroup, menu, nav, section {
	display: block;
}
body {
	line-height: 1;
}
ol, ul {
	list-style: none;
}
blockquote, q {
	quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
	content: '';
	content: none;
}
table {
	border-collapse: collapse;
	border-spacing: 0;
}

@font-face {font-family: "iconfont";
  src: url('./iconfont.eot?t=1547623717668'); /* IE9 */
  src: url('./iconfont.eot?t=1547623717668#iefix') format('embedded-opentype'), /* IE6-IE8 */
  url('data:application/x-font-woff2;charset=utf-8;base64,d09GMgABAAAAAARoAAsAAAAACKQAAAQaAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHEIGVgCDMgqEOIQNATYCJAMUCwwABCAFhG0HVBulB8gehY1jaSNJkns/Y30+72/W3yRUNqwLY250xSqhwxg9lFWVP7EnLl9uxH/d9t39OUstgiiKImgSDTCUgqSerQ3+9z+X06b4/HaWy5rD1qZegNEEysIxFi6QDrRAAvOWwxleHaeBALiJ4pG5sr4dThJ9EgGQTfe74UyoSRWJhBNhL1hZICdsnG0DfRHANu/75ENqnABl69BnNq8VPhQ/w7/OZMv/X47pDgac4YwA2HUAA8QDJCB7obkHC8LxGC73lxQDOCeKDtUr/OuErzP/n4i/ISk3xBjij0dJQAZ0cX8gFoukg+NYCDD4OhwBAl8nIEDh60zugxHbsJQP5LkIJGMHwodEJ0VJk8Mhjx09sr/TOUJetPHZaGuyd96lW+Ttt+e3E+6SkZcVkdzf4cpXi1Y8yHrqrZDj0+R33nG99VbHqD0jNu0btXfkyLffVt98s722w7VAbe8ImMk0vnfvxt0AqcOsGVmgPXiHiMxU7qZ3isSeTZdWLOyDXfsOg7jav513y1Om7p3ID4+e7L4jbwJ4+EO+8WWywuVa4b1ffsft81h+yZueICQ1rCb8WZGQVp6aWp6UqW4OJ2XTp4W2RewISUsL2XHy1OSjI4oPPnhw82pD/XdXr35HPztZXFEh6dj0soilzx1dT9fS548EN2LGzz/mjNK4TZ9d2UsO0C9vxmz7LGXvEm/K9e+S3TRf6dDIJc8eWluX4ewQuZiMem7YR7INsccX1/eR/QTtELsFeYtj4MAZ0UYR3fXEE7uYwQCmvevOJ57cRYsCMW8NHHhgbNrYjM9+Y6uvXVuNBAxMdDWNmC4DUIOHWtVr0eWviYH/e8re7ips6qClHr3wHenvwqD1VHYSsZUkGjGqPmCGXFec++VMl/XCmBF/j434MWIi5gOA/2HPsRqPLPuG5ZNjD1kJdt5f8Rv03P8dnjUo/1enLAEA3vX9FwGu/5HQnf1qJWjM+Qc4DaskhadrbCWVW2zJYpMaU4PKDRzw5u1DfTyMdETjeIBwGhEB5TABGKdwrESMBxtZOtg5FQEXp2q9bBgTQ6ofgFhrEBCDXQNqoAfADPYSViJ+BDYjfQt2g8OAUzNsR1lkdF5mCrclfIpngaJ7jT7N1FncT2wV/jk9bjPO80iqMIO6T0lJTE7HqkSfMIeYE5zrT7UsTdFMo1epROeJnh5DCZhGl/BaiZ2WFchNStKKXpToNXrBlTEJbhbBR+GxgELnZeijOfUtPPP5VoLfHD3czIqKMr1KMAXp3StSJEpugK0S9zWquJT+QXP5pbJYNDJOYzL0UlSCUegxwgZFoHhYF8HLkqizQzAgVxKupTUVJ04v7b3HHQCcPtgWShiRiI3YIR/8gqCwklPSsnjnHHffAt1RcM0K+H3uLh1CtMQNAAAA') format('woff2'),
  url('./iconfont.woff?t=1547623717668') format('woff'),
  url('./iconfont.ttf?t=1547623717668') format('truetype'), /* chrome, firefox, opera, Safari, Android, iOS 4.2+ */
  url('./iconfont.svg?t=1547623717668#iconfont') format('svg'); /* iOS 4.1- */
}

.iconfont {
  font-family: "iconfont" !important;
  font-size: 16px;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.icon-iconset0137:before {
  content: "\e624";
}

.icon-huanyihuan:before {
  content: "\e62d";
}

.icon-fangdajing:before {
  content: "\e614";
}

.icon-Aa:before {
  content: "\e636";
}

`
