const base = {
  easeOutBack: 'cubic-bezier(0.34, 1.56, 0.64, 1)',
  colorWhite: 'rgb(255, 255, 255)',
  colorBlack: 'rgb(0, 0, 0)',
  primaryColor: '#D6AD45'
}

const dark = {
  id: 'dark',
  ...base,
  backgroundColor: '#303030'
}

const light = {
  id: 'light',
  ...base,
  backgroundColor: '#F4F4F4'
}

export const theme = { dark, light }
