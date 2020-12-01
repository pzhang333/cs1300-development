# CS1300 Development

## Overview

This application displays a list of characters (also called champions) from a
popular online video game called League of Legends. The purpose of this app is
to allow users to quickly find their desired champions by using the built-in
filtering and sorting methods. This application also provides a total cost in the
"cart" or "My Team" bar.

Besides basic filtering and sorting, my application supports multiple filters
within the same category/property. For example, you can check off multiple
boxes within the "Role" filter and only champions that satisfy all the selected
Roles will be displayed in the list.

## Organization of Components

In general, I tried to use object-oriented programming techniques when deciding
what components to make. This means that each of my components tries to serve
one specific function. For example, the `ChampionCard` component is responsible
for rendering a card with the details of each champion. However, it does not
need to worry about where this data comes from and can asssume that the necessary
data will be available via props. similarly, each of my other components serves
one distinct purpose. `FilterBar` renders the left-side filter bar, but does not
actual implement any filtering logic. Instead, a callback function is pass into
`FilterBar` via props, and all `FilterBar` needs to do is to use the passed in
callback.

By following these principles, I tried to create a clean and logical architecture
for my React app.

## Data Flow

First, all static data is loaded from a specific file (`ChampData.js`) that acts
as a mock database. In a real application, this static data would be loaded via
an HTTP request to an API service. This static data is loaded by `App.js`.

I also tried to make all of my React components stateless except for
`App.js`. Instead, all child components receive the necessary data via props.
`App.js` contains all state information for the entire application. In essence,
the state information in `App.js` serves as the central source of truth, which
simplifies the data flow of my application. All child components receive data 
via props and thus do not need to maintain their own internal state.

Alternatively, if child components each maintained their own state, then debugging
code could become much harder. For example, we might run into a bug where the state is 
being properly updated in the parent `App.js`, but we forgot to update the state
of a child component. In this case, we would see that our website does not 
properly render even though we think we have written correct code. By having 
state in only one place, we can avoid issues like this.

## Handling State Changes

Since all the state is contained within `App.js`, handling state changes due to
user interaction also becomes much easier.

To trigger state changes, we need to use callback functions. In our application,
since all components are stateless, all callbacks are implemented in `App.js`.
Then, these callback functions are passed down to child components via props,
and the child components use the callback functions to update the state as needed
in `App.js`.

## Libraries Used

I used React and Ant Design to create this application. Champion images are taken
from Riot Game's public API.
