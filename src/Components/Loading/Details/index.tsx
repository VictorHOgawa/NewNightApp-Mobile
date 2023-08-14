import React, { useEffect, useRef } from 'react'
import { Animated, View } from 'react-native';
import themes from '../../../global/themes';
import { Selector } from '../../Pages/Details/Selector';

import {
    Container, Header, Image, InfoContainer, Information, Title
} from './styles';

interface Props {
    loading: boolean,
    children: any
}

export function DetailsLoading({ loading, children }: Props): any {

    const opacity = useRef(new Animated.Value(0.3))

    useEffect(() => {
        if (loading) {
            Animated.loop(
                Animated.sequence([
                    Animated.timing(
                        opacity.current, {
                        toValue: 1,
                        useNativeDriver: true,
                        duration: 500
                    }),
                    Animated.timing(
                        opacity.current, {
                        toValue: 0.3,
                        useNativeDriver: true,
                        duration: 800
                    })
                ])
            ).start()
        }

        if (!loading) {
            Animated.loop(
                Animated.sequence([
                    Animated.timing(
                        opacity.current, {
                        toValue: 1,
                        useNativeDriver: true,
                        duration: 500
                    }),
                    Animated.timing(
                        opacity.current, {
                        toValue: 0.3,
                        useNativeDriver: true,
                        duration: 800
                    })
                ])
            ).stop()
        }


    }, [opacity, loading])


    if (loading) {
        return (
            <Container>
                <Image>
                    <Animated.View
                        style={[{
                            borderBottomLeftRadius: 50,
                            width: '100%',
                            height: '100%',
                            opacity: opacity.current,
                            backgroundColor: themes.colors.secondaryFade
                        }]}
                    />
                </Image>
                <Header>

                    <Title>
                        <Animated.View
                            style={[{
                                borderRadius: 10,
                                width: '100%',
                                height: '100%',
                                opacity: opacity.current,
                                backgroundColor: themes.colors.secondaryFade
                            }]}
                        />
                    </Title>
                    <Information >
                        <Animated.View
                            style={[{
                                borderRadius: 10,
                                width: '100%',
                                height: '100%',
                                opacity: opacity.current,
                                backgroundColor: themes.colors.secondaryFade
                            }]}
                        />
                    </Information>

                </Header>
               
                
            </Container>
        )
    }

    if (!loading) {
        return (
            <>{children}</>
        )
    }
}