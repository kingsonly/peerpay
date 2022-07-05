import 'react-native';
import React from 'react';
import Signup from "../../../../Src/Screens/Auth/Signup"
import renderer, { act } from 'react-test-renderer';


describe("Test Signup Screen", () => {
    const signUpWidget = renderer.create(<Signup></Signup>)
    it("should Render Test Signup Screen", () => {
        signUpWidget.toJSON()
        expect(signUpWidget).toBeTruthy()
    })


    it('should handle onChange event on name', () => {
        const testInstance = signUpWidget.root;
        const mEvent = { target: { value: 'teresa teng' } };
        act(() => {
            testInstance.findByProps({ testID: 'name' }).props.onChangeText(mEvent);
        });
        expect(testInstance.findByProps({ testID: 'name' }).props.value).toEqual('teresa teng');
    });
    it('should handle onChange event on email', () => {
        const testInstance = signUpWidget.root;
        const mEvent = { target: { value: 'sayil@email' } };
        const element = testInstance.findByProps({ testID: 'email' })
        act(() => {
            element.props.onChangeText(mEvent);
        });
        expect(element.props.value).toEqual('sayil@email');
    });

    it('should handle onChange event on password', () => {
        const testInstance = signUpWidget.root;
        const mEvent = { target: { value: 'password' } };
        const element = testInstance.findByProps({ testID: 'password' })
        act(() => {
            element.props.onChangeText(mEvent);
        });
        expect(element.props.value).toEqual('password');
    });
    it('should handle onChange event on mobile', () => {
        const testInstance = signUpWidget.root;
        const mEvent = { target: { value: '09030031914' } };
        const element = testInstance.findByProps({ testID: 'mobile' })
        act(() => {
            element.props.onChangeText(mEvent);
        });
        expect(element.props.value).toEqual('09030031914');
    });

    // it('should handle onChange event on i agree', () => {
    //     const testInstance = signUpWidget.root;
    //     const mEvent = { target: { value: true } };
    //     const element = testInstance.findByProps({ testID: 'agree' })
    //     act(() => {
    //         element.props.onPress();

    //     });
    //     console.log(element.props)
    //     expect(element.props.value).toEqual(true);
    // });
})