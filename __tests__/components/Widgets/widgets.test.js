import 'react-native';
import React from 'react';
import * as widgets from "../../../Src/Components/Widgets/Index"
// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

it('renders correctly', () => {
    const component = renderer.create(
        <widgets.Skip></widgets.Skip>
    )
});


describe(" Test Captions Componenets", () => {
    test('renders Caption Widgets correctly', () => {
        const component = renderer.create(
            <widgets.Caption></widgets.Caption>
        )
    });
    test('renders Caption2 Widgets correctly', () => {
        const component = renderer.create(
            <widgets.Caption2></widgets.Caption2>
        )
    });
    test('renders SubCaption Widgets correctly', () => {
        const component = renderer.create(
            <widgets.Subcaption></widgets.Subcaption>
        )
    });
})



