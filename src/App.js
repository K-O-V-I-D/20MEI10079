// App.js
import MyLazyLoadedComponent from './MyLazyLoadedComponent'; // First import
import MyLazyLoadedComponent from './path/to/MyLazyLoadedComponent'; // Second import



const MyLazyLoadedComponent = React.lazy(() => import('./MyLazyLoadedComponent'));

const App = () => {
  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <MyLazyLoadedComponent />
      </Suspense>
    </div>
  );
};

export default App;
