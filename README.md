# Marvel app rewrite

Testing Vue's capabilities by rewriteing an old Vite+React app.

It implements the basics: routing, state management, lifecycle methods for asynchronous data awaiting...

## Folder structure:

```
marvel-app/
├── public/
│   └── static assets...
├── src/
│   ├── api/
│   │   └── Api call methods
│   ├── assets/
│   │   └── Images and tailwind.css
│   ├── components/
│   │   └── Pieces of the main Views
│   ├── router/
│   │   └── A history browser instance with the routes
│   ├── store/
│   │   └── A Pinia store instance than handles the app state
│   ├── types/
│   │   └── Return types of the api calls
│   ├── views/
│   │   └── Main view mounting components
│   ├── App.vue --> Mounts the router view
│   └── main.ts --> App entry point config.
└── config.files...
```