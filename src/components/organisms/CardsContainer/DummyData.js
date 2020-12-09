import {
  loremIpsum, fullname,
} from 'react-lorem-ipsum';

export const DummyProjects = [
  {
    id: 0,
    image: 'https://picsum.photos/id/1020/400/300',
    title: loremIpsum({ avgWordsPerSentence: 3, avgSentencesPerParagraph: 1 }),
    content: loremIpsum({ avgSentencesPerParagraph: 8 }),
  },
  {
    id: 1,
    image: 'https://picsum.photos/id/102/400/300',
    title: loremIpsum({ avgWordsPerSentence: 3, avgSentencesPerParagraph: 1 }),
    content: loremIpsum({ avgSentencesPerParagraph: 7 }),
  },
  {
    id: 2,
    image: 'https://picsum.photos/id/1026/400/300',
    title: loremIpsum({ avgWordsPerSentence: 3, avgSentencesPerParagraph: 1 }),
    content: loremIpsum({ avgSentencesPerParagraph: 3 }),
  },
  {
    id: 3,
    image: 'https://picsum.photos/id/1042/400/300',
    title: loremIpsum({ avgWordsPerSentence: 3, avgSentencesPerParagraph: 1 }),
    content: loremIpsum({ avgSentencesPerParagraph: 5 }),
  },
  {
    id: 4,
    image: 'https://picsum.photos/id/1047/400/300',
    title: loremIpsum({ avgWordsPerSentence: 3, avgSentencesPerParagraph: 1 }),
    content: loremIpsum({ avgSentencesPerParagraph: 3 }),
  },
  {
    id: 5,
    image: 'https://picsum.photos/id/1058/400/300',
    title: loremIpsum({ avgWordsPerSentence: 3, avgSentencesPerParagraph: 1 }),
    content: loremIpsum({ avgSentencesPerParagraph: 4 }),
  },
  {
    id: 6,
    image: 'https://picsum.photos/id/1080/400/300',
    title: loremIpsum({ avgWordsPerSentence: 3, avgSentencesPerParagraph: 1 }),
    content: loremIpsum({ avgSentencesPerParagraph: 6 }),
  },
];

export const DummyTestimonials = [
  {
    id: 0,
    title: fullname(),
    text: loremIpsum({ avgSentencesPerParagraph: 2 }),
    date: '1976-04-19T12:59-0500',
  },
  {
    id: 1,
    title: fullname(),
    text: loremIpsum({ avgSentencesPerParagraph: 1 }),
    date: '1976-04-19T12:59-0500',
  },
  {
    id: 2,
    title: fullname(),
    text: loremIpsum({ avgSentencesPerParagraph: 3 }),
    date: '1976-04-19T12:59-0500',
  },
  {
    id: 3,
    title: fullname(),
    text: loremIpsum({ avgSentencesPerParagraph: 2 }),
    date: '1976-04-19T12:59-0500',
  },
  {
    id: 4,
    title: fullname(),
    text: loremIpsum({ avgSentencesPerParagraph: 4 }),
    date: '1976-04-19T12:59-0500',
  },
  {
    id: 5,
    title: fullname(),
    text: loremIpsum({ avgSentencesPerParagraph: 2 }),
    date: '1976-04-19T12:59-0500',
  },
  {
    id: 6,
    title: fullname(),
    text: loremIpsum({ avgSentencesPerParagraph: 5 }),
    date: '1976-04-19T12:59-0500',
  },
  {
    id: 7,
    title: fullname(),
    text: loremIpsum({ avgSentencesPerParagraph: 3 }),
    date: '1976-04-19T12:59-0500',
  },
  {
    id: 8,
    title: fullname(),
    text: loremIpsum({ avgSentencesPerParagraph: 1 }),
    date: '1976-04-19T12:59-0500',
  },
  {
    id: 9,
    title: fullname(),
    text: loremIpsum({ avgSentencesPerParagraph: 2 }),
    date: '1976-04-19T12:59-0500',
  },
  {
    id: 10,
    title: fullname(),
    text: loremIpsum({ avgSentencesPerParagraph: 4 }),
    date: '1976-04-19T12:59-0500',
  },
  {
    id: 11,
    title: fullname(),
    text: loremIpsum({ avgSentencesPerParagraph: 3 }),
    date: '1976-04-19T12:59-0500',
  },
];
