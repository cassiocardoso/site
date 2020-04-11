export const sizes = {
  tablet: 768,
  desktop: 1024,
	fullHd: 1920,
};

export const mediaV2 = {
	phoneOnly: `(max-width: ${sizes.tablet - 1}px)`,
	tablet: `(min-width: ${sizes.tablet}px)`,
	desktop: `(min-width: ${sizes.desktop}px)`,
	fullHd: `(min-width: ${sizes.fullHd}px)`,
};
