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
