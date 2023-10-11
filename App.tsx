import {DataProvider} from './src/hooks';
import {Login} from './src/screens';

export default function App() {
  return (
    <DataProvider>
      <Login />
    </DataProvider>
  );
}
