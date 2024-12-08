import RootPage from '../../src/screens/root';

describe('<RootPage />', () => {
	it('should render and display expected content', () => {
		cy.mount(<RootPage />);

		cy.get('h1').contains(
			'Российские удлинители собственного производства <br /> по международным стандартам',
		);
		cy.get('a[href="/about"]').should('be.visible');
	});
});
