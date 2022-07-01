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


describe("Test All Buttons Components", () => {
    test("renders button 1 componen", () => {
        const component = renderer.create(
            <widgets.Botton1></widgets.Botton1>
        )
    })
    test("renders button 2 componen", () => {
        const component = renderer.create(
            <widgets.Botton2></widgets.Botton2>
        )
    })
    test("renders button 3 componen", () => {
        const component = renderer.create(
            <widgets.Botton3></widgets.Botton3>
        )
    })
})

describe("Test Notifications Widgets", () => {
    test("renders Notifications Widgets", () => {
        const component = renderer.create(
            <widgets.Notification></widgets.Notification>
        )
    })
})
describe("Test Current Stage Widgets", () => {
    test("renders Current Stage Widgets", () => {
        const component = renderer.create(
            <widgets.CurrentSatge></widgets.CurrentSatge>
        )
    })
})

describe("Test Avatar Widgets", () => {
    test("renders Avatar Widgets", () => {
        const component = renderer.create(
            <widgets.Avatar></widgets.Avatar>
        )
    })
})

describe("Test Welcome back Widgets", () => {
    test("renders  Welcome back Widgets", () => {
        const component = renderer.create(
            <widgets.Welcomeback></widgets.Welcomeback>
        )
    })
})

describe("Test Left Widgets", () => {
    test("renders  Left Widgets", () => {
        const component = renderer.create(
            <widgets.Left></widgets.Left>
        )
    })
})

describe("Test IDCARD Container", () => {
    test("renders   IDCARD Container", () => {
        const component = renderer.create(
            <widgets.IDCardContainer></widgets.IDCardContainer>
        )
    })
})




