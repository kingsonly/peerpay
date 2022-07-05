import 'react-native';
import React from 'react';
import Login from "../../../../Src/Screens/Auth/Login"
import renderer, { act } from 'react-test-renderer';


describe ("test login component", ()=>{
    const signUpWidget = renderer.create(<Login></Login>)
    it('should handle onChange event on password', () => {
        const testInstance = signUpWidget.root;
        const mEvent = { target: { value: 'password' } };
        const element = testInstance.findByProps({ testID: 'password' })
        act(() => {
            element.props.onChangeText(mEvent);
        });
        expect(element.props.value).toEqual('password');
    });
})

