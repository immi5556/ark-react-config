# ark-react-config

> This a simple react library to read global variable values with in components

[![Generic badge](https://img.shields.io/badge/npm-ark--react--config-green)](https://www.npmjs.com/package/ark-react-config/)

## Install

```bash
npm install --save ark-react-config
```

[Demo Link](https://immi5556.github.io/ark-react-config/ "Demo Link")

## Usage

```jsx
import { ArkConfig } from 'ark-react-config'

class Example extends Component {
  readGlobalProp(){
    ArkConfig.get('obj.two.two');
  }
  render() {
    return <div> Component content here </div>
  }
}
```

## License

MIT © [https://github.com/immi5556](https://github.com/https://github.com/immi5556)
