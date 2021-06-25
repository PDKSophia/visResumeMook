// global.d.ts
declare module '*.jpg' {
  const jpg: string;
  export default jpg;
}

declare module '*.png' {
  const png: string;
  export default png;
}

declare module 'rc-redux-model';
