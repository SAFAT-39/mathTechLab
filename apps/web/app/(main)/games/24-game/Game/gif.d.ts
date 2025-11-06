declare module 'gif.js' {
  interface GIFOptions {
    workers?: number;
    quality?: number;
    width: number;
    height: number;
    workerScript?: string;
    repeat?: number;
    background?: string;
    transparent?: string;
  }

  interface FrameOptions {
    delay?: number;
    copy?: boolean;
    dispose?: number;
  }

  class GIF {
    constructor(options: GIFOptions);
    addFrame(image: HTMLImageElement | HTMLCanvasElement | CanvasRenderingContext2D | ImageData, options?: FrameOptions): void;
    on(event: 'finished', callback: (blob: Blob) => void): void;
    on(event: 'progress', callback: (percent: number) => void): void;
    render(): void;
  }

  export default GIF;
}

