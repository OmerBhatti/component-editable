# Component Editable
With this `Editable` Wrapper you can make any React Component Editable and get `rawHtml` or `styledHtml` based on ypur need.

### Usage
 - Wrap any Component in Editable wrapper and pass `editable` true.
 - You can get rawHtml or styledHtml whenever you need using `onChange` listener.
```js
import Editable from 'component-editable';

function App() {
  return (
    <>
      // ... some other components
      <Editable
        editable  // true if inner content is editable
        onChange={(rawHtml, styledHtml) => console.log(rawHtml, styledHtml)}
      >
        <h1>Test Heading</h1>
        <p className="read-the-docs">
          This Content is placeholder
        </p>
      </Editable>
      // ... some other components
    </>
  )
}

export default App;
```

### Props
| prop | function | default |
|------|----------|---------|
|`editable`|Set if content is editable|true|
|`onChange`|Listener to get rawHtml and styledHtml of Wrapeed Component|() => {}|
|`rootSelector`|It's used to get the root of the react app for `styledHtml` |#root|
|`linksRoot`|it's the starting path of assets used in page for `styledHtml` |/|