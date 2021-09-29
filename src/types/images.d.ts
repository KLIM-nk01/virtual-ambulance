declare module '*.jpg';
declare module '*.jpeg';
declare module '*.svg';

interface SvgComponent extends React.FunctionComponent<React.SVGAttributes<SVGElement>> {}

declare module '*.png' {
  const svgUrl: string;
  const svgComponent: SvgComponent;
  export default svgUrl;
  export { svgComponent as ReactComponent };
}

declare module '*.svg' {
  const svgUrl: string;
  const svgComponent: SvgComponent;
  export default svgUrl;
  export { svgComponent as ReactComponent };
}
