import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
	
	return (
		<Html>
			<Head>				
                <link rel="icon" type="image/x-icon" href="../app/favicon.ico" />
				<meta NAME="robots" CONTENT="noindex,nofollow" />
				<link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
                <link href="https://fonts.googleapis.com/css2?family=Manrope:wght@200&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,900&display=swap" rel="stylesheet" />
			</Head>
			<body>
				<Main />
				<NextScript />
			</body>
		</Html>
	);
}