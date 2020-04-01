/* @flow */

import React from 'react'
import { IonApp } from '@ionic/react';
import { storiesOf } from '@storybook/react'

import Home from './'

storiesOf('Home/Pages/Home', module).add('default', () => (
    <IonApp>
        <Home></Home>
    </IonApp>
))
