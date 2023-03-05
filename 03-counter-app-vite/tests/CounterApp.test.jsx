import { render, screen, fireEvent }from "@testing-library/react";
import { CounterApp } from '../src/CounterApp';

describe('Pruebas en <CounterApp/>', () => { 

  const value = 100;

  test('debe de hacer match con el snapshot', () => {

    const {container } = render (<CounterApp value={value}/>)
    expect( container ).toMatchSnapshot();

  })

  test('debe de mostrar el valor inicial "100"', () => {

    render( <CounterApp value={value} />)
    expect( screen.getByText(value) ).toBeTruthy()
  })

  test('debe de incrementar con el botón +1', () => {

    render( <CounterApp value={value} />)
    fireEvent.click( screen.getByText('+1') )

    expect( screen.getByText('101')).toBeTruthy();
  })

  test('debe de decrementar con el botón -1', () => {

    render( <CounterApp value={value} />)
    fireEvent.click( screen.getByText('-1') )

    expect( screen.getByText('99')).toBeTruthy();
  })


  test('debe de reiniciar con el botón "Reset"', () => {

    render( <CounterApp value={value} />)

    fireEvent.click( screen.getByText('-1') )
    fireEvent.click( screen.getByText('Reset') )

    expect( screen.getByText(value)).toBeTruthy();
  })


});