import "../app/globals.css";
import NextNProgress from 'nextjs-progressbar';

function MyApp({ Component, pageProps }) {
	return (
        <>
            <NextNProgress height={6} />
            <Component {...pageProps} />
        </>
	);
}
export default MyApp;