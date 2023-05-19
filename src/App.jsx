import List from './List';
import data from './data';
import { useState } from 'react';

const App = () => {
  const [people, setPeople] = useState(data);

  return (
    <main>
      <section className="container">
        <h3>{people.length} Birthday Today</h3>
        <List people={people} />
        <button type="button" className="btn" onClick={() => setPeople([])}>
          Clear all
        </button>
        <button type="button" className="btn" onClick={() => setPeople(data)}>
          Show Birthday
        </button>
      </section>
    </main>
  );
};
export default App;
