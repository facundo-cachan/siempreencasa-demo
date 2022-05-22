const size = {
   mobileS: 320,
   mobileM: 375,
   mobileL: 425,
   tablet: 768,
   laptop: 1024,
   laptopL: 1440,
   desktop: 2560
}
export const device = {
   mobileS: `(max-device-width: ${size.mobileS}px)`,
   mobileM: `(min-device-width: ${size.mobileS}px) and (max-device-width: ${size.mobileM}px)`,
   mobileL: `(min-device-width: ${size.mobileM}px) and (max-device-width: ${size.mobileL}px)`,
   tablet: `(min-device-width: ${size.mobileL}px) and (max-device-width: ${size.tablet}px)`,
   laptop: `(min-device-width: ${size.tablet}px) and (max-device-width: ${size.laptop}px)`,
   laptopL: `(min-device-width: ${size.laptop}px) and (max-device-width: ${size.laptopL}px)`,
   desktop: `(min-device-width: ${size.laptopL}px)`,
};
