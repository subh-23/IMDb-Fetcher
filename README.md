
# IMDb (Backend assignment)

This project is based on a assignment for Fullstack intern role at Thinklabs

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
[
  {
    "title": "Pather Panchali",
    "movie_release_year": "1955",
    "imdb_rating": "8.6",
    "summary": "Impoverished priest Harihar Ray, dreaming of a better life for himself and his family, leaves his rural Bengal village in search of work.",
    "duration": "2h 5min",
    "genre": "Drama"
  },
  {
    "title": "Hanky Panky",
    "movie_release_year": "1979",
    "imdb_rating": "8.6",
    "summary": "A man's simple lie to secure his job escalates into more complex lies when his orthodox boss gets suspicious.",
    "duration": "2h 24min",
    "genre": "Comedy, Romance"
  },
  {
    "title": "Raatchasan",
    "movie_release_year": "2018",
    "imdb_rating": "8.7",
    "summary": "A sub-inspector sets out in pursuit of a mysterious serial killer who targets teen school girls and murders them brutally.",
    "duration": "2h 50min",
    "genre": "Action, Crime, Thriller"
  }
]
```
