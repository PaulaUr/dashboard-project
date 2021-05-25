export const FAKE_DATA = [
  {
    id: 0,
    quantity: 567,
    icon: 'person-bounding-box',
    src: null,
    description: 'People detected',
  },
  {
    id: 1,
    quantity: 192,
    icon: null,
    src: 'camera-vigilance.svg',
    description: 'People see camera',
  },
  {
    id: 2,
    quantity: "45''",
    icon: 'clock',
    src: null,
    description: 'Total attention time',
  },
  {
    id: 3,
    quantity: '41%',
    icon: 'funnel-fill',
    src: null,
    description: 'Percentaje of cent',
  },
  {
    id: 4,
    quantity: '32%',
    icon: null,
    src: 'medical-mask.svg',
    description: 'Use mask',
  },
];

export const FAKE_DATA_GENDER = [
  {
    id: 0,
    typeOfData: 'Gender',
    gender: 'Women',
    quantity: '42.5%',
    icon: null,
    src: 'woman.svg',
    description: '13 people',
  },
  {
    id: 1,
    typeOfData: 'Gender',
    gender: 'Men',
    quantity: '56%',
    icon: null,
    src: 'man.svg',
    description: '25 people',
  },
  {
    id: 2,
    typeOfData: 'Gender',
    gender: 'Undetected',
    quantity: '1.5%',
    icon: null,
    src: 'question.svg',
    description: '25 people',
  },
];
export const FAKE_DATA_AGE = [
  {
    gender: 'Women',
    data: [
      {
        id: 0,
        typeOfData: 'Age',
        gender: 'Women',
        quantity: 45,
        label: 'Under 16',
      },
      {
        id: 1,
        typeOfData: 'Age',
        gender: 'Women',
        quantity: 23,
        label: '16-34',
      },
      {
        id: 2,
        typeOfData: 'Age',
        gender: 'Women',
        quantity: 12,
        label: '35-64',
      },
      {
        id: 3,
        typeOfData: 'Age',
        gender: 'Women',
        quantity: 14,
        label: 'Over 65',
      },
      {
        id: 4,
        typeOfData: 'Age',
        gender: 'Women',
        quantity: 4,
        label: 'Undetected',
      },
    ],
  },
  {
    gender: 'Men',
    data: [
      {
        id: 0,
        typeOfData: 'Age',
        gender: 'Men',
        quantity: 42,
        label: 'Under 16',
      },
      {
        id: 1,
        typeOfData: 'Age',
        gender: 'Men',
        quantity: 15,
        label: '16-34',
      },
      {
        id: 2,
        typeOfData: 'Age',
        gender: 'Men',
        quantity: 30,
        label: '35-64',
      },
      {
        id: 3,
        typeOfData: 'Age',
        gender: 'Men',
        quantity: 35,
        label: 'Over 65',
      },
      {
        id: 4,
        typeOfData: 'Age',
        gender: 'Men',
        quantity: 0,
        label: 'Undetected',
      },
    ],
  },
];
export const FAKE_DATA_CATEGORIES = [
  {
    id: 0,
    title: 'Organization',
    list: [
      'Organization 1',
      'Organization 2',
      'Organization 3',
      'Organization 4',
      'Organization 5',
      'Organization 6',
    ],
  },
  {
    id: 1,
    title: 'Age',
    list: ['Under 16', '16-34', '35-64', 'Over 65', 'Undetected'],
  },
  {
    id: 2,
    title: 'Gender',
    list: ['Women', 'Men', 'Undetected'],
  },
  {
    id: 3,
    title: 'Mask',
    list: ['With mask', 'Without mask'],
  },
  {
    id: 4,
    title: 'Day of the week',
    list: [
      'Monday',
      'Tuesday',
      'Wednesday',
      'Thursday',
      'Friday',
      'Saturday',
      'Sunday',
    ],
  },
];
