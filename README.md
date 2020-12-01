# CS1300 Development

## Organization of Components

In general, I tried to use object oriented programming techniques when deciding
what components to make. This means that each of my components tries to serve
1 specific function. For example, the `ChampionCard` component is responsible
for rendering a card with the details of each champion. However, it does not
need to worry about where this data comes from and can asssume that the necessary
data will be available via props. similarly, each of my other components serves
1 distinct purpose. `FilterBar` renders the left side filter bar, but does not
actual implement any filtering logic. Instead, a callback function is pass into
`FilterBar` via props, and all `FilterBar` needs to do is use the passed in
callback.

By following these principles, I tried to create a clean and logical architecture
for my website.

## Data Flow

For my application, I tried to make all my components stateless except for
`App.js`. Instead, all child components receive the necessary data via props.
`App.js` contains the state information for the entire website. In essence, the
state information in `App.js` serves as the central source of truth, which
simplifies the data flow of my application.

If child components each maintained their own state, then debugging code can 
become much harder. For example, we might run into a bug where the state is 
being properly updated in the parent `App.js`, but we forgot to update the state
of a child component. In this case, we would see that our website does not 
properly update even though we think we have written correct code. By having 
state in only 1 place, we can avoid issues like this.

## Handling State Changes

To trigger state changes, we need to use callback functions. In our application,
since all components are stateless, all callbacks are implemented in `App.js`.
Then, these callback functions are passed down to child components via props,
and the child components use the callback functions to update the state as needed
in `App.js`.
