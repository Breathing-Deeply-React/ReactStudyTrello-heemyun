// device
const deviceSizes = {
  global: '1440px',
  tablet: '768px',
  mobile: '360px'
};

export const device = {
  global: `screen and (max-width: ${deviceSizes.global})`,
  tablet: `screen and (max-width: ${deviceSizes.tablet})`,
  mobile: `screen and (max-width: ${deviceSizes.mobile})`
};
