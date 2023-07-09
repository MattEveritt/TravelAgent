import { useState, useCallback } from "react";
import { View } from "react-native";
import { useDispatch } from "react-redux";
import { saveTraveller } from "../../redux";
import { TripTextInput, TripButton } from "../travelUI";

interface AddTravellerFormProps {}

export const AddTravellerForm: React.FC<AddTravellerFormProps> = ({}) => {
    const dispatch = useDispatch();
    const [name, setName] = useState<string | undefined>();
    const [surname, setSurname] = useState<string | undefined>();
  
    const handleSaveTraveller = useCallback(() => {
      dispatch(saveTraveller({name, surname}));
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [name, surname]);
  
    return (
      <View style={{height: '100%', width: '100%'}}>
        <TripTextInput
          value={name}
          onChangeText={setName}
          placeHolder={'travellers name'}
        />
        <TripTextInput
          value={surname}
          onChangeText={setSurname}
          placeHolder={'travellers surname'}
        />
        <TripButton onPress={handleSaveTraveller} title={'Save traveller'} />
      </View>
    );
  };
  