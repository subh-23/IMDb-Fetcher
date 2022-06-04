
# IMDb Chart Fetcher


<img src="https://m.media-amazon.com/images/G/01/IMDb/brand/IMDb_JobSiteBanner_1920x425._SL1280_.jpg"/>  

## :memo: IMDB Chart Fetcher

Gets you the information of top movies from IMDB.

### :pushpin: Tested URLs

1. https://www.imdb.com/india/top-rated-indian-movies
2. https://www.imdb.com/india/top-rated-tamil-movies
3. https://www.imdb.com/india/top-rated-telugu-movies


## Tech Stack

**Tool:** Javascript puppeteer library

## Run Locally

Clone the project

```bash
gh repo clone subh-23/IMDb-Fetcher
```

Go to the project directory

```bash
  cd my-project
```

Install dependencies

```bash
  npm install
```

Start the index file

```bash
  node index.js
```

Provide link and number via command line 

```bash
https://www.imdb.com/india/top-rated-indian-movies
5
```

### :This returns the following response.
```bash
{
  Title: 'Jai Bhim',
  movie_release_year: '2021',
  imdb_rating: '8.9',
  summary: 'When a tribal man is arrested for a case of alleged theft, his wife turns to a human-rights lawyer to help bring justice.',
  duration: '2h 44m',
  awards: '3 wins'
}
{
  Title: 'Anbe Sivam',
  movie_release_year: '2003',
  imdb_rating: '8.7',
  summary: 'Two men, one young and arrogant, the other damaged - physically but not spiritually - by life, are thrown together by circumstances, and find that they are in some ways bound together by fat... Read all',
  duration: '2h 40m',
  awards: '2 wins & 3 nominations'
}
{
  Title: 'Hanky Panky',
  movie_release_year: '1979',
  imdb_rating: '8.5',
  summary: "A man's simple lie to secure his job escalates into more complex lies when his orthodox boss gets suspicious.",
  duration: '2h',
  awards: '3 wins'
}
```
