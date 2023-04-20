## Book Search

[![Jest CI](https://github.com/iojichervo/book-search/actions/workflows/tests.yml/badge.svg)](https://github.com/iojichervo/book-search/actions/workflows/tests.yml)

A simple UI for search books using the [Open Library](https://openlibrary.org/) API. It's built with [Next.js](https://nextjs.org/) and [Ant Design](https://ant.design/)

## Running it locally

To run the project locally, ensure that you have Node.js installed with version 19.7.0 or higher. Then, run the following commands in your terminal:

```bash
npm i
npm run dev
```

This will install the necessary dependencies and start a local development server at [http://localhost:3000](http://localhost:3000). Open the URL in your web browser to view the project.


## Tests

You can run the test suite by executing the following command in your terminal:

```bash
npm run test
```

Continuous integration (CI) is set up on this project using [GitHub Actions](https://github.com/features/actions), and you can view the status of the latest build in the [Actions](https://github.com/iojichervo/book-search/actions) section.

## Deployment

The project is currently hosted on [Vercel](https://vercel.com/dashboard), a cloud platform for serverless deployment. The deployed application can be accessed at [https://book-search-zeta.vercel.app/](https://book-search-zeta.vercel.app/).

The application is automatically updated every time changes are pushed to the main branch.