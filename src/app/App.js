import React, { Fragment } from 'react';
import '../theme/App.scss';
import PokemonSection from './components/PokemonSection';
import SearchInput from './components/SearchInput';

function App() {
	React.useEffect(() => {
		console.log('App component');
	});
	return (
		<Fragment>
			<main className='App'>
				<header className='fixed-header'>
					<SearchInput />
				</header>
				<section>
					<PokemonSection />
				</section>
			</main>
		</Fragment>
	);
}

export default App;
