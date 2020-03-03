# Example Project for Software Architecture Summit

Example project for [our talk at Software Architecture
Summit](https://software-architecture-summit.de/softwarearchitektur/moderne-frontend-entwicklung/).
The main objective is to show component-based development. We will also show
some of our favorite tools:

* Rails
* complate
* faucet
* aiur
* eslint
* stylelint
* prettier
* tabelle
* Custom Elements

## Setup (without Docker)

```
bundle
npm i
```

Make sure, you have PostgreSQL installed and running. The `DATABASE_URL` environment variable should point to that database.

Now you need to run in parallel:

```
rails server
npm start
npm aiur-dev
```

Alternatively, you can run it with [foreman](https://github.com/ddollar/foreman) (or a [foreman compatible tool](https://github.com/ddollar/foreman/#ports)).

Visit http://localhost:3000 to visit the app, and http://localhost:4001 to visit the pattern library.

## Setup (with Docker)

Make sure you have Docker and docker-compose installed. Then run:

```
./bin/setup
```

Run the following command to start the application:

```
docker-compose up
```

Visit http://localhost:3000 to visit the app, and http://localhost:4001 to visit the pattern library.

To run a `rails` command, prefix it with `docker-compose run --rm web`. For example:

```
docker-compose run --rm web rails db:create
```

The same is true for updating dependencies (note that `npm` is run in the faucet container):

```
docker-compose run --rm web bundle
docker-compose run --rm faucet npm i
```

## Folder structure

This is a standard Rails folder structure with the following exceptions:

1. `app/assets/javascripts` and `app/assets/stylesheets` only contain the non-component code and register all components
2. `app/components` contains all components in a flat structure
3. `app/views` only contains templates (pages in Atomic Design parlance), no partials (atoms, molecules, organisms)
