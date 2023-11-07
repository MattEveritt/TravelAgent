import React from 'react';
import {StyleSheet, Image, View} from 'react-native';
import globalStyles from '../../styles/globalStyles';
import { ScreenContainer } from '../../components';
import { OnboardingInfoScrollView, OnboardingButtons } from './components';

export const OnboardingScreen = ({}: any) => {
  return (
    <ScreenContainer extraStyles={styles.screenContainerStyles} headerDisabled>
      <Image style={styles.logo} source={{uri:'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAEI0lEQVR4AbVXA9RcOxCu7WfbfrVtI9fJPttm3cMe1fZBfVDbtm3b/bWbTnJzs7r6vRxk+M1ki+T2LwsZ1WMaXh4zyB2qk2yqRzKiOjkV1XFP2umTikUK+49q1gRqRKjbM6bj+bR69ZKFaby3Yyyq4j4Q/VsUmW8C/bc43RxTOMZ1/TEwEGVGchQzksrP7q605k7oJEa7mU8XuAMxFS/mBjS8yVNGJ6ttGbK7YKM3jKo8Mjj8fseOL3jKtW9fVfaErj9cgOm3tttNRrYFOxvZZDsQOVswxhEq5UTPIgyUf/PNUk6v0LZtS+e/9ho+KJprXy50nCzcyIdpGQ3lEbVqVT60XpEiJcDhHK7bpEmFfERv7RG135Nb3aiG13JdDV/OW/QtUGUeOat/E5QWxd0O6CmqWh/yZwf0rEsWikv9bt2ezkvnbxG4P5BE79r10ahmbU0bwxo5QrsZzyXJqtYyuxfwidwZ79KlCls0XLlFi8qJ01DW1h44h+H77gRHohkIvZaQhWKS3kV9KTczf5mo3+GEw4pClFfsnoBoW7euJnnvtioPsgcE7zat/kXJhD5azuiwMXeGM962bSWIKpN73g49HndKe57TgLcH0OFacz1ylcsg62VJr4vKCr0cTg+uPZ4tVuvR5HqSV8VBK7ynIOH7Ils12ybr4sXizOX+xmGXg4F73FB345UkHjJfE8Nlic8yWsS3pWb2SNLtpD0peiGTdrOe8ImejBBRXmM1T+JB+uxa4kM+Dmzk+pCtlPIUlTwNz3TT5UJsdHIhRanjuhGB5zLdZPaAxxFyF6GnUvmZXdU3RAYzXKcqVSM9hYcZy5s0KeGODnJA4HpiOg8PEfpXvQIEJBwX8B3slv4z9m1H7+JZou5aDZGFLPruu+UT8S57R8eNPfURbiAgeSupxDmKpUiodOhQzh8l5KQ4ZG6cZo0Vxq8zZ1wV5Xgm9+0grO/EaMWPQtqm8UM10tdN0Q0NXF6x/qSaqcreQEatIH24T34jISkw+jaFKcXxq5j1Qw0r1fpYXlLEE5wfEEY3E5nviGyfkQ4waDFilmFUD39JJVvkIoLmkoyQGYwZ5JyzYB6Grlxpe2XpIcd1adBZE3cAX6IIlQ2lqxitxfbcJYlQy17ioFNBv2wuAIadywZg+i5Ef1004AW2Rb01JVo2C7gOkQwYLGXkEFLxQIimuEf63gHPb4m036FIbwyNV10uIVhUbo0oBx3C/wq5e2kjOUe1iLProb7roLubgyOPM0EKzQk8+ZsQPl9khh1dtjfAsZOyJCosNIU05TuAoQzpDaIqXiDvl5r1s1d3fwECHKfuT37FmsVWrFuE4MQkJwj3J2RIJb8HXEa0Z6Cew3k/MKjBMwaQAaRMyYJJ6KcrUaXhkVDjk44+fL4A7+MyusglJf8eAG9Ytoqm3R1nAAAAAElFTkSuQmCC'}}/>
      <OnboardingInfoScrollView />
      <OnboardingButtons />
    </ScreenContainer>
  );
};

const styles = StyleSheet.create({
  logo: {
    height: 72, 
    width: 72, 
    alignSelf: 'center'
  },
  screenContainerStyles: {
    paddingVertical: 31
  },
});