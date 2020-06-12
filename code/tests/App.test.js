import React from 'react';
import renderer from 'react-test-renderer';

import App from '../App';

describe('<App />', () => {
    it('has 1 child', async () => {
        let app;
        await renderer.act(async () => {
            app = renderer.create(<App />);
        })
        expect(app.toJSON().children.length).toBe(1);
    });
    

    it('renders correctly', async () => {
        let app;
        await renderer.act(async () => {
            app = renderer.create(<App />);
        })
        expect(app.toJSON()).toMatchSnapshot();
    });
});