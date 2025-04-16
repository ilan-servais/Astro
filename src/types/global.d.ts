interface Window {
  Prism: {
    highlightAll: () => void;
    [key: string]: any;
  };
  fadeToAction: (name: string, duration: number) => void;
  updateMorphTarget: (expressionName: string, value: string | number) => void;
}

// Type for Alpine.js instance data
interface AlpineElement extends Element {
  __x?: {
    $data: {
      animationState: string;
      [key: string]: any;
    };
  };
}
