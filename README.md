# Example Project for Software Architecture Summit

Example project for [our talk at Software Architecture
Summit](https://software-architecture-summit.de/softwarearchitektur/moderne-frontend-entwicklung/).
The main objective is to show component-based development. We will also show
some of our favorite tools:

* Rails
* complate
* faucet
* aiur

## Setup

```
bundle
npm i
```

Now you need to run in parallel:

```
rails s
npm run watch
```

Visit http://localhost:3000 and you are ready to go.

## Folder structure

This is a standard Rails folder structure with the following exceptions:

1. `app/assets/javascripts` and `app/assets/stylesheets` only contain the non-component code and register all components
2. `app/components` contains all components in a flat structure
3. `app/views` only contains templates (pages in Atomic Design parlance), no partials (atoms, molecules, organisms)
