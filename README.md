# template-next-redux-hooks-context

## [Download-zip](https://github.com/ats1999/template-next-redux-hooks-context/raw/main/template-next-redux-context-hooks.zip)

- `jsconfig.json` configured
- `chakra-ui` configured
- `redux` integerated
- `userContext` to get user in all part of the applications
- `useLocalUser` get user from `localStorage`
- `Layout` default layout 
- `getLayout` https://dev.to/ats1999/use-multiple-layouts-at-multiple-pages-in-next-js-2b8g

## Context
**userContext**
```js
import UserContext from "@src/context/userContext";

// inside component
const user = UserContext(UserContext);
console.log(user)
```

## Hooks
**useGET**
```js
// inside componete
const req = useGET(url);
```
**useLocalUser**
```js
const user = useLocalUser()
```
## API
- GET
- PUT
- POST
- GET_Auth


## Util
- getLocalStorage
- setLocalStorage
- isCookie

