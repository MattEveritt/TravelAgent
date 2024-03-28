import {
  Dispatch,
  SetStateAction,
  useCallback,
  useEffect,
  useState,
} from 'react';
import {
  NavigationProp,
  ParamListBase,
  useFocusEffect,
  useNavigation,
  useRoute,
} from '@react-navigation/native';

interface RouteParams {
  params: {
    setFocusedIndex: Dispatch<SetStateAction<number>>;
  };
  key: string;
  name: string;
}

export const useFlightsBookingScreens = (screenIndex: number) => {
  const route = useRoute<RouteParams>();
  const { setFocusedIndex } = route.params;
  const navigation: NavigationProp<ParamListBase> = useNavigation();
  const [modalVisible, setModalVisible] = useState(false);

  useEffect(() => {
    const unsubscribe = navigation.addListener('beforeRemove', e => {
      // Prevent default behavior of leaving the screen
      e.preventDefault();
      setModalVisible(true);
    });

    // Cleanup function to remove the listener when the component is unmounted
    return unsubscribe;
  }, [navigation, setModalVisible]);

  useFocusEffect(
    useCallback(() => {
      setFocusedIndex(screenIndex);
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []),
  );

  return { modalVisible, setModalVisible, navigation };
};
