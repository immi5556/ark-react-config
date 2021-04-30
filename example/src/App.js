import React from 'react'
import { ArkConfig } from 'ark-react-config'

const App = () => {

  return <div>

    <div className="wrapper">

      <h1 style={{ color: "#aba6a6" }}>Ark Config -&gt; Simple ReAct Library to read global variables</h1> <br />

      <pre>
        <code style={{ paddingLeft: "40px" }}>
          npm package installtion: <br /><br />
              npm install --save ark-react-config
      </code>
      </pre>

      <pre>
        <code style={{ paddingLeft: "40px" }}>
          declare in component: <br /><br />
        import {"{ArkConfig}"} from 'ark-react-config'
      </code>
      </pre>

      <pre>
        <code>
          This is the sample global variable used in the page <br />declare below variable in public html page or at the global json file load
      <br />
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
          <br />
        </code>
      </pre>

      <div className="table">

        <div className="row header green">
          <div className="cell">
            Senario
      </div>
          <div className="cell">
            Usage
      </div>
          <div className="cell">
            Output
      </div>
        </div>

        <div className="row">
          <div className="cell" data-title="Name">
            Get Primitive Value
      </div>
          <div className="cell" data-title="Age">
            {"ArkConfig.get('obj.two.two')}"}
          </div>
          <div className="cell" data-title="Occupation">
            Jesus
      </div>
        </div>
        <div className="row">
          <div className="cell" data-title="Name">
            Get Nested Property Primitive Value 
      </div>
          <div className="cell" data-title="Age">
            {"{ArkConfig.get('obj.one') + ' ' + ArkConfig.get('obj.two.two') + ' ' + ArkConfig.get('obj.three1.three2.three3')}" }
      </div>
          <div className="cell" data-title="Occupation">
            Lord Jesus my Saviour
      </div>
        </div>
        <div className="row">
          <div className="cell" data-title="Name">
            Get Nested Property Object Value 
      </div>
          <div className="cell" data-title="Age">
            { "{JSON.stringify(ArkConfig.get('obj.two'))}" }
      </div>
          <div className="cell" data-title="Occupation">
            {'{"two":"Jesus"}'}
      </div>
        </div>

        <div className="row">
          <div className="cell" data-title="Name">
            Set Property Value
      </div>
          <div className="cell" data-title="Age">
            {"ArkConfig.set('obj.three1.three2.three3', 'my Master')}"}
      </div>
          <div className="cell" data-title="Occupation">
            { "" }
      </div>
        </div>

      </div>

      <div className="table">

        <div className="row header blue">
          <div className="cell">
            variable name
      </div>
          <div className="cell">
            value
      </div>
          <div className="cell">
            set
      </div>
          <div className="cell">
            get
      </div>
        </div>

        <div className="row">
          <div className="cell">
            <input type="text" defaultValue="emp" id="gvar" />
      </div>
          <div className="cell">
            <textarea rows="5" defaultValue={`{
  name: 'David',
  age: 34
}`}>
            </textarea>
      </div>
          <div className="cell" data-title="Password">
            Property Path: <input type="text" id="props" defaultValue="name" placeholder="property path (emp.name)" /> <br /><br />
            Property value to be Overwritten: <input type="text" id="pval" defaultValue="Goliath" placeholder="value to be over written or created" /> <br /><br />
            <button onClick={() => ArkConfig.set(document.getElementById("props").value, document.getElementById("pval").value)}>Set Value</button>
      </div>
          <div className="cell" data-title="Active">
            Get value from property path &gt; <br /> <br />
            <button onClick={() => document.getElementById("idss").innerText = ArkConfig.get(document.getElementById("props").value)}>Get Value</button> <br /><br />
            <span id="idss"></span> <br />
      </div>
        </div>

      </div>

    </div>
      </div>
}

export default App
