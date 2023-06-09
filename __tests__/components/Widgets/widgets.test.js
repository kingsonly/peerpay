import 'react-native';
import React from 'react';
import * as widgets from "../../../Src/Components/Widgets/Index"
import Signup from "../../../Src/Screens/Auth/Signup"
import Login from "../../../Src/Screens/Auth/Login"
import renderer, { act } from 'react-test-renderer';


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


describe("Test Input field Component", () => {
    test("renders   Input field Component", () => {
        const component = renderer.create(
            <widgets.Input></widgets.Input>
        )
    })
})


describe("Test Chart Component", () => {
    test("renders   Chart Component", () => {
        const component = renderer.create(
            <widgets.ChartSegment></widgets.ChartSegment>
        )
    })
})

describe("Test Service Card Component", () => {
    test("renders Service Card Component", () => {
        const component = renderer.create(
            <widgets.ServicesCard></widgets.ServicesCard>
        )
    })
})

describe("Test Trans Card Component", () => {
    test("renders Trans Card Component", () => {
        const component = renderer.create(
            <widgets.TransCard></widgets.TransCard>
        )
    })
})

describe("Test Requests Card Component", () => {
    test("renders Requests Card Component", () => {
        const component = renderer.create(
            <widgets.RequestCard></widgets.RequestCard>
        )
    })
})








