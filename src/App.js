import React from 'react';
import AppPushPreview from './component/AppPushPreview.jsx';
function App() {
  const [pushData, setPushData] = React.useState(null);
  // Write code for fetch
  return (
    <div className="App">
      <AppPushPreview options={pushData} />
    </div>
  );
}

export default App;
