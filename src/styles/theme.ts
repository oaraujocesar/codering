const base = {
  easeOutBack: 'cubic-bezier(0.34, 1.56, 0.64, 1)',
  colorWhite: 'rgb(255, 255, 255)',
  colorBlack: 'rgb(0, 0, 0)',
  primaryColor: '#D6AD45'
}

const dark = {
  id: 'dark',
  ...base,
  backgroundColor: '#303030',
  shadeOne: '#424242'
}

const light = {
  id: 'light',
  ...base,
  backgroundColor: '#F4F4F4',
  shadeOne: '#E6E6E6'
}

export type MyTheme = typeof dark

export const theme = { dark, light }
