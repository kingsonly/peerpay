import 'react-native';
import React from 'react';
import Login from "../../../../Src/Screens/Auth/Login"
import renderer, { act } from 'react-test-renderer';


describe ("test login component", ()=>{
    const loginUpWidget = renderer.create(<Login></Login>)
    it('should handle onChange event on password field', () => {
        const testInstance = loginUpWidget.root;
        const mEvent = { target: { value: 'password' } };
        const element = testInstance.findByProps({ testID: 'password' })
        act(() => {
            element.props.onChangeText(mEvent);
        });
        expect(element.props.value).toEqual('password');
    });
})


