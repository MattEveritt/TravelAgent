import { StyleSheet, View, KeyboardAvoidingView } from 'react-native';
import React, { ReactNode } from 'react';
import * as Headers from '../header';

type HeaderTypes = {
  [key: string]: React.ComponentType<any>;
};

type PropTypes = {
  children?: ReactNode,
  extraStyles?: {}, 
  headerType?: string,
  headerTitle?: string,
  headerDisabled?: boolean,
  onBackPressExtra?: () => void | undefined,
}

export const ScreenContainer = ({
  children, extraStyles, headerType = 'TitleOnlyHeader', headerTitle, headerDisabled = false, onBackPressExtra = undefined,
}: PropTypes) => {

  const HeaderComponent = (Headers as HeaderTypes)[headerType];

  return (
    <>
      {HeaderComponent && 
        <HeaderComponent 
          titleText={headerTitle} 
          headerDisabled={headerDisabled}
          onBackPressExtra={onBackPressExtra}
        />
      }
      <KeyboardAvoidingView behavior='height' enabled={false} style={[styles.screenContainer, extraStyles]}>
        {children}
      </KeyboardAvoidingView>
    </>
  );
};

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    backgroundColor: '#ffffff',
    padding: 16
  },
});
