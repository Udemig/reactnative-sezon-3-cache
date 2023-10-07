import React from 'react';
import {render, fireEvent} from '@testing-library/react-native';
import HomeScreen from '../src/screens/HomeScreen';

describe('HomeScreen', () => {
  it('title and card render correctly', () => {
    const {getByText, getByTestId} = render(<HomeScreen />);

    //ilk state olarak title render ediliyor mu ? (beklenti Kişi Listesi)

    const titleElement = getByTestId('appTitle');
    //title element ekrana basılıyor
    expect(titleElement).not.toBeNull();

    //app title adında bir deişken tanılmlıyoruz ve Kişi Listesi şeklinde ekranda olmasını sityoruz
    const apptitle = getByText('Kişi Listesi');
    expect(apptitle).toBeTruthy();

    //Burda title a basıldığında titlein renginin değişmesi olayını test ediyorzu

    //ilk renk olarak title elementitni propsları içerinde olan style dizinin ('Çünkü biz styleyi dizi verdik') 1 elamnındaki color properite sine erişiyoruz

    const initialColor = titleElement.props.style[1].color;
    console.log(initialColor);

    //burda ilk rengin beyaz olmasını bekledğimizi test ediyoruz
    expect(initialColor).toBe('white');
    //burada titleelementine basıyoruz
    fireEvent.press(titleElement);
    //güncelenmiş rengi tanımlıyoruz
    const updatedColor = titleElement.props.style[1].color;
    //güncellenmiş olan rengin '#16c784 ' olmasını bekjşliyrouz
    expect(updatedColor).toBe('#16c784');
  });
});
