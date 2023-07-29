import "../app/globals.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import 'flowbite';
import reducer from "../app/reducer";
import { createStore, applyMiddleware } from "redux";
import { Provider } from 'react-redux';
import NextNProgress from 'nextjs-progressbar';

// const store = createStore(reducer);

const store = createStore(reducer, applyMiddleware());

function MyApp({ Component, pageProps }) {
	return (
        <Provider store={store}>
                <NextNProgress height={6} />
                <Component {...pageProps} />
        </Provider>
	);
}
export default MyApp;