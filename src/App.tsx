import React from 'react';
import Card, {CardVariant} from "./components/Card";

function App() {
  return (
    <div>
        <Card width={'200px'} height={'200px'} variant={CardVariant.outlined} onClick={(num) => console.log('click', num)}>
            <button>Кнопка</button>
            <div>kdfjalkfjas</div>
        </Card>
    </div>
  );
}

export default App;
