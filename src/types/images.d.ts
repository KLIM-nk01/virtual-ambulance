declare module '*.jpg';
declare module '*.jpeg';


interface SvgComponent
    extends React.FunctionComponent<React.SVGAttributes<SVGElement>> {}

declare module '*.png' {
    const svgUrl: string;
    const svgComponent: SvgComponent;
    export default svgUrl;
    export { svgComponent as ReactComponent };
}

