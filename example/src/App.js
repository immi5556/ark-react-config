import React from 'react'

import { ArkConfig } from 'ark-react-config'
import 'ark-react-config/dist/index.css'

const App = () => {
  return <div>
    <br />
    Testing Ark Config to read the global variable
    <br />
    <br />
    <pre>
      {
        `
      var obj = {
        one: "Lord",
        two: {
          two: "Jesus"
        },
        three1: {
          three2: {
            three3: "my Saviour"
          }
        }
      }
`
      }
    </pre>
    <br />
    Read Nested Property Primitive Value : <input type="text" placeholder="enter key e: (prop1.prop2.prop3)" defaultValue={ArkConfig.read('obj.one') + ' ' + ArkConfig.read('obj.two.two') + ' ' + ArkConfig.read('obj.three1.three2.three3')} />
    <pre>
      <code>
        {"{ArkConfig.read('obj.one') + ' ' + ArkConfig.read('obj.two.two') + ' ' + ArkConfig.read('obj.three1.three2.three3')}"}
      </code>
    </pre>
    <br />
    Read Nested Property Object Value : <input type="text" placeholder="enter key e: (prop1.prop2.prop3)" defaultValue={JSON.stringify(ArkConfig.read('obj.two'))} />
    <pre>
      <code>
        {"{JSON.stringify(ArkConfig.read('obj.two'))}"}
      </code>
    </pre>
    <br />
    <br />
    Non Exsiting Prop: <input type="text" placeholder="enter key e: (prop1.prop2.prop3)" defaultValue={ArkConfig.read('obj.nonexist.multi.layer.prop')} />

  </div>
}

export default App
