import { describe, expect, test } from 'vitest';
import { render } from '@testing-library/react';
import App from './App.jsx';
import NavBar from './components/navbar.jsx';

test("say hello to Techtonica", () => {
    // const {debug} = render(<App/>)
    // debug()
    const { getByText } = render(<App />);
    expect(getByText("Hello Techtonica!")).toBeDefined();

});

describe("Testing the NavBar", () => {
    //Create a test to check that the NavBar component renders
    test("It renders the NavBar", () => {
    // const {debug} = render(<NavBar/>)
    // debug()
        const { getByTestId } = render(<NavBar />);
        expect(getByTestId("navbar")).toBeDefined();
    });

    //Create a test to check that the NavBar component renders the name prop
    test("It recibes a props.name as props in the Navbar", () => {
        const { getByText } = render(<NavBar name="Cristina" />);
        expect(getByText("Cristina")).toBeDefined();
    })

})

