import { Button, ButtonTypes } from './Button.js'

function App() {
  return (
    <div className="text-center">
      <header className="flex flex-col items-center justify-center min-h-screen">
        <div className="bg-gray-800 md:w-1/3 rounded-2xl">
          <div className="text-white text-center text-3xl lg:text-5xl m-3">
              Calculator
          </div>

          <div className="flex flex-col rounded-lg bg-gray-600 m-3">
            <div className="text-white text-right">
              <span className="mr-2">.</span>
            </div>
    
            <div className="grow text-white text-right text-3xl">
              <span className="mr-2">..</span>
            </div>
          </div>

          <div className="flex items-stretch h-16 lg:h-24">
            <Button
              text="x"
              altText="Delete last number or operation"
              type={ButtonTypes.OPERATOR}
            ></Button>
            <Button
              text="("
              altText="Open parentheses"
              type={ButtonTypes.OPERATOR}
            ></Button>
            <Button
              text=")"
              altText="Close parentheses"
              type={ButtonTypes.OPERATOR}
            ></Button>
            <Button
              text="/"
              altText="Split operation"
              type={ButtonTypes.OPERATOR}
            ></Button>
          </div>
          
          <div className="flex items-stretch h-16 lg:h-24">
            <Button
              text="7"
              altText="Add number 7"
              type={ButtonTypes.NUMBER}
            ></Button>
            <Button
              text="8"
              altText="Add number 8"
              type={ButtonTypes.NUMBER}
            ></Button>
            <Button
              text="9"
              altText="Add number 9"
              type={ButtonTypes.NUMBER}
            ></Button>
            <Button
              text="*"
              altText="Multiplication operation"
              type={ButtonTypes.OPERATOR}
            ></Button>
          </div>

          <div className="flex items-stretch h-16 lg:h-24">
            <Button
              text="4"
              altText="Add number 4"
              type={ButtonTypes.NUMBER}
            ></Button>
            <Button
              text="5"
              altText="Add number 5"
              type={ButtonTypes.NUMBER}
            ></Button>
            <Button
              text="6"
              altText="Add number 6"
              type={ButtonTypes.NUMBER}
            ></Button>
            <Button
              text="-"
              altText="Subtract operation"
              type={ButtonTypes.OPERATOR}
            ></Button>
          </div>
          
          <div className="flex items-stretch h-16 lg:h-24">
            <Button
              text="1"
              altText="Add number 1"
              type={ButtonTypes.NUMBER}
            ></Button>
            <Button
              text="2"
              altText="Add number 2"
              type={ButtonTypes.NUMBER}
            ></Button>
            <Button
              text="3"
              altText="Add number 3"
              type={ButtonTypes.NUMBER}
            ></Button>
            <Button
              text="+"
              altText="Addition operation"
              type={ButtonTypes.OPERATOR}
            ></Button>
          </div>

          <div className="flex items-stretch h-16 lg:h-24">
            <Button
              text="C"
              altText="Delete all operation"
              type={ButtonTypes.DELETE}
            ></Button>
            <Button
              text="0"
              altText="Add number 0"
              type={ButtonTypes.NUMBER}
            ></Button>
            <Button
              text=","
              altText="Add comma"
              type={ButtonTypes.OPERATOR}
            ></Button>
            <Button
              text="="
              altText="Calculate mathematical operation"
              type={ButtonTypes.CALCULATE}
            ></Button>
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
