const initialState = {
  posts: [
    {
      id: '1',
      title: 'Article title1',
      shortDescription: 'Short description of the article...',
      content: 'Main content of the article',
      publishedDate: new Date('2022-02-01'),
      author: 'John Doe',
      category: ''
    },
    {
      id: '2',
      title: 'Article title2',
      shortDescription: 'Short description of the article...',
      content: 'Main content of the article',
      publishedDate: new Date('2022-02-02'),
      author: 'John Doe',
      category: ''
    },
    {
      id: '3',
      title: 'Article title3',
      shortDescription: 'Short description of the article...',
      content: 'Main content of the article',
      publishedDate: new Date('2022-02-03'),
      author: 'John Doe',
      category: ''
    },
    {
      id: '4',
      title: 'Article title4',
      shortDescription: 'Short description of the article...',
      content: 'Main content of the article',
      publishedDate: new Date('2022-02-04'),
      author: 'John Doe',
      category: ''
    }
  ],

  categories:
    ['Sport', 'News', 'Movies']
};


export default initialState;