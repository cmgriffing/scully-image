export const baseInputs = [
  {
    name: 'src',
    type: 'string',
    defaultValue: '',
    description: 'The url or path for the img.',
  },
  {
    name: 'pixelWidth',
    type: 'number',
    description:
      'The width of the img in the page. This is used primarily for layout purposes. Also used to resize the original image. If you do not pass this or a pixelHeight, the image is considered "fluid".',
  },
  {
    name: 'pixelHeight',
    type: 'number',
    description:
      'The height of the img in the page. This is used primarily for layout purposes. Also used to resize the original image. If you do not pass this or a pixelWidth, the image is considered "fluid".',
  },
  {
    name: 'fluidMaxWidth',
    type: 'number',
    description:
      'The maximum width of the resized version of the original image. This is used primarily for resizing purposes. If you do not pass this or a fluidMaxHeight, the original image is used as the final loaded src.',
  },
  {
    name: 'fluidMaxHeight',
    type: 'number',
    description:
      'The maximum height of the resized version of the original image. This is used primarily for resizing purposes. If you do not pass this or a fluidMaxWidth, the original image is used as the final loaded src.',
  },
  {
    name: 'lazy',
    type: 'boolean',
    defaultValue: 'true',
    description:
      'Whether the image should wait until an intersection observer event or start preloading immediately.',
  },
  {
    name: 'pluginOptions',
    type: 'blurOptions | primitivesOptions | tracedOptions',
    defaultValue: '{}',
    description:
      'Options to be passed to the underlying plugins. See individual Interfaces for specific details.',
    fragment: 'pluginOptions',
  },
  {
    name: 'preloader',
    type: 'PreloaderTypes.blur',
    defaultValue: '{}',
    description:
      'A type from the PreloaderTypes enum. Warning: this is used by the plugins themselves as part of the boilerplate. Altering this value can have unexpected results.',
    fragment: 'PreloaderTypes',
  },
];

export const components = [
  {
    id: 'blur',
    title: '<scully-blur-image>',
    imageSource: 'scullyImageLowRes',
    description: '',
    pluginOptions: [
      {
        name: 'width',
        type: 'number',
        defaultValue: '42',
        description:
          'The pixel value to use for the width of the blurred up image. This is meant to be a low value and css will smooth it out in the browser.',
      },
    ],
  },
  {
    id: 'traced',
    title: '<scully-traced-image>',
    imageSource: 'scullyImageTraced',
    description: '',
    pluginOptions: [
      {
        name: 'turnPolicy',
        type: 'tracedTurnPolicies',
        defaultValue: 'TURNPOLICY_MINORITY',
        description:
          'How to resolve ambiguities in path decomposition. See Enums section.',
      },
      {
        name: 'turdSize',
        type: 'number',
        defaultValue: '2',
        description: 'Suppress speckles of up to this size',
      },
      {
        name: 'alphaMax',
        type: 'number',
        defaultValue: '1',
        description: 'Corner threshold parameter',
      },
      {
        name: 'optCurve',
        type: 'boolean',
        defaultValue: 'true',
        description: 'Curve optimization',
      },
      {
        name: 'optTolerance',
        type: 'number',
        defaultValue: '0.2',
        description: 'Curve optimization tolerance',
      },
      {
        name: 'threshold',
        type: 'number',
        defaultValue: 'THRESHOLD_AUTO',
        description:
          'Threshold below which color is considered black. Should be a number in range 0 - 255 or THRESHOLD_AUTO in which case threshold will be selected automatically',
      },
      {
        name: 'blackOnWhite',
        type: 'boolean',
        defaultValue: 'true',
        description:
          'specifies colors by which side from threshold should be turned into vector shape',
      },
      {
        name: 'color',
        type: 'string',
        defaultValue: 'COLOR_AUTO',
        description:
          'Fill color. (default: COLOR_AUTO, which means black or white, depending on blackOnWhite property)',
      },
      {
        name: 'background',
        type: 'string',
        defaultValue: 'COLOR_TRANSPARENT',
        description: 'Background color.',
      },
    ],
  },
  {
    id: 'primitives',
    title: '<scully-primitives-image>',
    imageSource: 'scullyImagePrimitives',
    description: 'scullyImageTraced',
    pluginOptions: [
      {
        name: 'numSteps',
        type: 'number',
        description: 'Number of steps to process [1, 1000]',
        defaultValue: 200,
      },
      {
        name: 'minEnergy',
        type: 'number',
        description: ' Minimum energy to stop processing early [0, 1]',
      },
      {
        name: 'shapeAlpha',
        type: 'number',
        description: 'Alpha opacity of shapes [0, 255]',
        defaultValue: 128,
      },
      {
        name: 'shapeType',
        type: 'string',
        description: 'Type of shapes to use',
        defaultValue: 'triangle',
      },
      {
        name: 'numCandidates',
        type: 'number',
        description: 'Number of top-level candidates per step [1, 32]',
        defaultValue: 1,
      },
      {
        name: 'numCandidateShapes',
        type: 'number',
        description: 'Number of random candidate shapes per step [10, 1000]',
        defaultValue: 50,
      },
      {
        name: 'numCandidateMutations',
        type: 'number',
        description: 'Number of candidate mutations per step [10, 500]',
        defaultValue: 100,
      },
      {
        name: 'numCandidateExtras',
        type: 'number',
        description: 'Number of extra candidate shapes per step [0, 16]',
        defaultValue: 0,
      },
    ],
  },
];
