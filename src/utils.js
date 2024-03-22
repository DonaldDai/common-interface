export const MaterialList = [
  {
    id: "SF",
    name: "Soft Plastic",
    shortName: "Soft",
    uberOptions: {
      diffuse: Number(1.0),
      specular: Number(0.1),
      shininess: 30,
      opacity: 1.0,
    },
    values: {
      lights: true,
      fog: true,
      depthWrite: true,
      transparent: false,
      toonShading: false,
    },
  },
  // {
  //   id: "DF",
  //   name: "Diffuse",
  //   shortName: "Diffuse",
  //   uberOptions: {
  //     diffuse: Number(1.0),
  //     specular: Number(0.0),
  //     shininess: 1,
  //     opacity: 1.0,
  //   },
  //   values: {
  //     lights: true,
  //     fog: true,
  //     depthWrite: true,
  //     transparent: false,
  //     toonShading: false,
  //   },
  // },
  // {
  //   id: "PL",
  //   name: "Glossy Plastic",
  //   shortName: "Glossy",
  //   uberOptions: {
  //     diffuse: Number(0.56),
  //     specular: Number(0.28),
  //     shininess: 100,
  //     opacity: 1.0,
  //   },
  //   values: {
  //     lights: true,
  //     fog: true,
  //     depthWrite: true,
  //     transparent: false,
  //     toonShading: false,
  //   },
  // },
  // {
  //   id: "ME",
  //   name: "Metal",
  //   shortName: "Metal",
  //   uberOptions: {
  //     diffuse: Number(0.56),
  //     specular: Number(0.55),
  //     shininess: 30,
  //     opacity: 1.0,
  //   },
  //   values: {
  //     lights: true,
  //     fog: true,
  //     depthWrite: true,
  //     transparent: false,
  //     toonShading: false,
  //   },
  // },
  // {
  //   id: "TR",
  //   name: "Transparent",
  //   shortName: "Transparent",
  //   uberOptions: {
  //     diffuse: Number(1.0),
  //     specular: Number(0.0),
  //     shininess: 1,
  //     opacity: 0.5,
  //   },
  //   values: {
  //     lights: true,
  //     fog: true,
  //     depthWrite: true,
  //     transparent: true,
  //     toonShading: false,
  //   },
  // },
  // {
  //   id: "GL",
  //   name: "Glass",
  //   shortName: "Glass",
  //   uberOptions: {
  //     diffuse: Number(0.5),
  //     specular: Number(0.65),
  //     shininess: 100,
  //     opacity: 0.5,
  //   },
  //   values: {
  //     lights: true,
  //     fog: true,
  //     depthWrite: true,
  //     transparent: true,
  //     toonShading: false,
  //   },
  // },
  // {
  //   id: "BA",
  //   name: "Backdrop",
  //   shortName: "Backdrop",
  //   uberOptions: {
  //     diffuse: Number(1.0),
  //     specular: Number(0.0),
  //     shininess: 1,
  //     opacity: 1.0,
  //   },
  //   values: {
  //     lights: false,
  //     fog: false,
  //     depthWrite: false,
  //     transparent: false,
  //     toonShading: false,
  //   },
  // },
  // {
  //   id: "TN",
  //   name: "Toon",
  //   shortName: "Toon",
  //   uberOptions: {
  //     diffuse: Number(1.0),
  //     specular: Number(0.0),
  //     shininess: 1,
  //     opacity: 1.0,
  //   },
  //   values: {
  //     lights: true,
  //     fog: true,
  //     depthWrite: true,
  //     transparent: false,
  //     toonShading: true,
  //   },
  // },
  // {
  //   id: "FL",
  //   name: "Flat",
  //   shortName: "Flat",
  //   uberOptions: {
  //     diffuse: Number(1.0),
  //     specular: Number(0.0),
  //     shininess: 0,
  //     opacity: 1.0,
  //   },
  //   values: {
  //     lights: false,
  //     fog: true,
  //     depthWrite: true,
  //     transparent: false,
  //   },
  // },
];

export const ModeList = [
  {
    id: "BS",
    name: "Balls and Sticks",
    shortName: "Balls",
  },
  {
    id: "CA",
    name: "Cartoon",
    shortName: "Cartoon",
  },
  // {
  //   id: "LN",
  //   name: "Lines",
  //   shortName: "Lines",
  // },
  // {
  //   id: "LC",
  //   name: "Licorice",
  //   shortName: "Licorice",
  // },
  // {
  //   id: "VW",
  //   name: "Van der Waals",
  //   shortName: "VDW",
  // },
  // {
  //   id: "TR",
  //   name: "Trace",
  //   shortName: "Trace",
  // },
  // {
  //   id: "TU",
  //   name: "Tube",
  //   shortName: "Tube",
  // },
  // {
  //   id: "QS",
  //   name: "Quick Surface",
  //   shortName: "Quick Surf",
  // },
  // {
  //   id: "SA",
  //   name: "Solvent Accessible Surface",
  //   shortName: "SAS",
  // },
  // {
  //   id: "SE",
  //   name: "Solvent Excluded Surface",
  //   shortName: "SES",
  // },
  // {
  //   id: "CS",
  //   name: "Contact Surface",
  //   shortName: "Contact Surf",
  // },
  // {
  //   id: "TX",
  //   name: "Text mode",
  //   shortName: "Text",
  // },
];

export const ColorList = [
  {
    id: "EL",
    name: "Element",
    shortName: "Element",
  },
  {
    id: "RT",
    name: "Residue Type",
    shortName: "Residue",
  },
  {
    id: "SQ",
    name: "Sequence",
    shortName: "Sequence",
  },
  {
    id: "CH",
    name: "Chain",
    shortName: "Chain",
  },
  {
    id: "SS",
    name: "Secondary Structure",
    shortName: "Structure",
  },
  {
    id: "UN",
    name: "Uniform",
    shortName: "Uniform",
  },
  {
    id: "CO",
    name: "Conditional",
    shortName: "Conditional",
  },
  {
    id: "CF",
    name: "Conformation",
    shortName: "Conformation",
  },
  {
    id: "SA",
    name: "Solvent Accessible Surface",
    shortName: "SAS",
  },
  {
    id: "TM",
    name: "Temperature",
    shortName: "Temperature",
  },
  {
    id: "OC",
    name: "Occupancy",
    shortName: "Occupancy",
  },
  {
    id: "HY",
    name: "Hydrophobicity",
    shortName: "Hydrophobicity",
  },
  {
    id: "MO",
    name: "Molecule",
    shortName: "Molecule",
  },
  {
    id: "CB",
    name: "Carbon",
    shortName: "Carbon",
  },
];
