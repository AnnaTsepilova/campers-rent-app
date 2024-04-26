# Description

This app will help everyone find and rent campers vans in Ukraine. To get
started with renting, just visit the web application and browse through the
catalog. Use the search and filter features to locate camper vans that meet your
requirements, and save your preferred options to your favorites list for
convenient access later.

## Demo

### Live view

Live view by clicking
[camper rent app](https://annatsepilova.github.io/campers-rent-app).

### Getting Started with localhost

You can also clone the project and open it in localhost.

#### Installation

Clone the repository:

```
git clone https://github.com/AnnaTsepilova/campers-rent-app.git
```

Install dependencies:

```
npm install
```

#### Usage

To run the project, use the following command:

```
npm start
```

Go to
[http://localhost:3000/campers-rent-app](http://localhost:3000/campers-rent-app)
in your browser. This page will automatically reload after saving changes to the
project files.

## Routes and Features

The application have the following routes:

- `/` - the home page with general overview of the services provided by the
  company and app's features. On the top of the page, user can navigate to
  another pages of the web application.

- `/catalog` - the catalog page contains a catalog of available camper vans for
  rent. Users can use filter and search various configurations of camper vans.
  By clicking on button "Show more" opened up detailed information about each
  camper van, and user can make booking request.

- `/favorites` - the page with personal favorites list of saved camper vans.
  User has easy access to camper vans they are interested in to rent, remind
  details and search in favorites list by features.

## Technologies

- **Backend**: [https://mockapi.io/](https://mockapi.io/)
- **API**: Axios for HTTP requests
- **Frontend**: React.js, Redux Toolkit
- **Library**: react-loader-spinner
- **Deployment**: GitHub Pages

## Author

**Anna Tsepilova** - [AnnaTsepilova](https://github.com/AnnaTsepilova)

## Screenshots

### Home page

![HomePageScreencapture](./assets/your-best-campers-rent_home-page.png)

### Catalog Page

![CatalogPageScreencapture](./assets/your-best-campers-rent_catalog-page.png)

### Favorites Page

![FavoritesPageScreencapture](./assets/your-best-campers-rent_favorites-page.png)
