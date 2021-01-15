import React, { useEffect} from 'react';
import './App.css';
import { Switch, Route, Redirect } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setCurrentUser } from './redux/user/user.actions'
import { selectCurrentUser } from './redux/user/user.selectors';

import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import CheckoutPage from './pages/checkout/checkout.component';
import SignInAndSignUpPage from './components/sign-in-and-sign-up/sign-in-and-sign-up.component';

import Header from './components/header/header.component';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';


const App = () => {
  //const [ currentUser, setCurrentUser ] = useState<any>(null);
  const dispatch = useDispatch();
  const user = useSelector(selectCurrentUser)

  useEffect(() => {
    const unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef?.onSnapshot(snapshot => {
          dispatch(
            setCurrentUser({
              id: snapshot.id,
              ...snapshot.data()
            })
          )
        })
        
      } else {
        dispatch(setCurrentUser(userAuth))
      }
    })

    return () => unsubscribeFromAuth()
  }, [dispatch])

  return (
    <div>
      {/* <Header currentUser={currentUser}></Header> */}
      <Header></Header>
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/shop' component={ShopPage}/>
        <Route exact path='/checkout' component={CheckoutPage} />
        <Route 
          exact 
          path='/signin' 
          render={() => user ? (
              <Redirect to='/' />
            ) : (
              <SignInAndSignUpPage />
            )
          } 
        />
      </Switch>
    </div>
  );
}

export default App;

// const mapDispatchToProps = (dispatch: any) => ({
//   setCurrentUser: (user: any) => dispatch(setCurrentUser(user))
// })

// export default connect(null, mapDispatchToProps)(App);



// interface IProps {
// }
// interface IState {
//   currentUser: any
// }
// class App extends Component<IProps, IState> {
//   currentUser: any;

//   constructor(props: IProps) {
//     super(props);

//     this.state = {
//       currentUser: null
//     }
//   }

//   unsubscribeFromAuth: any = null;

//   componentDidMount() {
//     this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
//       if (userAuth) {
//         const userRef = await createUserProfileDocument(userAuth);

//         userRef?.onSnapshot(snapshot => {
//           this.setState({
//             currentUser: {
//               id: snapshot.id,
//               ...snapshot.data()
//             }
//           })
//         });
//       } else {
//         this.setState({ currentUser: userAuth })
//       }
//     })
//   }

//   render() {
//     return (
//     <div>
//        <Header currentUser={this.state.currentUser}></Header>
//        <Switch>
//          <Route exact path='/' component={HomePage} />
//          <Route path='/shop' component={ShopPage}/>
//          <Route path='/signin' component={SignInAndSignUpPage} />
//        </Switch>
//      </div>
//     )
//   }
// }
